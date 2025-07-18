import React from "react";
import Image from "next/image";
import mountain from "../../../../../public/mountain.png";
import bradford from "../../../../../public/bradford.png";
import fallBackImg from "../../../../../public/fallbackImg.jpg";
import leadBackground from "../../../../../public/leadBackground.png";
import umbrella from "../../../../../public/umbrella.jpg";
import visionSVG from "../../../../../public/visio.svg";
import missionSVG from "../../../../../public/mission.svg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Reusable section component with exact same styles
const Section = ({ bgColor, icon, title, content }: any) => (
  <div
    className={`flex-1 ${bgColor} p-6 sm:p-8 md:p-10 lg:p-12 mx-4 mb-4 md:mb-0 md:mx-0 rounded-lg md:rounded-none`}
  >
    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="p-2 sm:p-3 rounded-full">
        <Image
          src={icon}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          alt={title.toLowerCase()}
        />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-[#034001]">
        {title}
      </h2>
    </div>
    <p className="text-[#000000] leading-relaxed text-sm sm:text-base md:text-lg lg:text-[20px]">
      {content}
    </p>
  </div>
);

function VisionMissionSection() {
  const sections = [
    {
      bgColor: "bg-lime-300",
      icon: visionSVG,
      title: "Vision",
      content:
        "Alpha is building the world's most advanced cities—where innovation meets lifestyle, and communities live and work in perfect harmony. From farmer to founder, these smart hubs offer opportunity, security, and an active, fulfilling lifestyle—setting a new standard for human civilization.",
    },
    {
      bgColor: "bg-neutral-cream",
      icon: missionSVG,
      title: "Mission",
      content:
        "Alpha builds ultra-modern, self-sufficient metropolises designed around innovative sustainability and governance models, fostering local economic development fueled by global investment and migration. Through cutting-edge infrastructure and operational precision — integrating private sector efficiency, innovative tech-driven governance, strategic urban planning, and a commitment to environmental security, creates engines of wealth creation for everyone.",
    },
  ];

  return (
    <div className="relative z-10 flex flex-col md:flex-row w-full min-h-[800px] md:h-[500px] mx-auto">
      {sections.map((section, index) => (
        <Section
          key={index}
          bgColor={section.bgColor}
          icon={section.icon}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}

// Reusable section component
// Reusable section component
const FeatureSection = ({ title, items }: any) => (
  <div className="flex-1 space-y-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold">
      {title}
    </h2>
    <ul className="space-y-2 text-sm sm:text-base md:text-[16px] leading-relaxed">
      {items.map((item: any, index: any) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);

const sections = [
  {
    title: "Adventure & Experience",
    items: [
      "Alpha's strategic location connects our residents to adventure and discovery",
      "A playground for adventure seekers, entrepreneurs, and creators",
      "From skyscrapers in Seoul - Business, pleasure, and limitless fun",
      "Alpha promises unrivaled access to endless fun, entertainment, and adventure",
    ],
  },
  {
    title: "Cultural & Social Identity",
    items: [
      "A global identity with style",
      "The ultra-modern building echoes both art and culture",
      "The city of the future, where technology meets life in harmony",
      "Alpha resonates with culture while cutting through cultures",
    ],
  },
  {
    title: "Luxury & Lifestyle",
    items: [
      "Our living spaces are meticulously designed for elite comfort and convenience",
      "Premium living experience - where comfort meets convenience",
      "Exclusive high-end living - a life for the sophisticated",
      "We transcend the ordinary and commit to setting new standards in luxury living with wealth, and wellness",
    ],
  },
];

const InformationSection = () => {
  return (
    <div className="w-full bg-lime-400 relative">
      {/* Parallelogram section - using Next.js Image with fixed height */}
      <div className="w-full h-[115px] -mt-8 relative z-20">
        <Image
          src="/headStripe.png"
          alt="Header stripe"
          width={1920}
          height={115}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div
        id="cities"
        className="bg-orange-400 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 w-full -mt-6 relative z-10"
        style={{
          clipPath: "polygon(0 7%, 100% 0%, 100% 94%, 0 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 text-white">
            {sections.map((section, index) => (
              <FeatureSection
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Vision/Mission Section with Mountain Background */}

      <div className="bg-neutral-cream relative -mt-10 min-h-[600px] md:min-h-[600px]">
        {/* Content Container with responsive height */}
        <div className="w-full relative min-h-[800px] md:min-h-[600px]">
          {/* Mountain Image - Positioned on top */}
          <Image
            className="hidden md:block absolute bottom-0 left-0 right-0 w-full h-[350px] object-cover z-20"
            height={350}
            src={mountain}
            alt="mountain"
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />

          {/* Content that will be behind/under the mountain */}
          <VisionMissionSection />
        </div>
      </div>

      {/* Decorative Strips Section */}

      <div className="hidden md:block w-full h-[115px] md:-mt-8 relative z-20">
        <Image
          src="/leadershipdivider.png"
          alt="Header stripe"
          width={1920}
          height={115}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {/* Leadership Section */}
      <div className="relative bg-[#FFF6F3] px-8 py-20 md:-mt-6">
        {/* Background Image */}

        <Image
          src={leadBackground}
          alt="Leadership background"
          width={1920}
          height={600}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-green-800 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {/* Bradford */}
            <div className="text-center">
              <div className="w-[280px] h-[350px]  mb-4 rounded-2xl overflow-hidden bg-gray-200 relative">
                <Image
                  src={bradford}
                  alt="Bradford"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Bradford
              </h3>
            </div>

            {/* Jacklina */}
            <div className="text-center">
              <div className="w-[280px] h-[350px] mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-300 relative">
                <Image
                  src={fallBackImg}
                  alt="Jacklina"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Jacklina
              </h3>
            </div>

            {/* Pedro */}
            <div className="text-center">
              <div className="w-[280px] h-[350px] mx-auto mb-4 rounded-2xl overflow-hidden bg-gray-300 relative">
                <Image
                  src={fallBackImg}
                  alt="Pedro"
                  width={280}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Pedro
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Project Updates Section */}
      <div className="bg-green-dark px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Project Updates
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Image */}
            <div className="lg:w-[515px] w-full">
              <div className="w-full h-[400px] lg:h-[531px] rounded-2xl overflow-hidden">
                <Image
                  src={umbrella}
                  alt="Tropical resort with blue sky and water"
                  width={515}
                  height={531}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-[500px] w-full text-white">
              <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed mb-4 sm:mb-5 md:mb-6">
                Alpha solves what legacy governments cannot. It designs
                ultra-modern, truly self-sufficient metropolises with
                high-performance governance, industry-driven economic
                development, and investor-friendly policies. Inspired by
                Singapore, Dubai, and Shenzhen, Alpha creates full-stack
                economic ecosystems—from farmer to founder—where capital,
                industry, and human talent converge in an environment designed
                for success. Since securing strategic land concessions and
                launching master plans across multiple regions, Alpha has
                rapidly evolved from vision to reality.
              </p>

              {/* <div className="flex items-center">
                <span className="text-base sm:text-lg md:text-xl lg:text-[22px] font-medium underline cursor-pointer">Read More</span>
                <ArrowRight className="text-white w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5  cursor-pointer" />
              </div> */}

              <Link href="/about" className="flex items-center">
                <span className="text-base sm:text-lg md:text-xl lg:text-[22px] font-medium underline cursor-pointer">
                  Read More
                </span>
                <ArrowRight className="text-white w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
