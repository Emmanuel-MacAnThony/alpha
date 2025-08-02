"use client";
import ContentSlider from "./components/slider";
import InformationSection from "./components/informationSection";
// Hero Component - starts from absolute viewport top

import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

const Hero = ({ currentSlide = 0, onSlideChange }: any) => {
  const heroImages = [
    "/home1.png",
    "/home2.png",
    "/home3.png",
  ];

  // Track loading states and transition states
  const [imageStates, setImageStates] = useState<{[key: number]: 'loading' | 'loaded' | 'error'}>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSlide, setPreviousSlide] = useState<number | null>(null);
  const preloadRefs = useRef<{[key: number]: HTMLImageElement}>({});
  const preloadedSet = useRef<Set<number>>(new Set());
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
  }, [currentSlide, preloadImage]);

  // Handle transition state when slide changes
  useEffect(() => {
    if (previousSlide !== null && previousSlide !== currentSlide) {
      setIsTransitioning(true);
      
      // Clear any existing timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      
      // End transition after animation completes
      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setPreviousSlide(currentSlide);
      }, 800); // Slightly longer than CSS transition duration
    } else if (previousSlide === null) {
      setPreviousSlide(currentSlide);
    }
    
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentSlide, previousSlide]);

  // Get loading priority for Next.js Image component
  const getImagePriority = useCallback((index: number) => {
    const nextSlide = (currentSlide + 1) % heroImages.length;
    const prevSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    return index === currentSlide || index === nextSlide || index === prevSlide;
  }, [currentSlide]);

  return (
    <div className="relative w-full min-h-screen max-h-screen xl:max-h-[80vh] 2xl:max-h-[75vh] flex items-center justify-center z-10">
      <div className="absolute inset-0 overflow-hidden">
        {/* Current image layer */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <Image
            src={heroImages[currentSlide]}
            alt={`Hero image ${currentSlide + 1}`}
            fill
            className="object-cover"
            priority={true}
            quality={90}
            sizes="100vw"
            loading="eager"
            unoptimized={true}
          />
        </div>
        
        {/* Previous image layer - for smooth crossfade during transitions */}
        {isTransitioning && previousSlide !== null && previousSlide !== currentSlide && (
          <div 
            className="absolute inset-0 z-10 transition-opacity duration-700 ease-out"
            style={{
              opacity: 0,
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            <Image
              src={heroImages[previousSlide]}
              alt={`Previous hero image ${previousSlide + 1}`}
              fill
              className="object-cover"
              priority={false}
              quality={100}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAVGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              loading="lazy"
              unoptimized={false}
              style={{
                imageRendering: 'crisp-edges',
                filter: 'contrast(1.02) saturate(1.05) brightness(1.01)',
              }}
            />
          </div>
        )}
        
        {/* Preload hidden images for smooth transitions */}
        {heroImages.map((imageSrc, index) => {
          const isPriority = getImagePriority(index);
          const shouldPreload = isPriority && index !== currentSlide && (!isTransitioning || index !== previousSlide);
          
          if (!shouldPreload) return null;
          
          return (
            <div
              key={`preload-${index}`}
              className="absolute inset-0 opacity-0 pointer-events-none z-0"
              style={{ 
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
              }}
            >
              <Image
                src={imageSrc}
                alt={`Preload hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={false}
                quality={100}
                sizes="100vw"
                loading="lazy"
                unoptimized={false}
                style={{
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.02) saturate(1.05) brightness(1.01)',
                }}
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
      <div className="absolute inset-0 bg-black/20 z-25"></div>
      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20 z-25"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-25"></div>
      
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