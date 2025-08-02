"use client"

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Types for better developer experience
type ControlType = 'dots' | 'arrows';

interface DotPaginationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (slideIndex: number) => void;
}

interface ArrowControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

interface ContentSliderProps {
  onSlideChange?: (slideIndex: number) => void;
  controlType?: ControlType;
}

// Dot Pagination component
const DotPagination = ({ currentSlide, totalSlides, onSlideChange }: DotPaginationProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
      {Array.from({ length: totalSlides }, (_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`transition-all duration-500 cursor-pointer hover:bg-white/80 ${
            index === currentSlide
              ? 'w-6 h-2 sm:w-7 sm:h-2 md:w-8 md:h-2.5 lg:w-9 lg:h-2.5 xl:w-10 xl:h-3 bg-white rounded-full'
              : 'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 bg-white/50 hover:bg-white/70 rounded-full'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Arrow Controls component (keeping original for easy switching)
const ArrowControls = ({ currentSlide, totalSlides, onPrev, onNext }: ArrowControlsProps) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
      {/* Previous Button - Responsive Pill Shape */}
      <button
        onClick={onPrev}
        className="h-[35px] w-[64px] sm:h-[40px] sm:w-[73px] md:h-[45px] md:w-[82px] lg:h-[52px] lg:w-[94px] xl:h-[56px] xl:w-[102px] 2xl:h-[60px] 2xl:w-[110px] px-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
      >
        <ArrowRight className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rotate-180" />
      </button>
      
      {/* Slide Counter - Responsive text */}
      <div className="flex items-center space-x-2 sm:space-x-3 text-white">
        <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">{currentSlide + 1}</span>
        <div className="w-3 sm:w-4 lg:w-5 xl:w-6 2xl:w-7 h-px bg-white/60"></div>
        <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-white/60">{totalSlides}</span>
      </div>
      
      {/* Next Button - Responsive Pill Shape */}
      <button
        onClick={onNext}
        className="h-[35px] w-[64px] sm:h-[40px] sm:w-[73px] md:h-[45px] md:w-[82px] lg:h-[52px] lg:w-[94px] xl:h-[56px] xl:w-[102px] 2xl:h-[60px] 2xl:w-[110px] px-3 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
      >
        <ArrowRight className="text-white w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
      </button>
    </div>
  );
};

const ContentSlider = ({ onSlideChange, controlType = 'dots' }: ContentSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Ambition's Paradise",
      description:
        "Alpha is Ambition's Paradise—where anyone with drive can thrive. From farmers to founders, we empower builders at every level. A tropical playground for the ambitious, it's a place to create, connect, and celebrate success. Build wealth, live free, and play hard in the world's first network of cities designed for those who refuse to settle.",
      cta: "Claim your place",
    },
    {
      title: "Build Your Legacy",
      description: "Alpha builds ultra-modern, self-sufficient metropolises with innovative governance and investor-friendly policies. We create dynamic economic hubs that integrate private sector efficiency with strategic urban planning—engines of wealth creation designed to empower communities and foster prosperity in a rapidly evolving world.",
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
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setIsTransitioning(false);
      }, 300); // Fade out duration
    }, 6000); // Change slide every 6 seconds (slower)

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides, isClient]);

  const changeSlide = (newSlide: number) => {
    if (newSlide === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsTransitioning(false);
    }, 300);
    
    // Pause auto-play temporarily when user interacts
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000); // Resume after 8 seconds
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
      <div className="flex flex-col items-center h-full max-w-svw px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex-1 flex items-end w-full">
          <div className="flex flex-1 flex-col justify-center items-start pt-28 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            <div className="flex-1 max-w-none sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-white mb-2 sm:mb-4 md:mb-5 lg:mb-6 leading-[0.9] sm:leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 3.5rem)' }}>
                {slides[0].title}
              </h1>
              <p className="text-white/90 text-xs sm:text-base md:text-base lg:text-lg xl:text-lg font-medium leading-relaxed mb-3 sm:mb-5 md:mb-6 lg:mb-8" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)' }}>
                {slides[0].description}
              </p>
            </div>
          </div>
        </div>
        
        <div className={`pb-6 sm:pb-8 md:pb-10 lg:pb-12 flex ${
          controlType === 'dots' ? 'justify-center' : 'justify-between items-center'
        }`}>
          {controlType === 'dots' ? (
            <DotPagination
              currentSlide={0}
              totalSlides={totalSlides}
              onSlideChange={() => {}}
            />
          ) : (
            <ArrowControls
              currentSlide={0}
              totalSlides={totalSlides}
              onPrev={() => {}}
              onNext={() => {}}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-full max-w-svw px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="flex-1 flex items-end w-full">
        <div className={`flex flex-1 flex-col justify-center pt-28 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 ${
          controlType === 'dots' ? 'items-center text-center' : 'items-start text-left'
        }`}>
          {/* Content that changes with fade */}
          <div className={`flex-1 max-w-none sm:max-w-2xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl transition-all duration-600 transform ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-[0.9] sm:leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(1.1rem, 3.8vw, 4rem)' }}>
              {slides[currentSlide].title}
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl font-medium leading-relaxed mb-3 sm:mb-5 md:mb-6 lg:mb-8" style={{ fontSize: 'clamp(0.875rem, 1.4vw, 1.5rem)' }}>
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Controls positioned below content */}
      <div className={`pb-4 sm:pb-6 md:pb-8 lg:pb-10 flex ${
        controlType === 'dots' ? 'justify-center' : 'justify-between items-center'
      }`}>
        {controlType === 'dots' ? (
          <DotPagination
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onSlideChange={changeSlide}
          />
        ) : (
          <ArrowControls
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        )}
      </div>
    </div>
  );
};

export default ContentSlider; 