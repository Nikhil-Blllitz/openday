'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Venue() {
  const venueDetails = {
    name: 'CAMBRIDGE INSTITUTE OF TECHNOLOGY',
    address: 'KR Puram, Bengaluru-560036',
    features: [
      {
        title: 'SIR MV AUDITORIUM',
        description: 'State-of-the-art auditorium with modern facilities',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'COLLEGE LAWN',
        description: 'Spacious outdoor area for exhibitions',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
      },
      {
        title: 'PARKING',
        description: 'Ample parking space available for visitors',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        )
      }
    ]
  };

  return (
    <div className=" max-sm:pb-[0] max-sm:pt-[5vw] relative  py-20">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className=" font-['BS'] max-sm:text-[8vw] text-5xl md:text-6xl lg:text-5xl font-bold text-[#141414] mb-4">
            Venue
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Experience innovation at our state-of-the-art campus
          </p>
        </motion.div>

        {/* Integrated Venue Card with Image and Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Left side - Image */}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/campus.webp"
                  alt="CIT Campus"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                  <h3 className="text-2xl font-bold mb-1">{venueDetails.name}</h3>
                  <p className="text-sm font-medium opacity-90">{venueDetails.address}</p>
                </div>
              </div>

              {/* Right side - Info */}
              <div className="md:w-1/2 p-8">
                {/* Venue Name and Address - Only shown on desktop */}
                <div className="hidden md:block mb-6">
                  <h3 className="text-3xl font-bold text-[#67B044] mb-2">{venueDetails.name}</h3>
                  <p className="text-lg text-gray-700 font-medium">{venueDetails.address}</p>
                </div>

                {/* Amenities */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="bg-[#9EE666]/20 p-2 rounded-full mr-3">
                      <svg className="w-5 h-5 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Key Amenities
                  </h4>

                  <div className="grid grid-cols-1 gap-4">
                    {venueDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-[#9EE666]/20 p-2 rounded-full mr-3">
                          <div className="text-[#67B044]">
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{feature.title}</p>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Get Directions Button */}
                  <a
                    href="https://maps.app.goo.gl/Ep2AMo7mKyKR2Mp29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-[#67B044] hover:bg-[#67B044]/90 text-white font-bold text-base hover:shadow-lg transition-all duration-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-[#9EE666]/20 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-[#67B044]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800">Find Us</h4>
            </div>

            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.01997700143855!2d77.67411661722831!3d12.995715299472149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20.1!3m3!1m2!1s0x3bae15986765d7d9%3A0x357ff1cbac4a09bb!2s2P73%2B2P%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710835058584!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}