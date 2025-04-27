"use client";

import Image from "next/image";
import TabSection from "@/app/components/TabSection";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface ProjectData {
  project_id: number;
  project_name: string;
  project_location: string;
  project_description: string;
  project_extended_description: string;
  property_price: string;
  property_sample_price: string;
  property_full_address: string;
  property_details: {
    details_icon_name: string;
    details_icon_path: string;
    detail_name: string;
    detail_value: string;
  }[];
  property_certificates: string[];
  property_amenities: {
    exists: boolean;
    icon_name: string;
    icon_path: string;
    name: string;
  }[];
  property_floor_plans: {
    floor_level: string;
    total_area: string;
    rooms: {
      Room: number;
      Bed: number;
      Bath: number;
    };
    floor_plan_path: string;
  }[];
  property_specifications: {
    specification_title: string;
    specification_details: string;
  }[];
  property_neighborhood: {
    [key: string]: string[];
  };
  property_location: {
    latitude: number;
    longitude: number;
  };
  property_gallery_images: string[];
  property_cover_image: string;
  property_video_link: string;
  property_faq: {
    question: string;
    answer: string;
  }[];
}

export default function ProjectDetails() {
  const params = useParams();
  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentGalleryPage, setCurrentGalleryPage] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const imagesPerPage = 6;

  // Function to handle image navigation in modal
  const handleImageNavigation = (direction: "prev" | "next") => {
    if (!projectData || selectedImageIndex === null) return;

    const totalImages = projectData.property_gallery_images.length;

    if (direction === "prev") {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return prevIndex === 0 ? totalImages - 1 : prevIndex - 1;
      });
    } else {
      setSelectedImageIndex((prevIndex) => {
        if (prevIndex === null) return 0;
        return prevIndex === totalImages - 1 ? 0 : prevIndex + 1;
      });
    }
  };

  // Function to handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      switch (e.key) {
        case "Escape":
          setSelectedImageIndex(null);
          break;
        case "ArrowLeft":
          handleImageNavigation("prev");
          break;
        case "ArrowRight":
          handleImageNavigation("next");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImageIndex, projectData]); // Add dependencies to ensure the latest state is used

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        // Fetch the projects data
        const response = await fetch("/mock-data/projects_data.json");
        const data = await response.json();

        // Find the project with the matching ID
        const projectId = parseInt(params.id as string);
        const project = data.find(
          (p: ProjectData) => p.project_id === projectId
        );

        if (project) {
          setProjectData(project);
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [params.id]);

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Property Image */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-[450px] w-full rounded-lg overflow-hidden">
              <video
                src={projectData.property_video_link}
                className="object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            </div>

            <div className="mt-8">
              <h1 className="text-3xl text-black font-bold">
                {projectData.project_name} - {projectData.project_location}
              </h1>
              <div className="prose mt-4 text-gray-600">
                <p>{projectData.project_description}</p>
                <p className="mt-4">
                  {projectData.project_extended_description}
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Property Details */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Property Details</h2>

              {/* Property Details Items */}
              <div className="space-y-6">
                {projectData.property_details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0">
                      <Image
                        src={detail.details_icon_path}
                        alt={detail.detail_name}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">
                        {detail.detail_name}
                      </p>
                      <p className="text-black font-medium">
                        {detail.detail_value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-black font-bold">
                    {projectData.property_sample_price}
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full text-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl text-black font-bold mb-6">
                Certificates
              </h3>

              <div className="border-t mb-6"></div>

              <div className="flex justify-between">
                {projectData.property_certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-center w-[19%] flex flex-col justify-center min-h-[50px] p-1"
                  >
                    <div className="text-xs text-black font-medium leading-tight">
                      {cert.split(" ")[0]}
                    </div>
                    <div className="text-xs text-black leading-tight">
                      {cert.includes(" ")
                        ? cert.split(" ").slice(1).join(" ")
                        : "Approved"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share button */}
            <div className="mt-6">
              <button className="w-full bg-blue-500 text-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-share"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Tabbed Sections (Amenities, Floor Plan, Specifications, Neighborhood) */}
        <section className="mt-12">
          <TabSection
            amenities={projectData.property_amenities}
            floorPlans={projectData.property_floor_plans}
            specifications={projectData.property_specifications}
            neighborhood={projectData.property_neighborhood}
          />
        </section>

        {/* Location Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932336676766!2d${projectData.property_location.longitude}!3d${projectData.property_location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1688456594230!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="relative">
            {projectData.property_gallery_images.length > imagesPerPage && (
              <>
                <button
                  onClick={() =>
                    setCurrentGalleryPage((prev) => Math.max(0, prev - 1))
                  }
                  disabled={currentGalleryPage === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg ${
                    currentGalleryPage === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                  aria-label="Previous page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentGalleryPage((prev) =>
                      Math.min(
                        Math.ceil(
                          projectData.property_gallery_images.length /
                            imagesPerPage
                        ) - 1,
                        prev + 1
                      )
                    )
                  }
                  disabled={
                    currentGalleryPage >=
                    Math.ceil(
                      projectData.property_gallery_images.length / imagesPerPage
                    ) -
                      1
                  }
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg ${
                    currentGalleryPage >=
                    Math.ceil(
                      projectData.property_gallery_images.length / imagesPerPage
                    ) -
                      1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
                  aria-label="Next page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectData.property_gallery_images
                .slice(
                  currentGalleryPage * imagesPerPage,
                  (currentGalleryPage + 1) * imagesPerPage
                )
                .map((image, index) => (
                  <div
                    key={index}
                    className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() =>
                      setSelectedImageIndex(
                        currentGalleryPage * imagesPerPage + index
                      )
                    }
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${
                        currentGalleryPage * imagesPerPage + index + 1
                      }`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Image Modal */}
          {selectedImageIndex !== null && projectData && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-xl"
              onClick={() => setSelectedImageIndex(null)}
            >
              <div
                className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute -top-12 right-0 text-gray-800 hover:text-gray-600 z-50"
                  onClick={() => setSelectedImageIndex(null)}
                  aria-label="Close modal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Navigation buttons */}
                <button
                  type="button"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg z-50"
                  onClick={() => handleImageNavigation("prev")}
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg z-50"
                  onClick={() => handleImageNavigation("next")}
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>

                {/* Modal Image */}
                <div className="relative w-[80vw] h-[80vh] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={
                      projectData.property_gallery_images[selectedImageIndex]
                    }
                    alt={`Gallery image ${selectedImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="80vw"
                    priority
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Book Now Section */}
        <section className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 mr-4">
                <Image
                  src="/images/application-icons/wallet.svg"
                  alt="Price"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className="text-3xl text-black font-bold">
                  {projectData.property_price}
                </p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-12 rounded-full text-lg transition-colors w-full md:w-auto">
              Book Now
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            {projectData.property_faq.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <div
                  className="flex justify-between items-center py-3 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </h3>
                  <div className="text-2xl text-gray-500 transition-transform duration-200">
                    {openFaqIndex === index ? (
                      <span className="transform rotate-45 inline-block">
                        +
                      </span>
                    ) : (
                      <span>+</span>
                    )}
                  </div>
                </div>
                {openFaqIndex === index && (
                  <div className="py-2 text-gray-600 transition-all duration-200 ease-in-out">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
