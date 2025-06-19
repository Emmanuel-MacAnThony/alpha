"use client";
import ContentSlider from "./components/slider";
import InformationSection from "./components/informationSection";
// Hero Component - starts from absolute viewport top

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

const Hero = ({ currentSlide = 0, onSlideChange }: any) => {
  const heroImages = [
    // "/aboutHero.png",
    "/hero_1.avif",
    "/legacy_2.avif", 
    "/hero_3.avif",
  ];

  // Track loading states - initialize with empty object
  const [imageStates, setImageStates] = useState<{[key: number]: 'loading' | 'loaded' | 'error'}>({});
  const preloadRefs = useRef<{[key: number]: HTMLImageElement}>({});
  const preloadedSet = useRef<Set<number>>(new Set());

  // Memoize preload function to prevent recreation
  const preloadImage = useCallback((index: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if already preloaded
      if (preloadedSet.current.has(index)) {
        resolve();
        return;
      }

      const img = new window.Image();
      preloadRefs.current[index] = img;
      
      img.onload = () => {
        preloadedSet.current.add(index);
        // Use functional update to avoid dependency issues
        setImageStates(prev => ({ ...prev, [index]: 'loaded' }));
        resolve();
      };
      
      img.onerror = () => {
        setImageStates(prev => ({ ...prev, [index]: 'error' }));
        reject();
      };
      
      setImageStates(prev => ({ ...prev, [index]: 'loading' }));
      img.src = heroImages[index];
    });
  }, []); // Empty dependency array - heroImages is stable

  // Preload logic with proper dependency management
  useEffect(() => {
    const nextSlide = (currentSlide + 1) % heroImages.length;
    const prevSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    
    // Preload priority images
    const preloadPriority = async () => {
      try {
        // Preload current slide first
        if (!preloadedSet.current.has(currentSlide)) {
          await preloadImage(currentSlide);
        }
        
        // Then preload adjacent slides
        const adjacentPromises = [];
        if (!preloadedSet.current.has(nextSlide)) {
          adjacentPromises.push(preloadImage(nextSlide));
        }
        if (!preloadedSet.current.has(prevSlide)) {
          adjacentPromises.push(preloadImage(prevSlide));
        }
        
        await Promise.all(adjacentPromises);
      } catch (error) {
        console.warn('Priority preload failed:', error);
      }
    };

    preloadPriority();

    // Preload remaining images after a delay
    const timeoutId = setTimeout(() => {
      heroImages.forEach((_, index) => {
        if (!preloadedSet.current.has(index)) {
          preloadImage(index).catch(err => 
            console.warn(`Failed to preload image ${index}:`, err)
          );
        }
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [currentSlide, preloadImage]); // Only depend on currentSlide and memoized function

  // Get loading priority for Next.js Image component
  const getImagePriority = useCallback((index: number) => {
    const nextSlide = (currentSlide + 1) % heroImages.length;
    const prevSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    return index === currentSlide || index === nextSlide || index === prevSlide;
  }, [currentSlide]);

  return (
    <div className="relative -mt-25 pt-25 w-full min-h-screen max-h-4xl flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-gray-900">
        {/* Base layer - always show the current image at full opacity */}
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentSlide]}
            alt={`Hero image ${currentSlide + 1}`}
            fill
            className="object-cover"
            priority={true}
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            loading="eager"
          />
        </div>
        
        {/* Crossfade layers - for smooth transitions between images */}
        {heroImages.map((imageSrc, index) => {
          if (index === currentSlide) return null; // Skip current slide (handled above)
          
          const isLoaded = imageStates[index] === 'loaded';
          const isPriority = getImagePriority(index);
          
          return (
            <div
              key={`crossfade-${index}`}
              className="absolute inset-0 transition-opacity duration-[600ms] ease-in-out opacity-0"
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            >
              <Image
                src={imageSrc}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={isPriority}
                quality={85}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAVGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                loading={isPriority ? "eager" : "lazy"}
                onLoad={() => {
                  if (!preloadedSet.current.has(index)) {
                    preloadedSet.current.add(index);
                    setImageStates(prev => ({ ...prev, [index]: 'loaded' }));
                  }
                }}
                onError={() => {
                  setImageStates(prev => ({ ...prev, [index]: 'error' }));
                }}
              />
            </div>
          );
        })}
      </div>
      
      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
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
