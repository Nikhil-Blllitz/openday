'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Venue() {
  const venueDetails = {
    name: 'CAMBRIDGE INSTITUTE OF TECHNOLOGY',
    address: 'KR Puram, Bengaluru-566037',
    features: [
      {
        title: 'MAIN SEMINAR HALL',
        description: 'State-of-the-art auditorium equipped with modern facilities',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: 'COLLEGE LAWN',
        description: 'Spacious outdoor area perfect for exhibitions and gatherings',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        )
      },
      {
        title: 'PARKING',
        description: 'Ample parking space available for visitors',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        )
      }
    ]
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50 overflow-hidden">
      {/* Colored Strips */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Diagonal Color Bands */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-yellow-400/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Subtle Background Accents */}
      <div className="absolute -top-40 right-20 w-96 h-96 rounded-full bg-green-300/20 blur-3xl" />
      <div className="absolute -bottom-40 left-20 w-96 h-96 rounded-full bg-purple-300/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/3 translate-y-[-50%] w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500 mb-6">
            Venue
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Experience innovation at our state-of-the-art campus
          </p>
        </motion.div>

        {/* Main Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="relative h-64 rounded-xl overflow-hidden mb-8">
              <Image
                src="/campus.jpg"
                alt="CIT Campus"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500">
                {venueDetails.name}
              </h3>
              <p className="text-xl text-gray-700 font-medium">
                {venueDetails.address}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Venue Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {venueDetails.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-3 rounded-xl inline-block mb-4">
                <div className="text-gray-700">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.008069343035!2d77.67315731578915!3d12.995509489883234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d7d9%3A0x357ff1cbac4a09bb!2sCambridge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1647777777777!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Map Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cambridge+Institute+of+Technology+KR+Puram+Bengaluru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500 text-white font-bold text-lg hover:shadow-lg transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            GET DIRECTIONS
          </a>
        </motion.div>
      </div>
    </div>
  );
}
