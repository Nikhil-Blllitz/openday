'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Microsoft', logo: '/partners/citlogo.png' },
  { name: 'Google', logo: '/partners/citlogo.png' },
  { name: 'Amazon', logo: '/partners/citlogo.png' },
  { name: 'Apple', logo: '/partners/citlogo.png' },
  { name: 'IBM', logo: '/partners/citlogo.png' },
  { name: 'Intel', logo: '/partners/citlogo.png' },
  { name: 'Oracle', logo: '/partners/citlogo.png' },
  { name: 'Cisco', logo: '/partners/citlogo.png' },
  { name: 'Adobe', logo: '/partners/citlogo.png' },
  { name: 'Tesla', logo: '/partners/citlogo.png' },
  { name: 'Nvidia', logo: '/partners/citlogo.png' },
  { name: 'Meta', logo: '/partners/citlogo.png' },
];

const PartnersMarquee: React.FC = () => {
  // Duplicate the partners array for seamless looping
  const marqueeItems = [...partners, ...partners];

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="mx-auto px-8 md:px-16 lg:px-24">
        {/* Updated heading with larger text */}
        <h3 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Our Affliations
        </h3>

        {/* Mobile Marquee - Faster (duration: 20 seconds) */}
        <div className="flex overflow-hidden relative px-8 block md:hidden">
          <motion.div
            className="flex items-center space-x-16 min-w-full"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {marqueeItems.map((partner, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-40 h-24 relative rounded-lg shadow-sm p-2 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-12"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/120x80?text=" + partner.name;
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Marquee - Standard speed (duration: 25 seconds) */}
        <div className="flex overflow-hidden relative px-8 hidden md:flex">
          <motion.div
            className="flex items-center space-x-16 min-w-full"
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {marqueeItems.map((partner, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-40 h-24 relative rounded-lg shadow-sm p-2 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-12"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/120x80?text=" + partner.name;
                    }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;