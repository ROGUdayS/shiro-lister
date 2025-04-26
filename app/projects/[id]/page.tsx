"use client";

import Image from "next/image";
import TabSection from "@/app/components/TabSection";
import { useState } from "react";

export default function ProjectDetails() {
  // Amenities data
  const amenitiesData = [
    { icon: "kids_and toddler_area.svg", name: "Kids & Toddler Play Area" },
    { icon: "multi_purpose_hall.svg", name: "Multi-Purpose Hall" },
    { icon: "common_sitting_area.svg", name: "Common Sitting Area" },
    { icon: "fully_equipped_gym.svg", name: "Fully Equipped Gym" },
    { icon: "jogging_track.svg", name: "Jogging Track" },
    {
      icon: "landscaped_terrace_garden.svg",
      name: "Landscaped Terrace Garden",
    },
    { icon: "green_gazebo.svg", name: "Green Gazebo" },
    { icon: "barbecque_area.svg", name: "Barbecque" },
    { icon: "community_centres.svg", name: "Community Centers" },
    { icon: "yoga_area.svg", name: "Yoga area" },
    { icon: "safety_and_convenience.svg", name: "Safety and Convenience" },
    { icon: "security.svg", name: "24/7 Security" },
    { icon: "charging_station.svg", name: "E-charging Station" },
    { icon: "avenue_tree_plantation.svg", name: "Avenue Tree Plantation" },
    { icon: "arch_designed_entry.svg", name: "Arch Designed Entry" },
    { icon: "CCTV.svg", name: "CCTV" },
    { icon: "common_sitting_area.svg", name: "Common Sitting Area" },
    { icon: "high_raised_walls.svg", name: "High-raised Boundary Walls" },
    { icon: "elevators.svg", name: "Elevators" },
    { icon: "diesel_generator.svg", name: "Diesel Generator" },
  ];

  // FAQ data
  const faqData = [
    {
      question:
        "Is there a provision for future expansion or modification of units?",
      answer:
        "Yes, units can be customized according to your requirements, with additional charges applicable",
    },
    {
      question:
        "What are the specific dimensions and layout options for the 2 BHK units?",
      answer:
        "Our 2 BHK units offer various layouts ranging from 800-1100 sq ft, with spacious living areas and multiple balconies",
    },
    {
      question: "What is the policy for pet ownership within the community?",
      answer:
        "Pets are welcome in our community, with guidelines for common areas to ensure a comfortable environment for all residents",
    },
    {
      question:
        "How does the project ensure energy efficiency and sustainability?",
      answer:
        "We incorporate solar power for common areas, rainwater harvesting systems, and energy-efficient fixtures throughout the project",
    },
    {
      question:
        "Are there any community events or activities organized for residents?",
      answer:
        "Regular community events, festivals, and activities are organized to foster a vibrant community atmosphere",
    },
    {
      question:
        "What kind of warranty or post-possession support is provided for the units?",
      answer:
        "We offer a 1-year comprehensive warranty on structural aspects and 6 months on fixtures, with dedicated post-possession support",
    },
    {
      question:
        "Are there any maintenance charges for the amenities and common areas?",
      answer:
        "A nominal maintenance fee is collected quarterly to ensure upkeep of all common areas and amenities",
    },
  ];

  // State for FAQ accordions
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Toggle FAQ item
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Property Image */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-[450px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/cover-image.webp"
                alt="Property View"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-8">
              <h1 className="text-3xl text-black font-bold">
                Shanthiniketan - Kadugondanahalli | North Bangalore
              </h1>
              <div className="prose mt-4 text-gray-600">
                <p>
                  We believe everyone deserves a home - that makes them feel
                  secure, connected—a place to call their own. A home that
                  uplifts their confidence, allowing them to do more. A home
                  that goes beyond their needs and enhances their lifestyle.
                </p>
                <p className="mt-4">
                  By redefining the norms of the real estate market, we build
                  homes that are both affordable and accessible, located in the
                  heart of the city, making us our customer&apos;s choice. Where
                  every detail is crafted carefully with your well-being in
                  mind. Experience the luxury of two balconies, ample
                  ventilation, standard amenities, spacious homes with rapidly
                  growing infrastructure.
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
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src="/images/property-details/project_type.svg"
                      alt="Project Type"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg">Project Type</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src="/images/property-details/bedrooms.svg"
                      alt="Bedrooms"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg">Bedrooms</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src="/images/property-details/development_site.svg"
                      alt="Development Site"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg">Development Site</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex-shrink-0">
                    <Image
                      src="/images/property-details/totol_unit.svg"
                      alt="Totol Unit"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg">Totol Unit</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-black font-bold">
                    ₹ 699.00
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
                {Array(5)
                  .fill("RERA")
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="bg-blue-100 text-center w-[19%] flex flex-col justify-center min-h-[50px]"
                    >
                      <div className="text-xs text-black font-medium leading-tight">
                        RERA
                      </div>
                      <div className="text-xs text-black leading-tight">
                        Approved
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
          <TabSection amenities={amenitiesData} />
        </section>

        {/* Location Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932336676766!2d77.59791287381792!3d12.971598914933867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1688456594230!5m2!1sen!2sus"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/cards-images/clubhouse.webp"
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Book Now Section */}
        <section className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 mr-4">
                <Image
                  src="/images/wallet.svg"
                  alt="Price"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className="text-3xl text-black font-bold">₹ 60 Lac</p>
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
            {faqData.map((faq, index) => (
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
