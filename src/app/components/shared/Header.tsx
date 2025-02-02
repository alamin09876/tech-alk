"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import image from "../../../../public/assest/navLogo/logo.webp";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto  ">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className={`text-2xl font-bold ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              {isScrolled ? (
                <Image
                  src={"/assest/logoBlue.svg"}
                  alt="Finance Future"
                  className="h-[30px] w-[100px] mx-auto"
                  width={1000}
                  height={1000}
                  priority
                />
              ) : (
                <Image
                  src={image}
                  alt="Finance Future"
                  className="h-[30px] w-[100px] mx-auto"
                  width={1000}
                  height={1000}
                  priority
                />
              )}
            </Link>

            {/* Hamburger menu for mobile */}
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {isMenuOpen ? (
                <FaTimes
                  className={isScrolled ? "text-blue-600" : "text-white"}
                />
              ) : (
                <FaBars
                  className={isScrolled ? "text-blue-600" : "text-white"}
                />
              )}
            </button>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavigationMenu isScrolled={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`font-medium ${
                        isScrolled ? "text-blue-600" : "text-white"
                      }`}
                    >
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/solution-1"
                              className="block p-2 hover:bg-gray-100"
                            >
                              AnyCaas
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/solution-2"
                              className="block p-2 hover:bg-gray-100"
                            >
                              AnyBaas
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/solution-3"
                              className="block p-2 hover:bg-gray-100"
                            >
                              AnyCaas
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                href="/services"
                className={`font-medium ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={`font-medium ${
                  isScrolled ? "text-blue-600" : "text-white"
                }`}
              >
                About Us
              </Link>

              <NavigationMenu isScrolled={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`font-medium border rounded-3xl ${
                        isScrolled ? "text-blue-600" : "text-white"
                      }`}
                    >
                      <FaGlobe className="mr-1" />
                      EN
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[200px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block p-2 hover:bg-gray-100"
                            >
                              English
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block p-2 hover:bg-gray-100"
                            >
                              Español
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block p-2 hover:bg-gray-100"
                            >
                              Français
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block p-2 hover:bg-gray-100"
                            >
                              Traditional Chinese
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div>
              <Link
                href="/contact"
                className={`px-10 py-2 border rounded ${
                  isScrolled
                    ? "bg-orange-600 text-white"
                    : "bg-transparent text-white"
                } hover:bg-white hover:text-blue-700 flex`}
              >
                Contact Us{" "}
                <span className="mt-1 ml-4">
                  <IoIosArrowForward />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-blue-600 py-4">
              <Link
                href="/solutions"
                className="block py-2 w-full mx-10 text-white"
              >
                Solutions
              </Link>
              <Link
                href="/services"
                className="block py-2 w-full mx-10 text-white"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block py-2 w-full mx-10 text-white"
              >
                About Us
              </Link>
              <Link href="#" className="py-2  text-white flex w-full mx-auto">
                <span className="ml-48">
                  <FaGlobe className="mt-1 mr-2" />
                </span>
                ENGLISH
              </Link>
              <Link
                href="/contact"
                className={`px-10 py-2 border text-white rounded mx-14 border-white hover:bg-white hover:text-blue-700 flex`}
              >
                Contact Us{" "}
                <span className="mt-1 ml-4">
                  <IoIosArrowForward />
                </span>
              </Link>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
