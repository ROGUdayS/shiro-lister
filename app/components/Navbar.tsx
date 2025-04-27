"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isProjectPage || isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/application-icons/logo.svg"
                alt="SHIRO"
                width={140}
                height={50}
                className={`h-10 w-auto transition-all ${
                  isProjectPage || isScrolled
                    ? "filter-none"
                    : "brightness-0 invert"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className={`${
                  isProjectPage || isScrolled ? "text-gray-900" : "text-white"
                } hover:text-blue-600 font-medium transition-colors`}
              >
                Home
              </Link>
              <Link
                href="#projects"
                className={`${
                  isProjectPage || isScrolled ? "text-gray-900" : "text-white"
                } hover:text-blue-600 font-medium transition-colors`}
              >
                Projects
              </Link>
              <Link
                href="#clubhouse"
                className={`${
                  isProjectPage || isScrolled ? "text-gray-900" : "text-white"
                } hover:text-blue-600 font-medium transition-colors`}
              >
                Clubhouse
              </Link>
              <Link
                href="#gallery"
                className={`${
                  isProjectPage || isScrolled ? "text-gray-900" : "text-white"
                } hover:text-blue-600 font-medium transition-colors`}
              >
                Gallery
              </Link>
              <Link
                href="#about"
                className={`${
                  isProjectPage || isScrolled ? "text-gray-900" : "text-white"
                } hover:text-blue-600 font-medium transition-colors`}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isProjectPage || isScrolled
                  ? "text-gray-900 hover:text-blue-600"
                  : "text-white hover:text-blue-300"
              } focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              href="#clubhouse"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Clubhouse
            </Link>
            <Link
              href="#gallery"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
