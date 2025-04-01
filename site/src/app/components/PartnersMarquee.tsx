'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'AICTE', logo: '/partners/aicte.png' },
  { name: 'Government of Karnataka', logo: '/partners/gok.png' },
  { name: 'ISO:9001:2015', logo: '/partners/iso.png' },
  { name: 'NAAC', logo: '/partners/naac.webp' },
  { name: 'NBA', logo: '/partners/nba.png' },
  { name: 'NIRF', logo: '/partners/nirf.png' },
  { name: 'VTU', logo: '/partners/vtu.png' },
  { name: 'NAAC', logo: '/partners/naac.webp' },
  { name: 'Scientific and industrial research organizations', logo: '/partners/siro.png' },
  { name: 'MSME', logo: '/partners/msme.webp' },
];

const PartnersMarquee: React.FC = () => {
  // Duplicate the partners array multiple times for smoother looping
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h3 className="font-['BS'] max-sm:text-[5vw] max-sm:leading-[8vw] text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#141414] mb-12 uppercase tracking-wider text-center whitespace-nowrap">
          Our Affiliations
        </h3>

        {/* Mobile Marquee */}
        <div className="relative block md:hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#faf6f1] via-[#faf6f1]/50 to-transparent z-10"></div>

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center space-x-12"
              animate={{ x: `-${(partners.length * 256)}px` }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 80,
                ease: "linear",
              }}
            >
              {marqueeItems.map((partner, index) => (
                <div key={index} className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-56 h-36 relative rounded-lg shadow-sm p-2 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200}
                      height={140}
                      className="object-contain max-h-28"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/200x140?text=" + partner.name;
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#faf6f1] via-[#faf6f1]/50 to-transparent z-10"></div>
        </div>

        {/* Desktop Marquee */}
        <div className="relative hidden md:block">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#faf6f1] via-[#faf6f1]/50 to-transparent z-10"></div>

          <div className="flex overflow-hidden">
            <motion.div
              className="flex items-center space-x-16"
              animate={{ x: `-${(partners.length * 256)}px` }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              }}
            >
              {marqueeItems.map((partner, index) => (
                <div key={index} className="flex flex-col items-center group flex-shrink-0">
                  <div className="w-64 h-40 relative rounded-lg shadow-sm p-2 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={240}
                      height={160}
                      className="object-contain max-h-32"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/240x160?text=" + partner.name;
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#faf6f1] via-[#faf6f1]/50 to-transparent z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;