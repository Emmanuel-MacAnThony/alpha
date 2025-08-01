"use client"

import Image from "next/image";
import Link from "next/link";
import footerdivider from "../../../public/footerdivider.png";
import footergreen from "../../../public/footergreen.svg";
// import footerframe from "../../../public/footerframe.svg";
import alphaVector from "../../../public/alphaVector.svg";
import footerOverlay from "../../../public/footeroverlay.png";
import { ArrowRight } from "lucide-react";
import buttonArrow from "../../../public/buttonArrow.svg"

const AlphaFooter = () => {
  return (
    <footer className="relative w-full">
      {/* Background Image Layer 1 */}
      <Image
        src={footergreen}
        alt="Layer 1"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Background Image Layer 2 */}
      <Image
        src={footerOverlay}
        alt="Layer 2"
        fill
        className="object-cover z-10"
        priority
      />

      {/* Main Footer Content - Added z-20 to ensure it appears above background images */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:pl-24 2xl:pl-40 xl:pr-12 2xl:pr-16 py-12">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-4 font-medium" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 3rem)' }}>
                Want to know more?
              </h2>
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center">
                  <Image
                    src={alphaVector}
                    alt="Alpha Logo"
                    width={405}
                    height={105}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="lg:self-start">
              <Link
                href="/about#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-2 sm:px-7 sm:py-3 lg:px-8 lg:py-3 xl:px-10 xl:py-4 bg-lime-400 text-green-800 rounded-full text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-medium hover:bg-lime-300 transition-colors duration-200 w-auto max-w-fit"
              >
                Contact us
                <Image
                  src={buttonArrow}
                  alt="Arrow Icon"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:justify-between text-white">
            {/* Left side - empty space or additional content */}
            <div className="flex-1"></div>
            
            {/* Right side - Navigation menu in vertical layout */}
            <div className="flex flex-col space-y-6 w-full lg:w-[487px]">
              {/* Our Cities */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Our Cities
                </h3>
              </div>

              {/* Investments & Partnerships */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center leading-tight text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Investments &amp; Partnerships
                </h3>
                <ul className="space-y-3 text-green-100 ml-8 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base">
                  <li className="flex items-start">
                    <span className="text-lime-400 font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mr-2 mt-0.5 flex-shrink-0">•</span>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 leading-normal flex-1"
                    >
                      Why Invest in Alpha Cities?
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-400 font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mr-2 mt-0.5 flex-shrink-0">•</span>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 leading-normal flex-1"
                    >
                      Investment Models (Real Estate, Commercial, Infrastructure)
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-400 font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mr-2 mt-0.5 flex-shrink-0">•</span>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 leading-normal flex-1"
                    >
                      Success Stories / Case Studies
                    </Link>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime-400 font-bold text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mr-2 mt-0.5 flex-shrink-0">•</span>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 leading-normal flex-1"
                    >
                      Contact for Investment Inquiries
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsroom */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Newsroom
                </h3>
              </div>

              {/* Community */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Community
                </h3>
              </div>

              {/* Careers */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Careers
                </h3>
              </div>
            </div>
          </div>
      </div>

      {/* Wave Divider Image */}
      <div className="relative z-20 h-24 overflow-hidden">
        <Image
          src={footerdivider}
          alt="Wave divider"
          fill
          className="object-cover object-top"
          priority={false}
        />
      </div>
    </footer>
  );
};

export default AlphaFooter;