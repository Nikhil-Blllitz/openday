'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div id="home" className="min-h-screen w-full overflow-hidden flex flex-col relative">
      {/* Full size background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          {/* Mobile view */}
          <div className="md:hidden absolute inset-0 flex items-start justify-center pt-10">
            <Image
              src="/mobile_robot.png"
              alt="Robot Image"
              width={440}
              height={600}
              className="transform-gpu object-top"
              priority
            />
          </div>
          {/* Desktop view */}
          <div className="hidden md:block w-full h-full">
            <Image
              src="/base2.webp"
              alt="Robot Image"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Main Content spacer */}
      <div className="flex-grow"></div>

      {/* Bottom Title Section */}
      <div className="w-full pb-12 pt-4 z-10">
        <div className="container mx-auto px-4">
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center space-y-2 mt-[60vh]">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-[#FF8A00] text-3xl font-['BS'] tracking-wide">CAMBRIAN</h1>
              <h1 className="text-[#FF8A00] text-3xl font-['BS'] tracking-wide">OPEN</h1>
              <h1 className="text-[#FF8A00] text-3xl font-['BS'] tracking-wide">HOUSE</h1>
            </div>
            <div className="bg-white/70 backdrop-blur-sm py-2 px-4 rounded-lg mt-2">
              <p className="text-black text-base font-['Bebas_Neue'] font-bold tracking-wider text-center">
                19th APR 2025 • 9:30 AM TO 5:00 PM
              </p>
              <p className="text-black text-base font-['Bebas_Neue'] font-bold tracking-wider text-center mt-0.5">
                CIT KR PURAM, BENGALURU-560036
              </p>
            </div>
            {/* "JOIN US FOR FREE" Button for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center w-full mt-4"
            >
              <button
                onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#99E265] text-black font-['Bebas_Neue'] text-lg tracking-wider py-2.5 px-6 w-full max-w-xs rounded-full hover:bg-[#8bd456] transition-all duration-300"
              >
                JOIN US FOR FREE
              </button>
            </motion.div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block text-center px-4">
            <div className="hidden md:block lg:hidden">
              <h1 className="text-[#FF8A00] text-[5vw] font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="hidden lg:block xl:hidden">
              <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide whitespace-nowrap leading-normal mx-auto max-w-[90vw] overflow-hidden">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="hidden xl:block">
              <h1 className="text-[#FF8A00] text-6xl font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <div className="flex items-center gap-4">
                <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg text-2xl md:text-3xl font-['Bebas_Neue'] font-bold tracking-wider">
                  APRIL 19, 2025
                </p>
                <span className="text-black text-2xl md:text-3xl font-['Bebas_Neue'] font-bold">•</span>
                <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg text-2xl md:text-3xl font-['Bebas_Neue'] font-bold tracking-wider">
                  9:30 AM - 6:00 PM
                </p>
              </div>
              <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg text-2xl md:text-3xl font-['Bebas_Neue'] font-bold tracking-wider">
                CIT CAMPUS, BENGALURU
              </p>
            </div>
            {/* "JOIN US FOR FREE" Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#99E265] text-black font-['Bebas_Neue'] text-2xl tracking-wider py-2 px-8 rounded-full hover:bg-[#8bd456] transition-all duration-300"
              >
                JOIN US FOR FREE
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;