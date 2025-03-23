// src/app/components/Venue.tsx
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Venue() {
//   const venueDetails = {
//     name: 'CAMBRIDGE INSTITUTE OF TECHNOLOGY',
//     address: 'KR Puram, Bengaluru-566037',
//     features: [
//       {
//         title: 'MAIN SEMINAR HALL',
//         description: 'State-of-the-art auditorium equipped with modern facilities',
//         icon: (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//           </svg>
//         )
//       },
//       {
//         title: 'COLLEGE LAWN',
//         description: 'Spacious outdoor area perfect for exhibitions and gatherings',
//         icon: (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//           </svg>
//         )
//       },
//       {
//         title: 'PARKING',
//         description: 'Ample parking space available for visitors',
//         icon: (
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         )
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-green-400 opacity-20 blur-2xl" />
//         <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-emerald-400 opacity-20 blur-2xl" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Title */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="inline-block text-5xl font-black text-green-600 mb-4">
//             VENUE
//           </h2>
//           <div className="w-40 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 mx-auto rounded-full" />
//         </motion.div>

//         {/* Main Venue Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto mb-16"
//         >
//           <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-green-200">
//             <div className="relative h-64 rounded-xl overflow-hidden mb-8">
//               <Image
//                 src="/campus.jpg"
//                 alt="CIT Campus"
//                 layout="fill"
//                 objectFit="cover"
//                 className="transition-transform duration-300 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
//             </div>
//             <div className="text-center space-y-4">
//               <h3 className="text-4xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
//                 {venueDetails.name}
//               </h3>
//               <p className="text-xl text-gray-800 font-medium">
//                 {venueDetails.address}
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Venue Features */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {venueDetails.features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-200 hover:border-green-400 transition-all duration-300"
//             >
//               <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-green-100 p-3 rounded-xl inline-block mb-4">
//                 <div className="text-green-600">
//                   {feature.icon}
//                 </div>
//               </div>
//               <h4 className="text-2xl font-bold text-green-600 mb-2">
//                 {feature.title}
//               </h4>
//               <p className="text-gray-700">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Map Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-7xl mx-auto"
//         >
//           <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-green-200">
//             <div className="relative h-[400px] rounded-xl overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.008069343035!2d77.67315731578915!3d12.995509489883234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d7d9%3A0x357ff1cbac4a09bb!2sCambridge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1647777777777!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-xl"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Map Link */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-8"
//         >
//           <a
//             href="https://maps.google.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 text-white font-bold text-lg hover:from-green-600 hover:via-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             GET DIRECTIONS
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-green-100 opacity-80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-green-400 opacity-20 blur-2xl" />
        <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-green-300 opacity-20 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-5xl font-black text-green-700 mb-4">
            VENUE
          </h2>
          <div className="w-40 h-1 bg-green-700 mx-auto rounded-full" />
        </motion.div>

        {/* Main Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-200">
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
              <h3 className="text-4xl font-black text-green-700">
                {venueDetails.name}
              </h3>
              <p className="text-xl text-green-700 font-medium">
                {venueDetails.address}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Venue Features */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {venueDetails.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-green-200 hover:border-green-400 transition-all duration-300"
            >
              <div className="bg-green-100 p-3 rounded-xl inline-block mb-4">
                <div className="text-green-700">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-green-700 mb-2">
                {feature.title}
              </h4>
              <p className="text-green-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-green-200">
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-green-700 text-white font-bold text-lg hover:bg-green-800 transition-all duration-300 shadow-lg"
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
