"use client";
import ContentSlider from "./components/slider";
import InformationSection from "./components/informationSection";
// Hero Component - starts from absolute viewport top
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = ({ currentSlide = 0, onSlideChange }: any) => {
  const heroImages = [
    "/hero_1.avif",
    "/legacy_2.avif", 
    "/hero_3.avif",
  ];

  // Track which images have been preloaded
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0]));
  
  // Smart preloading effect
  useEffect(() => {
    const preloadAdjacentImages = () => {
      const nextSlide = (currentSlide + 1) % heroImages.length;
      const prevSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
      
      // Images to preload (current + adjacent)
      const imagesToPreload = [currentSlide, nextSlide, prevSlide];
      
      imagesToPreload.forEach(index => {
        if (!preloadedImages.has(index)) {
          // Create a new Image object for preloading
          const img = new window.Image();
          img.src = heroImages[index];
          
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, index]));
          };
          
          img.onerror = () => {
            console.warn(`Failed to preload image: ${heroImages[index]}`);
          };
        }
      });
    };

    // Preload immediately when slide changes
    preloadAdjacentImages();
    
    // Optional: Preload remaining images after a delay
    const preloadRemainingTimeout = setTimeout(() => {
      heroImages.forEach((_, index) => {
        if (!preloadedImages.has(index)) {
          const img = new window.Image();
          img.src = heroImages[index];
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, index]));
          };
        }
      });
    }, 2000); // Wait 2 seconds before preloading non-critical images

    return () => clearTimeout(preloadRemainingTimeout);
  }, [currentSlide, heroImages, preloadedImages]);

  // Function to determine priority loading
  const getImagePriority = (index: number) => {
    const nextSlide = (currentSlide + 1) % heroImages.length;
    const prevSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    
    return index === currentSlide || index === nextSlide || index === prevSlide;
  };

  // Only render images that should be loaded
  const shouldRenderImage = (index: number) => {
    return getImagePriority(index) || preloadedImages.has(index);
  };

  return (
    <div className="relative -mt-25 pt-25 w-full min-h-screen max-h-4xl flex items-center justify-center z-10">
      <div className="absolute inset-0">
        {/* Only render images that are preloaded or priority */}
        {heroImages.map((imageSrc, index) => 
          shouldRenderImage(index) ? (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={imageSrc}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={getImagePriority(index)}
                quality={90}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                loading={getImagePriority(index) ? "eager" : "lazy"}
              />
            </div>
          ) : null
        )}
      </div>
      
      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>
      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      {/* Main Content Container */}
      <div className="relative z-30 w-full">
        <div className="w-full">
          <ContentSlider onSlideChange={onSlideChange} />
        </div>
      </div>
    </div>
  );
};
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="">
      <Hero currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
      <InformationSection />
    </div>
  );
};

export default Home;
