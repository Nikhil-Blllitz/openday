'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div id="home" className="min-h-screen w-full overflow-hidden flex flex-col relative">
      {/* Header with Logo and Navigation */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2 z-10">
        <div className="bg-[#99E265] rounded-full py-1 px-4">
          <nav className="flex space-x-4 md:space-x-6">
            <Link href="/" className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
              HOME
            </Link>
            <Link href="/about" className="text-black px-3 py-1 text-sm font-bold">
              ABOUT
            </Link>
            <Link href="/schedule" className="text-black px-3 py-1 text-sm font-bold">
              SCHEDULE
            </Link>
            <Link href="/venue" className="text-black px-3 py-1 text-sm font-bold">
              VENUE
            </Link>
            <Link href="/blog" className="text-black px-3 py-1 text-sm font-bold">
              BLOG
            </Link>
          </nav>
        </div>
      </div>

      {/* Full size background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          {/* Mobile view */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center">
            <Image
              src="/base.webp"
              alt="Robot Image"
              width={440}
              height={600}
              className="scale-215 transform-gpu object-top"
              priority
            />
          </div>
          {/* Desktop view */}
          <div className="hidden md:block w-full h-full">
            <Image
              src="/base1.webp"
              alt="Robot Image"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>
        {/* 2025 Background Text */}
        <div className="absolute inset-0 z-[-1] flex justify-center items-center">
          <div className="text-[#e9f5e0] text-[18vw] font-bold opacity-60">2025</div>
        </div>
      </div>

      {/* Main Content spacer */}
      <div className="flex-grow"></div>

      {/* Bottom Title Section */}
      <div className="w-full pb-12 pt-4 z-10">
        <div className="container mx-auto px-4">
          {/* Mobile View - Keep as is */}
          <div className="md:hidden flex flex-col items-center space-y-2 mt-[20vh]">
            <div className="flex flex-col items-center space-y-1">
              <h1 className="text-[#FF8A00] text-3xl font-['BS'] tracking-wide">CAMBRIAN</h1>
              <h1 className="text-[#FF8A00] text-3xl font-['BS'] tracking-wide">OPEN</h1>
              <h1 className="text-[#FF8A00] text-3xl font-['BS'] tracking-wide">HOUSE</h1>
            </div>
            <p className="text-white bg-white/70 backdrop-blur-sm py-1 px-4 rounded-lg inline-block text-xs font-medium">
              APRIL 15-17, 2025 • CIT CAMPUS, BENGALURU
            </p>
          </div>

          {/* Desktop View - FIXED to ensure text fits */}
          <div className="hidden md:block text-center px-4">
            {/* Option 1: Responsive text sizing that adjusts to screen width */}
            <div className="hidden md:block lg:hidden">
              <h1 className="text-[#FF8A00] text-[5vw] font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>

            {/* Option 2: For large screens, keep the size but make sure it fits */}
            <div className="hidden lg:block xl:hidden">
              <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide whitespace-nowrap leading-normal mx-auto max-w-[90vw] overflow-hidden">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>

            {/* Option 3: For very large screens */}
            <div className="hidden xl:block">
              <h1 className="text-[#FF8A00] text-6xl font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>

            {/* Option 4: If screen is too small, stack the title */}
            <div className="hidden 2xl:hidden md:hidden">
              <div className="flex flex-col items-center">
                <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide leading-tight">
                  CAMBRIAN OPEN
                </h1>
                <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide leading-tight">
                  HOUSE
                </h1>
              </div>
            </div>
          </div>

          {/* "JOIN US FOR FREE" Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#99E265] text-black font-['BS'] text-sm md:text-lg py-2 px-6 rounded-full hover:bg-[#8bd456] transition-all duration-300"
            >
              JOIN US FOR FREE
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;