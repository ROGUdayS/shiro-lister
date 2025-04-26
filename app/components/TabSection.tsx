"use client";

import { useState } from "react";
import Image from "next/image";

type TabSectionProps = {
  amenities: Array<{ icon: string; name: string }>;
};

export default function TabSection({ amenities }: TabSectionProps) {
  const [activeTab, setActiveTab] = useState<
    "amenities" | "floorplan" | "specification" | "neighborhood"
  >("amenities");

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
      {/* Tab Headers */}
      <div className="bg-blue-500 text-white flex">
        <button
          className={`px-6 py-4 font-medium text-center flex-1 focus:outline-none transition-colors ${
            activeTab === "amenities" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("amenities")}
        >
          Amenities
        </button>
        <button
          className={`px-6 py-4 font-medium text-center flex-1 focus:outline-none transition-colors ${
            activeTab === "floorplan" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("floorplan")}
        >
          Floor Plan
        </button>
        <button
          className={`px-6 py-4 font-medium text-center flex-1 focus:outline-none transition-colors ${
            activeTab === "specification" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("specification")}
        >
          Specification
        </button>
        <button
          className={`px-6 py-4 font-medium text-center flex-1 focus:outline-none transition-colors ${
            activeTab === "neighborhood" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("neighborhood")}
        >
          Neighborhood
        </button>
      </div>

      {/* Amenities Content */}
      {activeTab === "amenities" && (
        <div className="p-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <Image
                    src={`/images/projects-amenities/${amenity.icon}`}
                    alt={amenity.name}
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-xs text-black font-medium">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Floor Plan Content */}
      {activeTab === "floorplan" && (
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-blue-300 rounded-l-lg hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700"
              >
                First Floor
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Second Floor
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Third Floor
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Fourth Floor
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-blue-300 rounded-r-md hover:bg-blue-50 hover:text-blue-700"
              >
                Fifth Floor
              </button>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl text-black font-semibold mb-4">
              First Floor
            </h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <p className="text-gray-600 mb-6">
                  Duis sed odio sit amet nibh vulputate cursus a sit amet
                  mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt auctor a ornare odio. Sed non mauris vitae erat
                  consequat auctor eu in elit. Class aptent taciti sociosqu ad
                  litora torquent
                </p>

                <ul className="space-y-4 list-disc list-inside text-gray-600">
                  <li>Floor : First Floor</li>
                  <li>Total Area : 560 Square Feets</li>
                  <li>Room : 5</li>
                  <li>Bed : 3</li>
                  <li>Bath : 2</li>
                </ul>
              </div>

              <div className="lg:w-1/2 mt-6 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/images/floor_plan.jpg"
                    alt="Floor Plan"
                    width={500}
                    height={350}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Specification Content */}
      {activeTab === "specification" && (
        <div className="p-6">
          <div className="space-y-4">
            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Structure</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-2">
                <p className="text-gray-600">
                  RCC Framework Structure: R.C.C Frame Structure as per standard
                  and structural designs. External walls shall be of 6 inches of
                  solid blocks, and internal partition walls will be 4 or 6
                  inches of solid blocks.
                </p>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Flooring</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Kitchen</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Toilets</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">
                  Doors & Windows
                </h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Painting</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Common Area</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Electrical</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Plumbing</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Sanitation</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Neighborhood Content */}
      {activeTab === "neighborhood" && (
        <div className="p-6">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Travel</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4 text-gray-600 space-y-2">
                <p>Opposite Metro Station – 0.05 KM</p>
                <p>Venkateshapura Bus Stop – 0.4 KM</p>
                <p>Kadugondanahalli Bus Stop – 0.27 KM</p>
                <p>Bangalore East Railway Station – 2.5 KM</p>
                <p>Bangalore Cant Railway Station – 4.2 KM</p>
                <p>Majestic – 8 KM</p>
                <p>Outer Ring Road – 2.3 KM</p>
                <p>OLD Madras Road – 7 KM</p>
                <p>Airport Road – 5.9 km</p>
                <p>Kempegowda International Airport – 28 KM</p>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">School</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Colleges</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Toilets</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">
                  Techparks & Business Centres
                </h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">
                  Park & Recreation
                </h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Hospitals</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Electrical</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">Religious</h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-black font-medium">
                  Shopping & Entertainment
                </h3>
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
