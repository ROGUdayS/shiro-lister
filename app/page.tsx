"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";

interface ProjectData {
  project_id: number;
  project_name: string;
  project_location: string;
  property_price: string;
  property_full_address: string;
  property_cover_image: string;
  property_card_amenities: {
    icon_path: string;
    name: string;
  }[];
}

export default function Home() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

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

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 w-11/12 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome To Shiro
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl">
            We believe everyone needs their own space. A home that feels secure,
            a place to call their own.
          </p>
          <div className="mt-10">
            <Link
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300"
            >
              Explore Projects
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
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
      <section id="development" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Overall development
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidi dunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incidi dunt Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi
            dunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incidi dunt Lorem ipsum d
          </p>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Projects</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidi dunt
          </p>

          {loading ? (
            <div className="flex justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.project_id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full"
                >
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
                          {project.project_name} | {project.project_location}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {project.property_full_address}
                        </p>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4">
                          {project.property_card_amenities.map(
                            (amenity, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1"
                              >
                                <Image
                                  src={amenity.icon_path}
                                  alt={amenity.name}
                                  width={16}
                                  height={16}
                                  className="opacity-60"
                                />
                                <span className="text-[10px] text-gray-600">
                                  {amenity.name}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <span className="text-blue-600 text-xl font-bold">
                            {project.property_price}
                          </span>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bank Approval Section */}
      <section id="bank-approval" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Bank Approved
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
              <Image
                src="/images/banks-icons/hdfc.png"
                alt="HDFC Bank"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
              <Image
                src="/images/banks-icons/icici.png"
                alt="ICICI Bank"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
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
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/cards-images/clubhouse.webp"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                Our mission is to create exceptional living spaces that enhance
                the quality of life for our residents. We are committed to
                developing sustainable, innovative, and aesthetically pleasing
                properties that stand the test of time. Through meticulous
                planning, quality construction, and attention to detail, we aim
                to exceed expectations and set new standards in the real estate
                industry.
              </p>
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-1 md:order-2">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/images/cards-images/clubhouse.webp"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                We envision a future where our developments are recognized as
                landmarks of excellence and innovation. Our vision is to be the
                preferred choice for discerning homebuyers and investors, known
                for our unwavering commitment to quality, sustainability, and
                customer satisfaction. We strive to create communities that
                foster connection, well-being, and prosperity for generations to
                come.
              </p>
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
}
