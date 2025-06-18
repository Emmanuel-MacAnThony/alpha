"use client";

import React, { useState } from "react";
import ContentSlider from "./components/slider";
import InformationSection from "./components/informationSection";

// Hero Component - starts from absolute viewport top
const Hero = ({ currentSlide = 0, onSlideChange }: any) => {
  const heroImages = [
    // "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80", // Slide 0
    // "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80", // Slide 1
    // "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80"  // Slide 2

    "/hero_1.avif",
    "/legacy_2.avif",
    "/hero_3.avif",
  ];

  return (
    <div className=" relative -mt-25 pt-25 w-full min-h-screen max-h-4xl flex items-center justify-center z-10 ">
      <div className="absolute inset-0">
        {/* <Image src={aboutHero} alt="" fill  className="object-cover" priority /> */}
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center transition-all duration-[1500ms] ease-in-out"
          style={{ backgroundImage: `url('${heroImages[currentSlide]}')` }} // backgroundImage: "url('/home.svg')"
        ></div>
      </div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      {/* Main Content Container */}
      <div className="relative z-30  w-full">
        <div className=" w-full">
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
