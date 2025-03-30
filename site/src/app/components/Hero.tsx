'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div id="home" className="min-h-screen w-full overflow-hidden flex flex-col relative">
      {/* Header with Logo and Navigation */}
      <div className="flex justify-between items-center px-4 md:px-8 py-4 z-10">
        {/* Navigation */}
        <div className="bg-[#99E265] rounded-full py-1 px-4">
          <nav className="flex space-x-4 md:space-x-6">
            <Link href="/" className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">HOME</Link>
            <Link href="/about" className="text-black px-3 py-1 text-sm font-bold">ABOUT</Link>
            <Link href="/schedule" className="text-black px-3 py-1 text-sm font-bold">SCHEDULE</Link>
            <Link href="/venue" className="text-black px-3 py-1 text-sm font-bold">VENUE</Link>
            <Link href="/blog" className="text-black px-3 py-1 text-sm font-bold">BLOG</Link>
          </nav>
        </div>
      </div>

      {/* Full size background image that covers the entire home section */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* CHANGE HERE: Different styling for mobile vs desktop */}
        <div className="relative w-full h-full">
          {/* Mobile view - Larger and more centered */}
          <div className="md:hidden absolute inset-0 flex items-center justify-center">
            <Image
              src="/base.webp"
              alt="Robot Image"
              width={500}
              height={800}
              className="scale-200 transform-gpu" /* Increased size for mobile */
              priority
            />
          </div>

          {/* Desktop view - Keep exactly as before */}
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
          <div className="text-[#e9f5e0] text-[20vw] font-bold opacity-60">2025</div>
        </div>
      </div>

      {/* Main Content - Takes the remaining space */}
      <div className="flex-grow"></div>

      {/* Bottom Title Section */}
      <div className="w-full pb-20 pt-4 z-10">
        <div className="container mx-auto px-4">
          {/* "CAMBRIAN OPEN HOUSE" in one line with overflow handling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center overflow-hidden"
          >
            {/* CHANGE HERE: Force text to be positioned below the image on mobile */}
            <h1 className="text-[#67E11D] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['BS'] tracking-wide whitespace-nowrap overflow-hidden mt-[60vh] md:mt-0">
              CAMBRIAN OPEN HOUSE
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center space-x-4 md:space-x-8 mt-2 text-[#67E11D] font-['BS'] text-sm md:text-lg"
          >
            <span>ELEVATE</span>
            <span className="text-lg md:text-2xl">×</span>
            <span>INNOVATE</span>
            <span className="text-lg md:text-2xl">×</span>
            <span>INTEGRATE</span>
          </motion.div>

          {/* "JOIN US FOR FREE" Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#99E265] text-black font-['BS'] text-base md:text-lg py-3 px-8 rounded-full hover:bg-[#8bd456] transition-all duration-300"
            >
              JOIN US FOR FREE
            </button>
          </motion.div>
        </div>
      </div>

      {/* "REGISTER NOW FOR FREE" Button for Mobile - Visible only on small screens */}
      <div className="md:hidden fixed bottom-6 left-6 z-20">
        <button
          onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-[#99E265] text-black text-sm py-2 px-6 rounded-full hover:bg-[#8bd456] transition-all duration-300"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;