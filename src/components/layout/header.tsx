"use client"

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import logo from '../../../public/logo.png'
import Image from "next/image";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Set client-side flag after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!isClient) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, isClient]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isClient) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isClient]);

  // Enhanced scroll spy for active section detection
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const sections = ['community', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      let currentSection = '';
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
          }
        }
      });
      
      setActiveSection(currentSection);
      
      // Update URL hash based on current section
      const currentHash = window.location.hash.slice(1); // Remove the #
      if (currentSection && currentHash !== currentSection) {
        // Update hash when entering a section
        window.history.replaceState(null, '', `${pathname}#${currentSection}`);
      } else if (!currentSection && currentHash && sections.includes(currentHash)) {
        // Clear hash when leaving a section
        window.history.replaceState(null, '', pathname);
      }
    };

    // Only add scroll listener on homepage or about page
    if (pathname === "/" || pathname === "/about") {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; 
  }, [pathname, isClient]);

  const navLinks = [
    { href: "/", label: "Home", isPage: true },
    { href: "/about", label: "About", isPage: true },
    { href: "/about#community", label: "Community", isPage: false, section: "community" },
    { href: "/about#contact", label: "Contact", isPage: false, section: "contact" }
  ];

  // Enhanced smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    // If it's a page navigation, let default behavior handle it
    if (isPage) return;

    if (!isClient) return;

    e.preventDefault();
    closeMobileMenu();

    const [targetPath, targetSection] = href.split('#');
    const targetElement = document.getElementById(targetSection);

    // If we're on the wrong page, navigate first then scroll
    if (pathname !== targetPath) {
      window.location.href = href;
      return;
    }

    // If we're on the right page and element exists, smooth scroll
    if (targetElement) {
      const headerHeight = 80; // Adjust based on your header height
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without causing page jump
      window.history.pushState(null, '', href);
    }
  };

  // Function to check if link is active
  const isActiveLink = (href: string, isPage: boolean, section?: string) => {
    if (isPage) {
      // For actual pages - only highlight if no section is currently active
      if (href === "/" && pathname === "/" && !activeSection) return true;
      if (href !== "/" && pathname.startsWith(href) && !activeSection) return true;
      return false;
    } else {
      // For sections - check if we're on the right page and section is active
      const [targetPath] = href.split('#');
      if (pathname === targetPath && section && activeSection === section) {
        return true;
      }
      return false;
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
        <nav className="flex items-center justify-between w-full">
          <div className="flex-shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={321}
              height={46}
              priority 
              className="h-8 w-auto sm:h-10 md:h-11 lg:h-12 xl:h-14"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 flex-shrink-0">
            {navLinks.map((link, index) => {
              const isActive = isActiveLink(link.href, link.isPage, link.section);
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href, link.isPage)}
                  className={`relative font-medium transition-all duration-500 ease-out px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-xl group focus:outline-none whitespace-nowrap ${
                    isActive 
                      ? 'text-white bg-white/20 shadow-lg transform scale-105 ring-2 ring-white/30' 
                      : 'text-white/90 hover:text-white hover:bg-white/10 focus:text-white'
                  }`}
                  style={{ fontSize: 'clamp(14px, 1.5vw, 16px)' }}
                >
                  {/* Background gradient animation */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-500 ease-out ${
                    isActive 
                      ? 'bg-gradient-to-r from-white/20 via-white/15 to-white/20 opacity-100 scale-100' 
                      : 'bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100'
                  }`}></div>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-500 ease-out transform -translate-x-1/2 ${
                    isActive 
                      ? 'w-3/4 opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-70 group-focus:w-3/4 group-focus:opacity-70'
                  }`}></div>
                  
                  {/* Text content */}
                  <span className="relative z-10 transition-transform duration-300 ease-out group-hover:scale-105">
                    {link.label}
                  </span>
                  
                  {/* Subtle glow effect for active state */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-white/5 shadow-inner animate-pulse" style={{ animationDuration: '3s' }}></div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button 
              ref={buttonRef}
              className="text-white cursor-pointer p-2 hover:bg-white/10 rounded-md transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Modal Overlay - Only render on client */}
      {isClient && isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile Menu */}
          <div 
            ref={menuRef}
            className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 animate-slide-down"
          >
            {/* Header space to match the original header height */}
            <div className="h-24"></div>
            
            {/* Menu Items */}
            <div className="px-10 py-8">
              <div className="flex flex-col space-y-6 max-w-screen-2xl mx-auto">
                {navLinks.map((link, index) => {
                  const isActive = isActiveLink(link.href, link.isPage, link.section);
                  return (
                    <a
                      key={index}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href, link.isPage)}
                      className={`font-medium transition-all duration-300 text-lg py-3 border-b border-white/10 last:border-b-0 ${
                        isActive 
                          ? 'text-white bg-white/10 px-4 -mx-4 rounded-md shadow-lg ring-1 ring-white/20' 
                          : 'text-white hover:text-white/80 hover:bg-white/5 px-4 -mx-4 rounded-md'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Header;