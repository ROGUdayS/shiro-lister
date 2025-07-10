"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const isContactPage = pathname.startsWith("/contact");

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
        isProjectPage || isContactPage || isScrolled
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
                className={`h-8 sm:h-10 w-auto transition-all ${
                  isProjectPage || isContactPage || isScrolled
                    ? "filter-none"
                    : "brightness-0 invert"
                }`}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
