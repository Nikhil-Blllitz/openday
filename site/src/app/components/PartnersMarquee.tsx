// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion, useAnimation } from 'framer-motion';

// const partners = [
//   { name: 'AICTE', logo: '/partners/aicte.png' },
//   { name: 'Government of Karnataka', logo: '/partners/gok.png' },
//   { name: 'ISO:9001:2015', logo: '/partners/iso.png' },
//   { name: 'NAAC', logo: '/partners/naac.webp' },
//   { name: 'NBA', logo: '/partners/nba.png' },
//   { name: 'NIRF', logo: '/partners/nirf.png' },
//   { name: 'VTU', logo: '/partners/vtu.png' },
//   { name: 'NAAC', logo: '/partners/naac.webp' },
//   { name: 'Scientific and industrial research organizations', logo: '/partners/siro.png' },
//   { name: 'MSME', logo: '/partners/msme.webp' },
// ];

// const PartnersMarquee: React.FC = () => {
//   // Duplicate the partners array multiple times for smoother looping
//   const marqueeItems = [...partners, ...partners, ...partners, ...partners];

//   // Create animation controls for both mobile and desktop marquees
//   const mobileControls = useAnimation();
//   const desktopControls = useAnimation();

//   return (
//     <div className="w-full py-12 overflow-hidden">
//       <div className="max-w-[1400px] mx-auto">
//         <h3 className="font-['BS'] max-sm:text-[5vw] max-sm:leading-[8vw] text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#141414] mb-12 uppercase tracking-wider text-center whitespace-nowrap">
//           Our Affiliations
//         </h3>

//         {/* Mobile Marquee */}
//         <div className="relative block md:hidden">
//           <div className="flex overflow-hidden">
//             <motion.div
//               className="flex items-center space-x-12 cursor-grab active:cursor-grabbing"
//               animate={mobileControls}
//               initial={{ x: 0 }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 80,
//                 ease: "linear",
//               }}
//               drag="x"
//               dragConstraints={{ left: -((partners.length * 256) + 100), right: 0 }}
//               dragElastic={0.1}
//               onDragEnd={(event, info) => {
//                 const offset = info.offset.x;
//                 const velocity = info.velocity.x;
//                 if (Math.abs(velocity) > 500) {
//                   const direction = velocity > 0 ? -1 : 1;
//                   const newX = offset + direction * 256;
//                   // Snap to the nearest partner position
//                   const snapX = Math.round(newX / 256) * 256;
//                   mobileControls.start({ x: snapX });
//                 }
//               }}
//             >
//               {marqueeItems.map((partner, index) => (
//                 <div key={index} className="flex flex-col items-center group flex-shrink-0">
//                   <div className="w-56 h-36 relative rounded-lg p-2 flex items-center justify-center transition-shadow duration-300">
//                     <Image
//                       src={partner.logo}
//                       alt={partner.name}
//                       width={200}
//                       height={140}
//                       className="object-contain max-h-28"
//                       onError={(e) => {
//                         e.currentTarget.src =
//                           "https://via.placeholder.com/200x140?text=" + partner.name;
//                       }}
//                     />
//                   </div>
//                   <p className="mt-2 text-sm font-['Cool'] text-gray-600">{partner.name}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Desktop Marquee */}
//         <div className="relative hidden md:block">
//           <div className="flex overflow-hidden">
//             <motion.div
//               className="flex items-center space-x-16 cursor-grab active:cursor-grabbing"
//               animate={desktopControls}
//               initial={{ x: 0 }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 duration: 60,
//                 ease: "linear",
//               }}
//               drag="x"
//               dragConstraints={{ left: -((partners.length * 256) + 100), right: 0 }}
//               dragElastic={0.1}
//               onDragEnd={(event, info) => {
//                 const offset = info.offset.x;
//                 const velocity = info.velocity.x;
//                 if (Math.abs(velocity) > 500) {
//                   const direction = velocity > 0 ? -1 : 1;
//                   const newX = offset + direction * 256;
//                   // Snap to the nearest partner position
//                   const snapX = Math.round(newX / 256) * 256;
//                   desktopControls.start({ x: snapX });
//                 }
//               }}
//             >
//               {marqueeItems.map((partner, index) => (
//                 <div key={index} className="flex flex-col items-center group flex-shrink-0">
//                   <div className="w-64 h-40 relative rounded-lg p-2 flex items-center justify-center transition-shadow duration-300">
//                     <Image
//                       src={partner.logo}
//                       alt={partner.name}
//                       width={240}
//                       height={160}
//                       className="object-contain max-h-32"
//                       onError={(e) => {
//                         e.currentTarget.src =
//                           "https://via.placeholder.com/240x160?text=" + partner.name;
//                       }}
//                     />
//                   </div>
//                   <p className="mt-2 text-sm font-['Cool'] text-gray-600">{partner.name}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnersMarquee;