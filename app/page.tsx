"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

interface ProjectData {
  project_id: number;
  project_name: string;
  project_location: string;
  project_type: "house" | "plot";
  property_price: string;
  property_full_address: string;
  property_cover_image: string;
  property_card_amenities: {
    label: string;
    value: string;
  }[];
  plot_overview?: {
    size: string;
    plot_type: string;
    plot_facing: string;
    zone: string;
  };
  residence_overview?: {
    type: string;
    floors: string;
    built_up: string;
    facing: string;
  };
}

export default function Home() {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/mock-data/projects_data.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50; // Minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentProjectIndex < projects.length - 1) {
        // Swipe left - next project
        setCurrentProjectIndex((prev) => prev + 1);
      } else if (diff < 0 && currentProjectIndex > 0) {
        // Swipe right - previous project
        setCurrentProjectIndex((prev) => prev - 1);
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Mouse event handlers for desktop drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const diff = startX - currentX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentProjectIndex < projects.length - 1) {
        setCurrentProjectIndex((prev) => prev + 1);
      } else if (diff < 0 && currentProjectIndex > 0) {
        setCurrentProjectIndex((prev) => prev - 1);
      }
    }

    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  // Prevent text selection during drag
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "auto";
    }

    return () => {
      document.body.style.userSelect = "auto";
    };
  }, [isDragging]);

  const handleEnquireClick = (
    e: React.MouseEvent,
    projectName: string,
    projectLocation: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const encodedProject = encodeURIComponent(
      `${projectName} - ${projectLocation}`
    );
    router.push(`/contact?project=${encodedProject}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-red-100">
          <Image
            src="/images/landing-page-images/cover-image.webp"
            alt="Modern luxury townhouses with contemporary architecture"
            fill
            className="object-cover"
            priority
            onError={(e) => {
              console.error("Error loading image:", e);
            }}
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8 w-full mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Welcome To Shiro
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl px-4 leading-relaxed">
            We believe everyone needs their own space. A home that feels secure,
            a place to call their own.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:px-8 rounded-md text-base sm:text-lg transition duration-300 inline-block"
            >
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Overall Development Section */}
      <section id="development" className="py-12 sm:py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            Overall development
          </h2>
          <p className="text-gray-700 text-base sm:text-lg text-center max-w-5xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidi dunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incidi dunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
            dunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incidi dunt Lorem ipsum d
          </p>
        </div>
      </section>

      {/* For Sale Section */}
      <section id="projects" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            For Sale
          </h2>
          <p className="text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidi dunt
          </p>

          {loading ? (
            <div className="flex justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              {/* Desktop Grid Layout */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project) => (
                  <div
                    key={project.project_id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
                  >
                    <Link
                      href={`/projects/${project.project_id}`}
                      className="flex flex-col h-full"
                    >
                      <div className="relative h-[180px] sm:h-[200px]">
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          Featured
                        </div>
                        <Image
                          src={project.property_cover_image}
                          alt={project.project_name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex-grow">
                          <h3 className="text-base sm:text-lg font-semibold mb-2 text-black h-[3.5rem] line-clamp-2">
                            {project.project_name} | {project.project_location}
                          </h3>
                          <p className="text-xs text-gray-600">
                            {project.property_full_address}
                          </p>
                        </div>

                        <div className="mt-auto">
                          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                            {project.property_card_amenities.map(
                              (amenity, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-1"
                                >
                                  <span className="text-[10px] text-gray-600">
                                    {amenity.label}:
                                  </span>
                                  <span className="text-[10px] text-gray-600">
                                    {amenity.value}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                            <span className="text-blue-600 text-lg sm:text-xl font-bold">
                              {project.property_price}
                            </span>
                            <button
                              onClick={(e) =>
                                handleEnquireClick(
                                  e,
                                  project.project_name,
                                  project.project_location
                                )
                              }
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300"
                            >
                              Enquire Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Mobile Swipeable Carousel */}
              <div className="md:hidden">
                <div
                  ref={carouselRef}
                  className="relative overflow-hidden rounded-xl"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                      transform: `translateX(-${currentProjectIndex * 100}%)`,
                    }}
                  >
                    {projects.map((project) => (
                      <div
                        key={project.project_id}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
                          <Link
                            href={`/projects/${project.project_id}`}
                            className="flex flex-col h-full"
                          >
                            <div className="relative h-[200px]">
                              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                                Featured
                              </div>
                              <Image
                                src={project.property_cover_image}
                                alt={project.project_name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                              <div className="flex-grow">
                                <h3 className="text-lg font-semibold mb-2 text-black h-[3.5rem] line-clamp-2">
                                  {project.project_name} |{" "}
                                  {project.project_location}
                                </h3>
                                <p className="text-xs text-gray-600">
                                  {project.property_full_address}
                                </p>
                              </div>

                              <div className="mt-auto">
                                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                  {project.property_card_amenities.map(
                                    (amenity, index) => (
                                      <div
                                        key={index}
                                        className="flex items-center gap-1"
                                      >
                                        <span className="text-[10px] text-gray-600">
                                          {amenity.label}:
                                        </span>
                                        <span className="text-[10px] text-gray-600">
                                          {amenity.value}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                  <span className="text-blue-600 text-xl font-bold">
                                    {project.property_price}
                                  </span>
                                  <button
                                    onClick={(e) =>
                                      handleEnquireClick(
                                        e,
                                        project.project_name,
                                        project.project_location
                                      )
                                    }
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300"
                                  >
                                    Enquire Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Bank Approval Section */}
      <section id="bank-approval" className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Bank Approved
            </h2>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12">
            <div className="w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 relative flex-shrink-0">
              <Image
                src="/images/banks-icons/hdfc.png"
                alt="HDFC Bank"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 relative flex-shrink-0">
              <Image
                src="/images/banks-icons/icici.png"
                alt="ICICI Bank"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-24 h-12 sm:w-32 sm:h-16 lg:w-40 lg:h-20 relative flex-shrink-0">
              <Image
                src="/images/banks-icons/sbi.png"
                alt="SBI Bank"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="about" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/landing-page-images/clubhouse.webp"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                Our mission is to create exceptional living spaces that enhance
                the quality of life for our residents. We are committed to
                developing sustainable, innovative, and aesthetically pleasing
                properties that stand the test of time. Through meticulous
                planning, quality construction, and attention to detail, we aim
                to exceed expectations and set new standards in the real estate
                industry.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-1 md:order-2">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/landing-page-images/clubhouse.webp"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                We envision a future where our developments are recognized as
                landmarks of excellence and innovation. Our vision is to be the
                preferred choice for discerning homebuyers and investors, known
                for our unwavering commitment to quality, sustainability, and
                customer satisfaction. We strive to create communities that
                foster connection, well-being, and prosperity for generations to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
