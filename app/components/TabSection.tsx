"use client";

import { useState } from "react";
import Image from "next/image";

type AmenityType = {
  exists: boolean;
  icon_name: string;
  icon_path: string;
  name: string;
};

type FloorPlanType = {
  floor_level: string;
  total_area: string;
  rooms: {
    Room: number;
    Bed: number;
    Bath: number;
  };
  floor_plan_path: string;
};

type SpecificationType = {
  specification_title: string;
  specification_details: string;
};

type NeighborhoodType = {
  [key: string]: string[];
};

type TabSectionProps = {
  amenities: AmenityType[];
  floorPlans?: FloorPlanType[];
  specifications?: SpecificationType[];
  neighborhood?: NeighborhoodType;
};

export default function TabSection({
  amenities,
  floorPlans = [],
  specifications = [],
  neighborhood = {},
}: TabSectionProps) {
  const [activeTab, setActiveTab] = useState<
    "amenities" | "floorplan" | "specification" | "neighborhood"
  >("amenities");

  const [activeFloorPlan, setActiveFloorPlan] = useState<string>(
    floorPlans.length > 0 ? floorPlans[0].floor_level : ""
  );

  const [expandedSpecs, setExpandedSpecs] = useState<Set<number>>(new Set());
  const [expandedNeighborhoods, setExpandedNeighborhoods] = useState<
    Set<number>
  >(new Set());

  const toggleSpec = (index: number) => {
    const newExpanded = new Set(expandedSpecs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSpecs(newExpanded);
  };

  const toggleNeighborhood = (index: number) => {
    const newExpanded = new Set(expandedNeighborhoods);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedNeighborhoods(newExpanded);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
      {/* Tab Headers */}
      <div className="bg-blue-500 text-white flex flex-wrap">
        <button
          className={`px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 font-medium text-center flex-1 min-w-0 text-[10px] sm:text-xs md:text-sm focus:outline-none transition-colors ${
            activeTab === "amenities" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("amenities")}
        >
          <span className="hidden sm:inline">Amenities</span>
          <span className="sm:hidden">Amenities</span>
        </button>
        <button
          className={`px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 font-medium text-center flex-1 min-w-0 text-[10px] sm:text-xs md:text-sm focus:outline-none transition-colors ${
            activeTab === "floorplan" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("floorplan")}
        >
          <span className="hidden sm:inline">Floor Plan</span>
          <span className="sm:hidden">Floor</span>
        </button>
        <button
          className={`px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 font-medium text-center flex-1 min-w-0 text-[10px] sm:text-xs md:text-sm focus:outline-none transition-colors ${
            activeTab === "specification" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("specification")}
        >
          <span className="hidden sm:inline">Specification</span>
          <span className="sm:hidden">Specs</span>
        </button>
        <button
          className={`px-2 sm:px-3 md:px-6 py-2 sm:py-3 md:py-4 font-medium text-center flex-1 min-w-0 text-[10px] sm:text-xs md:text-sm focus:outline-none transition-colors ${
            activeTab === "neighborhood" ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          onClick={() => setActiveTab("neighborhood")}
        >
          <span className="hidden sm:inline">Neighborhood</span>
          <span className="sm:hidden">Area</span>
        </button>
      </div>

      {/* Amenities Content */}
      {activeTab === "amenities" && (
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {amenities
              .filter((amenity) => amenity.exists)
              .map((amenity, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-2 sm:p-3 flex flex-col items-center text-center min-h-[80px] sm:min-h-[90px]"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center mb-1 sm:mb-2">
                    <Image
                      src={amenity.icon_path}
                      alt={amenity.name}
                      width={32}
                      height={32}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                    />
                  </div>
                  <span className="text-[9px] sm:text-xs md:text-sm text-black font-medium leading-tight line-clamp-2">
                    {amenity.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Floor Plan Content */}
      {activeTab === "floorplan" && (
        <div className="p-3 sm:p-4 md:p-6">
          {floorPlans.length > 0 ? (
            <>
              <div className="flex justify-center mb-4 overflow-x-auto">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  {floorPlans.map((floorPlan, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-medium ${
                        activeFloorPlan === floorPlan.floor_level
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-900 hover:bg-blue-50 hover:text-blue-700"
                      } bg-white border border-blue-300 ${
                        index === 0 ? "rounded-l-lg" : ""
                      } ${
                        index === floorPlans.length - 1 ? "rounded-r-md" : ""
                      } ${
                        index > 0 && index < floorPlans.length - 1
                          ? "border-t border-b"
                          : ""
                      }`}
                      onClick={() => setActiveFloorPlan(floorPlan.floor_level)}
                    >
                      {floorPlan.floor_level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                {floorPlans.map(
                  (floorPlan, index) =>
                    floorPlan.floor_level === activeFloorPlan && (
                      <div key={index}>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-black font-semibold mb-3 sm:mb-4">
                          {floorPlan.floor_level}
                        </h3>
                        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                          <div className="lg:w-1/2">
                            <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                              A spacious and well-designed floor plan with
                              optimal use of space for comfortable living.
                            </p>

                            <ul className="space-y-2 sm:space-y-3 md:space-y-4 list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base">
                              <li>Floor : {floorPlan.floor_level}</li>
                              <li>Total Area : {floorPlan.total_area}</li>
                              <li>Room : {floorPlan.rooms.Room}</li>
                              <li>Bed : {floorPlan.rooms.Bed}</li>
                              <li>Bath : {floorPlan.rooms.Bath}</li>
                            </ul>
                          </div>

                          <div className="lg:w-1/2 mt-4 lg:mt-0">
                            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                              <Image
                                src={floorPlan.floor_plan_path}
                                alt={`Floor Plan - ${floorPlan.floor_level}`}
                                fill
                                className="object-contain mx-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                No floor plans available for this property.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Specification Content */}
      {activeTab === "specification" && (
        <div className="p-3 sm:p-4 md:p-6">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {specifications.map((spec, index) => (
              <div key={index} className="border-b pb-2">
                <button
                  onClick={() => toggleSpec(index)}
                  className="w-full flex items-center justify-between hover:bg-gray-50 p-2 sm:p-3 rounded transition-colors"
                >
                  <h3 className="text-sm sm:text-base md:text-lg text-black font-medium text-left pr-2 leading-tight">
                    {spec.specification_title}
                  </h3>
                  <span
                    className="text-gray-500 transform transition-transform duration-200 flex-shrink-0"
                    style={{
                      transform: expandedSpecs.has(index)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
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
                  </span>
                </button>
                {expandedSpecs.has(index) && (
                  <div className="mt-2 pl-2 sm:pl-4">
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      {spec.specification_details}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {specifications.length === 0 && (
              <div className="text-center py-6 sm:py-8">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  No specifications available for this property.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Neighborhood Content */}
      {activeTab === "neighborhood" && (
        <div className="p-3 sm:p-4 md:p-6">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {Object.entries(neighborhood).map(([category, items], index) => (
              <div key={index} className="border-b pb-3 sm:pb-4">
                <button
                  onClick={() => toggleNeighborhood(index)}
                  className="w-full flex items-center justify-between hover:bg-gray-50 p-2 sm:p-3 rounded transition-colors"
                >
                  <h3 className="text-sm sm:text-base md:text-lg text-black font-medium text-left pr-2 leading-tight">
                    {category}
                  </h3>
                  <span
                    className="text-gray-500 transform transition-transform duration-200 flex-shrink-0"
                    style={{
                      transform: expandedNeighborhoods.has(index)
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
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
                  </span>
                </button>
                {expandedNeighborhoods.has(index) && (
                  <div className="mt-3 sm:mt-4 pl-2 sm:pl-4 text-gray-600 space-y-1 sm:space-y-2">
                    {items.map((item, itemIndex) => (
                      <p
                        key={itemIndex}
                        className="text-xs sm:text-sm md:text-base"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {Object.keys(neighborhood).length === 0 && (
              <div className="text-center py-6 sm:py-8">
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  No neighborhood information available for this property.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
