"use client"

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Slider Controls component with responsive design
const SliderControls = ({ currentSlide, totalSlides, onPrev, onNext }: any) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
      {/* Previous Button - Responsive Pill Shape */}
      <button
        onClick={onPrev}
        className="h-[35px] w-[64px] sm:h-[40px] sm:w-[73px] md:h-[45px] md:w-[82px] lg:h-[48px] lg:w-[87px] px-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
      >
        <ArrowRight className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 rotate-180" />
      </button>
      
      {/* Slide Counter - Responsive text */}
      <div className="flex items-center space-x-2 sm:space-x-3 text-white">
        <span className="text-sm sm:text-base md:text-base lg:text-lg font-medium">{currentSlide}</span>
        <div className="w-3 sm:w-4 h-px bg-white/60"></div>
        <span className="text-sm sm:text-base md:text-base lg:text-lg font-medium text-white/60">{totalSlides}</span>
      </div>
      
      {/* Next Button - Responsive Pill Shape */}
      <button
        onClick={onNext}
        className="h-[35px] w-[64px] sm:h-[40px] sm:w-[73px] md:h-[45px] md:w-[82px] lg:h-[48px] lg:w-[87px] px-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
      >
        <ArrowRight className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
      </button>
    </div>
  );
};

const ContentSlider = ({ onSlideChange }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const slides = [
    {
      title: "Ambition's Paradise",
      description:
        "Alpha is Ambition's Paradise—where anyone with drive can thrive. From farmers to founders, we empower builders at every level. A tropical playground for the ambitious, it's a place to create, connect, and celebrate success. Build wealth, live free, and play hard in the world's first network of cities designed for those who refuse to settle.",
      cta: "Claim your place",
    },
    {
      title: "Build Your Legacy",
      description: "Alpha builds ultra-modern, self-sufficient metropolises that offer compelling alternatives to traditional governance models, fostering local economic development fueled by global investment and migration. We envision a future where cities are designed with precision—integrating private sector efficiency, innovative tech-driven governance, strategic urban planning, and investor-friendly policies to create thriving, secure, engines of wealth creation for everyone. By creating dynamic economic hubs tailored to each region's strengths, Alpha empowers communities to thrive in a rapidly evolving world.",
      cta: "Start building",
    },
    {
      title: "Live Unlimited",
      description: "Alpha is building the world's most advanced cities—where industry thrives, families flourish, and nature and innovation exist in perfect harmony. From farmer to founder, these vibrant hubs offer opportunity, security, and an active, fulfilling lifestyle—setting a new standard for human civilization.",
      cta: "Explore cities",
    },
  ];

  const totalSlides = slides.length;

  // Set client flag after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Notify parent when currentSlide changes - separate from state update
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide, onSlideChange]);

  // Auto-slide functionality - only run on client
  useEffect(() => {
    if (!isClient || !isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides, isClient]);

  const changeSlide = (newSlide: number) => {
    setCurrentSlide(newSlide);
    // onSlideChange will be called automatically via useEffect
    
    // Pause auto-play temporarily when user interacts
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume after 10 seconds
  };

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % totalSlides;
    changeSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    changeSlide(newSlide);
  };

  // Don't render dynamic content until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="flex flex-row items-end h-full max-w-svw px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-800">
        <div className="flex flex-1 flex-col sm:flex-row justify-between sm:items-center items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="flex-1 max-w-none sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-[0.85] sm:leading-[0.9] tracking-tight">
              {slides[0].title}
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose mb-6 sm:mb-7 md:mb-8 lg:mb-10">
              {slides[0].description}
            </p>
          </div>
          <SliderControls
            currentSlide={1}
            totalSlides={totalSlides}
            onPrev={() => {}}
            onNext={() => {}}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-end h-full max-w-svw px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 transition-all duration-800">
      <div className="flex flex-1 flex-col sm:flex-row justify-between sm:items-center items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 lg:py-16">
        {/* Content that changes */}
        <div className="flex-1 max-w-none sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-[0.85] sm:leading-[0.9] tracking-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Slider Controls */}
        <SliderControls
          currentSlide={currentSlide + 1}
          totalSlides={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      </div>
    </div>
  );
};

export default ContentSlider; 