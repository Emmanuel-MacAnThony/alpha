"use client";

import React from "react";
import swampHero from "../../../../public/swampHero.png";
import leadBackground from "../../../../public/leadBackground.png";
import Vector from "../../../../public/Vector.png";
import bradford from "../../../../public/bradford.png";
import fallbackImg from "../../../../public/fallbackImg.jpg";
import blur from "../../../../public/blur.png";
import Image from "next/image";

const CompanyHistory = () => {
  return (
    <div className="relative min-h-screen bg-[#FFF6F3]">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={blur}
          alt="Background"
          fill
          className="object-cover blur scale-110"
          priority
        />
      </div>

      <div className="relative z-10  py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h1 className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#141B34] mb-4 sm:mb-6 md:mb-8">
          Company History
        </h1>

        {/* Content */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            Alpha City was founded by Bradford Cross, an entrepreneur and
            investor who spent over 20 years building and backing AI startups
            and leading deep tech and finance innovation. As a multi-time exited
            founder, Partner at Pronomos Capital, and Founding Partner of Data
            Collective ($3B Deep Tech VC Fund), Bradford specialized in solving
            complex problems in heavily regulated industries. By 2020, it was
            clear that traditional governance models were failing, and that
            technology alone wasn’t enough to fix it. The West was in decline,
            crushed under bloated bureaucracies, crumbling infrastructure, and
            governance models designed for the past. Meanwhile, the Developing
            World wasn’t developing fast enough, held back by poor economic
            policies and failed top-down planning models. The global system was
            broken—not because of a lack of capital or talent, but because of
            how organizations were being run. From nations, to cities, to
            corporations, the same cumbersome and ineffective governance
            principles were holding everything back.
          </p>

          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            This realization drove Bradford to pivot from AI to governance,
            applying his background in regulatory innovation, finance, and
            technology to create a better model for cities, economic
            development, and ultimately organizing human civilization. Instead
            of trying to reform legacy systems, he set out to build entirely new
            ones from scratch—Alpha was born.
          </p>

          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            Alpha solves what legacy governments cannot: It designs
            ultra-modern, self-sufficient metropolises with high-performance
            governance, industry-driven economic development, and
            investor-friendly policies. Inspired by Singapore, Dubai, and
            Shenzhen, Alpha creates full-stack economic ecosystems—from farmer
            to founder—where capital, industry, and human talent converge in an
            environment designed for success. Since securing strategic land
            concessions and launching master plans across multiple regions,
            Alpha has rapidly evolved from vision to reality.
          </p>

          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            Traditional cities are failing ambitious builders. Once-thriving
            talent hubs have become hostile to the very people driving human
            progress—choking growth with crushing regulation, stagnating
            economies, and broken infrastructure. Instead of serving their
            residents, legacy cities serve their bureaucracies, leaving
            entrepreneurs, investors, and skilled workers trapped in failing
            systems.
          </p>

          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            Bradford’s entry into startup cities was accelerated by Pronomos
            Capital, where he partnered with Patri Friedman, grandson of Milton
            Friedman, the legendary free-market economist. Pronomos had already
            secured backing from Peter Thiel, Marc Andreessen, and other top
            Silicon Valley investors, all seeking to revolutionize governance
            through startup cities. Through the Pronomos network, Bradford and
            Alpha gained direct access to heads of state across Africa and in
            other emerging markets, forming strategic partnerships with
            governments seeking economic transformation through
            private-sector-driven development.
          </p>

          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            Unlike most development projects that take years or even decades to
            gain traction, Alpha moved at the speed of a tech startup. Within 12
            months of incorporation, Alpha secured agreements with three
            national governments, signing deals that outline all the components
            to build new privately managed cities as Public Private
            Partnerships; direct Land Concessions, Joint Venture Agreements, and
            Special Development Zone legal frameworks.
          </p>

          <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            Today, Alpha is securing land in increments larger than 1,000
            hectares, developing beachfront hospitality and entertainment,
            central business districts, agricultural hubs, and industrial
            villages to create full-stack economic ecosystems—where everything
            thrives from farming to finance, big industry to startup innovation.
            What began as an idea is now a global movement, shaping the future
            of civilization one city at a time. The world needs a new model for
            governance and economic development — Alpha is building it.
          </p>

          {/* <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
            What began as an idea to start a global movement, shaping the future
            of civilization into city at a time. The world needs a new model for
            governance and economic development — Alpha is building that model.
          </p> */}
        </div>
      </div>
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  return (
    <div className="relative -mt-25 pt-25 w-full min-h-screen max-h-4xl flex flex-col justify-end">
      {/* Fixed Background Image */}
      <div className="absolute inset-0">
        <Image src={swampHero} alt="" fill className="object-cover" priority />
      </div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Centered Alpha Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          {/* Logo placeholder */}
          <div className="mb-4">
            <Image
              src={Vector}
              alt="Alpha Logo"
              width={573}
              height={200}
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const teamInvestors = [
    {
      id: 1,
      name: "Patri and Pronomos",
      title: "",
      image: fallbackImg,
      description: [
        "With more than 15 years of experience Jackilina has built her career through various public and private sector organizations, focusing on banking and finance, financial inclusion, economic and community development, research and analysis, project coordination, monitoring and evaluation, monetary policy, business & strategy advisory, and stakeholder engagement. During her career she has led and advised investment companies within diverse sectors, including financial services, natural resources, energy, and infrastructure in several African countries. Jackilina has held several significant positions, including Coordinator of Corporate Social Responsibility Projects at Noble Energy/Chevron, World Bank Consultant, Executive Director and Board Member of the Central Bank of São Tomé and Príncipe where she played a major role leading   the county’s third monetary reform. She is fluent in Portuguese, French, and Spanish.",
        // "https://www.linkedin.com/in/jacklina-trindade-soares",
        // "Pedro Malfagra advisor)",
      ],
    },
    {
      id: 2,
      name: "Yomi and Rendeavour",
      title: "Yomi Ademola",
      image: fallbackImg,
      description: [
        "Chairman, West Africa; Country Head, Nigeria. \"Rendeavour is creating new urban paradigms across Africa.\" As Rendeavour’s Chairman, West Africa, Yomi brings more than 20 years’ experience spanning corporate law, project finance, investment banking, and African city development to Rendeavour’s team. Yomi has practiced law or conducted business on three continents, including numerous cities in Africa, possessing a unique experience and skillset well suited for bridging cultural divides in a complex business landscape. He has originated and negotiated several significant projects for Rendeavour and manages a diverse set of stakeholder relationships across the region. Yomi has been Rendeavour’s Country Head, Nigeria since the inception of the Group and is currently also the Managing Director of Rendeavour’s Alaro City in Lagos, Nigeria. Yomi has served on numerous private company boards in Africa, and is a member of the Board of Trustees of the Nigerian Economic Zones Association. Prior to Rendeavour, he was an attorney in New York and London with Weil, Gotshal & Manges and Latham & Watkins. He also worked at Renaissance Group in Lagos and London. Yomi is a proud alumnus of the Georgetown University Law Center in Washington, D.C.",
      ],
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Bradford",
      title: "",
      image: bradford,
      description: [
        "Bradford has been building and investing in AI startups for over 20 years and startup cities for 4 years.",
        "Partner at Promozes Capital, Founder at $38 Deep Tech Venture Capital fund Data Collective, Partner at AI hedge fund Two Lambda.",
        "Studied Computer Science and Finance at Virginia Tech and Berkeley.",
        "Significant experience in heavily regulated industries and regulatory innovation to streamline industry and investment performance.",
      ],
      communicationLinks: [
        {
          type: "email",
          url: "mailto:bradford@twolions.co",
          label: "bradford@twolions.co",
        },
      ],
    },
    {
      id: 2,
      name: "Jacklina",
      title: "Agricultural Advisor",
      image: fallbackImg,
      description: [
        "With more than 15 years of experience Jacklina has built her career through various public and private sector organizations, focusing on banking and finance, financial inclusion, economic and community development, research and analysis, project coordination, monitoring and evaluation, monetary policy, business & strategy advisory, and stakeholder engagement.",
        "During her career she has led and advised investment companies within diverse sectors, including financial services, natural resources, energy, and infrastructure in several African countries.",
        "Jacklina has held several significant positions, including Coordinator of Corporate Social Responsibility Projects at Noble Energy/Chevron, World Bank Consultant, Executive Director and Board Member of the Central Bank of São Tomé and Príncipe where she played a major role leading the country's third monetary reform.",
        "She is fluent in Portuguese, French, and Spanish.",
      ],
      communicationLinks: [
        {
          type: "linkedin",
          url: "https://www.linkedin.com/in/jacklina-trindade-soares",
          label: "LinkedIn Profile",
        },
      ],
    },
    {
      id: 3,
      name: "Pedro",
      title: "Agricultural Advisor",
      image: fallbackImg,
      description: [
        // Add Pedro's actual description here - currently using Jacklina's description as placeholder
        "Pedro brings extensive experience in agricultural development and strategic advisory services.",
        "His expertise spans across sustainable farming practices, agricultural technology implementation, and rural development initiatives.",
        "Pedro has worked with various organizations to improve agricultural productivity and implement innovative farming solutions.",
      ],
      communicationLinks: [
        {
          type: "email",
          url: "mailto:pedro@twolions.co",
          label: "pedro@twolions.co",
        },
      ],
    },
  ];

  return (
    <div>
      <Hero />

      {/* Decorative strips */}
      <div className="hidden md:block relative w-full h-30 overflow-hidden -mt-5">
        <div className="absolute top-0 left-0 w-full h-18 bg-orange-500 translate-y-6 z-40 transform -rotate-178"></div>
        <div className="absolute top-2.5 left-0 w-full h-20 bg-green-lime translate-y-2.5 transform rotate-179 origin-center"></div>
      </div>

      {/* Leadership Team Section */}
      <div id="contact" className="relative bg-[#FFF6F3] -mt-5">
        {/* Background Image - positioned behind content with reduced opacity */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={leadBackground}
            alt="Leadership background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-green-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
              Leadership Team
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 backdrop-blur-sm rounded-lg p-4 sm:p-6"
                >
                  {/* Profile Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-[180px] h-[225px] xs:w-[200px] xs:h-[250px] sm:w-[220px] sm:h-[275px] md:w-[200px] md:h-[250px] lg:w-[240px] lg:h-[300px] xl:w-[266px] xl:h-[328px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={266}
                        height={328}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 475px) 180px, (max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 200px, (max-width: 1280px) 240px, 266px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Name */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-gray-900 mb-1">
                      {member.name}
                    </h2>

                    {/* Title */}
                    {member.title && (
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#000000] mb-2 sm:mb-3 md:mb-4">
                        {member.title}
                      </h3>
                    )}

                    {/* Description */}
                    <div className="space-y-2 sm:space-y-3 mb-4">
                      {member.description.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Communication Links */}
                    {member.communicationLinks &&
                      member.communicationLinks.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          {member.communicationLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target={
                                link.type === "email" ? "_self" : "_blank"
                              }
                              rel={
                                link.type === "email"
                                  ? ""
                                  : "noopener noreferrer"
                              }
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                link.type === "email"
                                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                                  : link.type === "linkedin"
                                  ? "bg-[#0077B5] text-white hover:bg-[#005885] hover:shadow-md"
                                  : "bg-gray-600 text-white hover:bg-gray-700 hover:shadow-md"
                              }`}
                            >
                              {link.type === "email" && (
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                              )}
                              {link.type === "linkedin" && (
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative strips */}
      <div className="hidden md:block relative w-full h-30 overflow-hidden -mt-5">
        <div className="absolute top-0 left-0 w-full h-18 bg-green-dark translate-y-6 z-40 transform -rotate-179"></div>
        <div className="absolute top-2.5 left-0 w-full h-20 bg-orange-500 translate-y-2.5 transform rotate-179 origin-center"></div>
      </div>

      {/* Investors and Advisors Section */}
      <div id="community" className="relative bg-[#FFF6F3] -mt-5">
        {/* Background Image - positioned behind content with reduced opacity */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={leadBackground}
            alt="Leadership background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 md:px-24 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-green-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
              Investors and Advisors
            </h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              {teamInvestors.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 backdrop-blur-sm rounded-lg p-4 sm:p-6"
                >
                  {/* Profile Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-[180px] h-[225px] xs:w-[200px] xs:h-[250px] sm:w-[220px] sm:h-[275px] md:w-[200px] md:h-[250px] lg:w-[240px] lg:h-[300px] xl:w-[266px] xl:h-[328px] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={266}
                        height={328}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 475px) 180px, (max-width: 640px) 200px, (max-width: 768px) 220px, (max-width: 1024px) 200px, (max-width: 1280px) 240px, 266px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Name */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-bold text-gray-900 mb-1">
                      {member.name}
                    </h2>

                    {/* Title */}
                    {member.title && (
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#000000] mb-2 sm:mb-3 md:mb-4">
                        {member.title}
                      </h3>
                    )}

                    {/* Description */}
                    <div className="space-y-2 sm:space-y-3">
                      {member.description.map((paragraph, index) => (
                        <div key={index}>
                          {paragraph.includes("http") ? (
                            <a
                              href={paragraph}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#000000] hover:text-blue-800 underline text-sm sm:text-base md:text-lg lg:text-[18px]"
                            >
                              {paragraph}
                            </a>
                          ) : (
                            <p className="text-[#000000] text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed">
                              {paragraph}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CompanyHistory />
    </div>
  );
};

export default About;
