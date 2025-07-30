import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref: elementRef, isVisible };
};

// Predefined animation classes for common effects
export const animationClasses = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  scaleIn: {
    initial: 'opacity-0 scale-90',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-700 ease-out'
  },
  slideInUp: {
    initial: 'opacity-0 translate-y-16',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-800 ease-out'
  }
};

// Component wrapper for easy use
interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  animation?: keyof typeof animationClasses;
  delay?: number;
  className?: string;
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = ''
}) => {
  const { ref, isVisible } = useScrollAnimation({ delay });
  const animConfig = animationClasses[animation];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animConfig.transition} ${
        isVisible ? animConfig.animate : animConfig.initial
      } ${className}`}
    >
      {children}
    </div>
  );
};