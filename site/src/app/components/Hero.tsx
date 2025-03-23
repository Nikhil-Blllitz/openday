'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Space_Grotesk, Orbitron, Audiowide } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'] });
const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

const Hero: React.FC = () => {
  return (
    <div className={`min-h-screen relative w-full overflow-hidden bg-[#141414] ${spaceGrotesk.className} `}>
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0  ">
        <div className="relative w-full h-full ">
          <Image
            src="/campus.jpg"
            alt="Campus Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#67B044] via-[#FFD700] to-[#9B4DEE] opacity-80  " />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#FF69B4] opacity-30 blur-2xl" />
        <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-[#9B4DEE] opacity-30 blur-2xl" />
        <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-[#FFD700] opacity-30 blur-2xl" />
      </div>

      {/* Robot Image - Desktop version (hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute top-0 right-0 bottom-0 w-1/2 z-10 hidden md:flex items-center justify-end pointer-events-none "
      >
        <div className="absolute h-full w-[50vw]  ">
          <Image
            src="/robot.png"
            alt="Robot"
            fill
            className="object-contain drop-shadow-2xl  max-sm:w-[10vw]"
            // style={{ objectPosition: 'right center' }}
            priority
          />
        </div>
      </motion.div>

      {/* Content Container (Text on the Left) */}
      <div className="relative z-20 h-full flex items-center">
        <div className=" container mx-auto px-6 py-20 flex flex-col justify-center h-full text-left max-sm:h-[100vh]">
          <div className="max-w-full md:max-w-3xl ">
            {/* Main Title Section */}
            <div className="space-y-4 ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col max-sm:mt-[-21rem] max-sm:absolute"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={` font-['BS'] text-[5vw] max-sm:text-[10vw] leading-tight font-bold mb-2 tracking-wider text-white`}
                >
                  CAMBRIAN
                </motion.span>
                <h1 className={`${audiowide.className} text-[7vw] max-sm:text-[11vw]  leading-none font-bold text-white uppercase tracking-wider`}>
                  OPEN HOUSE
                </h1>
                  {/* <h1 className={`${audiowide.className} text-[7vw] max-sm:text-[11vw]  leading-none font-bold text-white uppercase tracking-wider`}>
                    HOUSE
                  </h1> */}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`max-sm:mt-[22rem] ${orbitron.className} max-sm:text-center text-xl md:text-2xl text-white/90 font-medium tracking-widest mt-6 uppercase max-sm:text-[4.7vw] `}
              >
                ENGAGE. <span className='max-sm:text-[white]'>IMMERSE</span>. BELONG
              </motion.p>

              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className=" md:mt-12 space-y-3"
              >
                <div className="flex items-center ">
                  <p className={`${orbitron.className} max-sm:bg-black/30 max-sm:backdrop-blur-md max-sm:border max-sm:border-white/20 max-sm:rounded-lg max-sm:p-[0.5em] max-sm:w-full max-sm:text-center text-2xl md:text-3xl font-bold tracking-wide max-sm:text-[3.5vw]`}>
                    19<sup>th</sup> APR &apos;25 | <span className='max-sm:text-[white]'>9:30 PM</span> TO <span className='max-sm:text-[white]'>5:00 PM</span>
                  </p>
                </div>
                <p className={`${spaceGrotesk.className} max-sm:text-center max-sm:bg-black/30 max-sm:backdrop-blur-md max-sm:border max-sm:border-white/20 max-sm:rounded-lg max-sm:p-[0.5em] text-xl md:text-2xl tracking-wide max-sm:text-[4vw]`}>
                  <span className=' max-sm:text-[white]'>CIT KR PURAM, BENGALURU-560036</span>
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" md:mt-12 max-sm:bg-[green] "
              >
                <button
                  onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                  className={`${orbitron.className} max-sm:w-full max-sm:p-[0.5em] max-sm:h-auto group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-lg md:text-xl font-bold rounded-md hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 overflow-hidden shadow-lg tracking-wider`}>
                  REGISTER NOW
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Robot Image (visible only on small screens) - Adjusted to the right */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className=" absolute  z-10 md:hidden pointer-events-none"
        style={{ height: '100%', width: '100%' }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/robot.png"
            alt="Robot"
            fill
            className="object-contain drop-shadow-2xl  "
            style={{ objectPosition: 'bottom ' }}
            priority
          />
        </div>
      </motion.div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-40 right-20">
          <div className="w-16 h-16 md:w-20 md:h-20 text-white/10 border-4 border-current rounded-full" />
        </div>
        <div className="absolute bottom-40 left-1/4">
          <div className="w-24 h-24 md:w-32 md:h-32 text-white/10 border-4 border-current rounded-full" />
        </div>
        <div className="absolute top-1/3 right-1/3">
          <div className="w-12 h-12 md:w-16 md:h-16 text-white/10 border-4 border-current rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

