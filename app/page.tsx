'use client';

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import SalesDeals from "./components/SalesDeals";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-red-100">
          <Image
              src="/images/cover-image.webp"
              alt="Modern luxury townhouses with contemporary architecture" 
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error('Error loading image:', e);
              }}
              sizes="100vw"
              quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 w-11/12 mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome To Shiro</h1>
          <p className="text-xl md:text-2xl max-w-4xl">
            We believe everyone needs their own space. A home that feels secure, a place to call their own.
          </p>
          <div className="mt-10">
            <Link href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300">
              Explore Projects
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Overall Development Section */}
      <section id="development" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Overall development</h2>
          <p className="text-gray-700 text-lg text-center max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt Lorem ipsum d
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Button 1
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Button 1
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Button 1
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Button 1
            </button>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our Projects</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Link href="/projects/1">
                <div className="relative h-[200px]">
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    January 15
                  </div>
                  <Image 
                    src="/images/cards-images/house1.webp" 
                    alt="Shanthiniketan Kadugondanahalli" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-black">Shanthiniketan -Kadugondanahalli | North Bangalore</h3>
                  <p className="text-xs text-gray-600 mb-4">
                    41, Opposite to Venkatapura Metro Station, Nagawara Main Road, B M Layout, Vinobha Nagar, Kadugondanahalli, Bengaluru, Karnataka 560045
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Image 
                        src="/images/cards-images/PLAYGROUND.svg"
                        alt="Kids & Toddler Play Area"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span className="text-[10px] text-gray-600">Kids & Toddler</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image 
                        src="/images/cards-images/HALL.svg"
                        alt="Multi-Purpose Hall"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span className="text-[10px] text-gray-600">Multi-Purpose</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image 
                        src="/images/cards-images/GYM.svg"
                        alt="Fully Equipped Gym"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span className="text-[10px] text-gray-600">Equipped Gym</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Image 
                        src="/images/cards-images/CCTV.svg"
                        alt="CCTV"
                        width={16}
                        height={16}
                        className="opacity-60"
                      />
                      <span className="text-[10px] text-gray-600">CCTV</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-blue-600 text-xl font-bold">$ 860,000</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </Link>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[200px]">
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  January 15
                </div>
                <Image 
                  src="/images/cards-images/house1.webp" 
                  alt="Shanthiniketan Kadugondanahalli" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">Shanthiniketan -Kadugondanahalli | North Bangalore</h3>
                <p className="text-xs text-gray-600 mb-4">
                  41, Opposite to Venkatapura Metro Station, Nagawara Main Road, B M Layout, Vinobha Nagar, Kadugondanahalli, Bengaluru, Karnataka 560045
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/PLAYGROUND.svg"
                      alt="Kids & Toddler Play Area"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">Kids & Toddler</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/HALL.svg"
                      alt="Multi-Purpose Hall"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">Multi-Purpose</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/GYM.svg"
                      alt="Fully Equipped Gym"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">Equipped Gym</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/CCTV.svg"
                      alt="CCTV"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">CCTV</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-blue-600 text-xl font-bold">$ 860,000</span>
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[200px]">
                <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  January 15
                </div>
                <Image 
                  src="/images/cards-images/house1.webp" 
                  alt="Shanthiniketan Kadugondanahalli" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-black">Shanthiniketan -Kadugondanahalli | North Bangalore</h3>
                <p className="text-xs text-gray-600 mb-4">
                  41, Opposite to Venkatapura Metro Station, Nagawara Main Road, B M Layout, Vinobha Nagar, Kadugondanahalli, Bengaluru, Karnataka 560045
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/PLAYGROUND.svg"
                      alt="Kids & Toddler Play Area"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">Kids & Toddler</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/HALL.svg"
                      alt="Multi-Purpose Hall"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">Multi-Purpose</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/GYM.svg"
                      alt="Fully Equipped Gym"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">Equipped Gym</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image 
                      src="/images/cards-images/CCTV.svg"
                      alt="CCTV"
                      width={16}
                      height={16}
                      className="opacity-60"
                    />
                    <span className="text-[10px] text-gray-600">CCTV</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-blue-600 text-xl font-bold">$ 860,000</span>
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-semibold transition duration-300">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clubhouse Section */}
      <section id="clubhouse" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Clubhouse</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clubhouse Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="relative h-60">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Clubhouse Facility" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Premium Fitness Center</h3>
                <p className="text-sm text-gray-600 mb-4">
                  State-of-the-art fitness equipment with personal trainers available on request.
                </p>
                <div className="flex justify-end">
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Clubhouse Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="relative h-60">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Clubhouse Facility" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Swimming Pool & Spa</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Olympic-sized swimming pool with adjacent spa and relaxation area.
                </p>
                <div className="flex justify-end">
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Clubhouse Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
              <div className="relative h-60">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Clubhouse Facility" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-black">Event & Party Hall</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Spacious hall for community events, parties, and private gatherings.
                </p>
                <div className="flex justify-end">
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Section - Title and Apartment */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-4">Gallery</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt
                </p>
              </div>
              
              <div className="relative h-[300px] rounded-xl overflow-hidden group">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Apartment" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm mb-1">23 Properties</p>
                  <h3 className="text-2xl font-semibold mb-4">Apartment</h3>
                  <button className="text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    MORE DETAILS
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Middle Section - Studio */}
            <div className="col-span-12 md:col-span-4">
              <div className="relative h-[550px] rounded-xl overflow-hidden group">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Studio" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm mb-1">7 Properties</p>
                  <h3 className="text-2xl font-semibold mb-4">Studio</h3>
                  <button className="text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    MORE DETAILS
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Single Family Home and Villa */}
            <div className="col-span-12 md:col-span-4 space-y-6">
              <div className="relative h-[260px] rounded-xl overflow-hidden group">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Single Family Home" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm mb-1">12 Properties</p>
                  <h3 className="text-2xl font-semibold mb-4">Single Family Home</h3>
                  <button className="text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    MORE DETAILS
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative h-[260px] rounded-xl overflow-hidden group">
                <Image 
                  src="/images/cards-images/clubhouse.webp" 
                  alt="Villa" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm mb-1">110 Properties</p>
                  <h3 className="text-2xl font-semibold mb-4">Villa</h3>
                  <button className="text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    MORE DETAILS
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utilities & Infrastructure Section */}
      <section id="utilities" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Utilities & Infrastructure</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 80 feet road */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/road.svg"
                    alt="80 feet road"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">80 feet road</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* 5 clubhouse */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/clubhouse.svg"
                    alt="5 clubhouse"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">5 clubhouse</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Office */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/office.svg"
                    alt="Office"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Retail Hubs */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/retail-hubs.svg"
                    alt="Retail Hubs"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Retail Hubs</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Street Lights */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/street-lights.svg"
                    alt="Street Lights"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Street Lights</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Parks */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/parks.svg"
                    alt="Parks"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Parks</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* CCTV */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/cctv.svg"
                    alt="CCTV"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">CCTV</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Security */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/security.svg"
                    alt="Security"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Security</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Avenue tree plantation */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/avenue-tree.svg"
                    alt="Avenue tree plantation"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Avenue tree plantation</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Landscaped gardens */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/landscapes.svg"
                    alt="Landscaped gardens"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Landscaped gardens</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Kids play area */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/kids.svg"
                    alt="Kids play area"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Kids play area</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Secure */}
            <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-2xl group">
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src="/images/utilities-icons/secure.svg"
                    alt="Secure"
                    width={40}
                    height={40}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p className="text-sm">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Investment Insights Section */}
      <section id="investment" className="py-24 bg-[#F1F1F1]">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Investment insights section</h2>
          
          <div className="text-center mb-16">
            <p className="text-xl mb-2">Offering 6-9 % Rental yield</p>
            <p className="text-xl">Offering 20 % CAGR</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Insight Card 1 */}
            <div className="bg-[#F1F1F1] overflow-hidden h-full">
              <div className="p-8 text-center h-full flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">6-9 % Rental yield</h3>
                <p className="text-sm text-gray-600">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Insight Card 2 */}
            <div className="bg-[#F1F1F1] overflow-hidden h-full">
              <div className="p-8 text-center h-full flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">6-9 % Rental yield</h3>
                <p className="text-sm text-gray-600">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
            
            {/* Insight Card 3 */}
            <div className="bg-[#F1F1F1] overflow-hidden h-full">
              <div className="p-8 text-center h-full flex flex-col justify-center">
                <div className="flex justify-center mb-6">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">6-9 % Rental yield</h3>
                <p className="text-sm text-gray-600">Lorem ipsum amet quam miss nestibulum drana fermen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Approval Section */}
      <section id="bank-approval" className="py-16 bg-white">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Bank Approved</h2>
          
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
                Our mission is to create exceptional living spaces that enhance the quality of life for our residents. We are committed to developing sustainable, innovative, and aesthetically pleasing properties that stand the test of time. Through meticulous planning, quality construction, and attention to detail, we aim to exceed expectations and set new standards in the real estate industry.
              </p>
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block">
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
                We envision a future where our developments are recognized as landmarks of excellence and innovation. Our vision is to be the preferred choice for discerning homebuyers and investors, known for our unwavering commitment to quality, sustainability, and customer satisfaction. We strive to create communities that foster connection, well-being, and prosperity for generations to come.
              </p>
              <Link href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sales and Deals Section */}
      <SalesDeals />

      {/* Map Section */}
      <section id="map" className="py-16 bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9932336676766!2d77.59791287381792!3d12.971598914933867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1688456594230!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
}
