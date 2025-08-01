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
                className="inline-flex items-center justify-center gap-2 px-6 py-2 h-[47px] xl:h-[52px] 2xl:h-[60px] bg-lime-400 text-green-800 rounded-full text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium hover:bg-lime-300 transition-colors duration-200 w-auto max-w-fit" style={{ fontSize: 'clamp(0.875rem, 1.3vw, 1.5rem)' }}
              >
                Contact us
                <Image
                  src={buttonArrow}
                  alt="Arrow Icon"
                  width={17}
                  height={17}
                  priority
                  className="flex-shrink-0"
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
                <h3 className="font-semibold mb-2 flex items-center leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.875rem)', lineHeight: '1.2' }}>
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Our Cities
                </h3>
              </div>

              {/* Investments & Partnerships */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.875rem)', lineHeight: '1.2' }}>
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Investments &amp; Partnerships
                </h3>
                <ul className="space-y-3 text-green-100 ml-5" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.125rem)', lineHeight: '1.4' }}>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 block leading-normal"
                    >
                      Why Invest in Alpha Cities?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 block leading-normal"
                    >
                      Investment Models (Real Estate, Commercial, Infrastructure)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 block leading-normal"
                    >
                      Success Stories / Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-lime-400 transition-colors duration-200 block leading-normal"
                    >
                      Contact for Investment Inquiries
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsroom */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.875rem)', lineHeight: '1.2' }}>
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Newsroom
                </h3>
              </div>

              {/* Community */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.875rem)', lineHeight: '1.2' }}>
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
                  Community
                </h3>
              </div>

              {/* Careers */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center leading-tight" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.875rem)', lineHeight: '1.2' }}>
                  <span className="w-2 h-2 bg-lime-400 rounded-full mr-3 flex-shrink-0"></span>
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