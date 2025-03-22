// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Space_Grotesk, Orbitron, Audiowide } from 'next/font/google';

// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
// const orbitron = Orbitron({ subsets: ['latin'] });
// const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

// const Hero: React.FC = () => {
//   return (
//     <div className={`relative min-h-screen w-full overflow-hidden bg-[#67B044] ${spaceGrotesk.className}`}>
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/campus.jpg"
//           alt="Campus Background"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-20"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#67B044] via-[#67B044]/90 to-[#67B044]/80" />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 z-10 overflow-hidden">
//         <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#FF69B4] opacity-20 blur-2xl" />
//         <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-[#9B4DEE] opacity-20 blur-2xl" />
//         <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-[#FFD700] opacity-20 blur-2xl" />
//       </div>

//       {/* Content */}
//       <div className="relative z-20 h-full">
//         <div className="container mx-auto px-6 py-20 flex flex-col justify-center">
//           <div className="max-w-6xl">
//             {/* Main Title Section */}
//             <div className="space-y-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-col"
//               >
//                 <motion.span
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.7, ease: "easeOut" }}
//                   className={`${orbitron.className} text-[4rem] leading-tight font-bold mb-2 tracking-wider bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent`}
//                 >
//                   INTUIT CIT
//                 </motion.span>
//                 <h1 className={`${audiowide.className} text-[8rem] leading-none font-bold text-white uppercase tracking-wider`}>
//                   OPEN
//                 </h1>
//                 <h1 className={`${audiowide.className} text-[8rem] leading-none font-bold text-white uppercase tracking-wider`}>
//                   HOUSE
//                 </h1>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className={`${orbitron.className} text-2xl text-white/90 font-medium tracking-widest mt-6 uppercase`}
//               >
//                 ENGAGE. IMMERSE. BELONG
//               </motion.p>

//               {/* Event Details */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="mt-12 space-y-3"
//               >
//                 <div className="flex items-center">
//                   <p className={`${orbitron.className} text-3xl text-white font-bold tracking-wide`}>
//                     19<sup>th</sup> APR &apos;25 | 10:00 AM <span className="text-white/80">TO</span> 5:00 PM
//                   </p>
//                 </div>
//                 <p className={`${spaceGrotesk.className} text-2xl text-white/90 tracking-wide`}>
//                   CIT KR PURAM, BENGALURU-560037
//                 </p>
//               </motion.div>

//               {/* CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="mt-12"
//               >
//                 <button className={`${orbitron.className} group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xl font-bold rounded-md hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 overflow-hidden shadow-lg tracking-wider`}>
//                   REGISTER NOW
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="absolute top-40 right-20">
//           <div className="w-20 h-20 text-white/10 border-4 border-current rounded-full" />
//         </div>
//         <div className="absolute bottom-40 left-1/4">
//           <div className="w-32 h-32 text-white/10 border-4 border-current rounded-full" />
//         </div>
//         <div className="absolute top-1/3 right-1/3">
//           <div className="w-16 h-16 text-white/10 border-4 border-current rounded-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Space_Grotesk, Orbitron, Audiowide } from 'next/font/google';

// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
// const orbitron = Orbitron({ subsets: ['latin'] });
// const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

// const Hero: React.FC = () => {
//   return (
//     <div className={`relative min-h-screen w-full overflow-hidden bg-[#67B044] ${spaceGrotesk.className}`}>
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/campus.jpg"
//           alt="Campus Background"
//           layout="fill"
//           objectFit="cover"
//           className="opacity-20"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#67B044] via-[#67B044]/90 to-[#67B044]/80" />
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute inset-0 z-10 overflow-hidden">
//         <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-[#FF69B4] opacity-20 blur-2xl" />
//         <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full bg-[#9B4DEE] opacity-20 blur-2xl" />
//         <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-[#FFD700] opacity-20 blur-2xl" />
//       </div>

//       {/* Robot Image - Desktop version (hidden on mobile) */}
//       <motion.div
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.7, delay: 0.2 }}
//         className="absolute top-0 right-0 bottom-0 w-1/2 z-10 hidden md:flex items-center justify-end pointer-events-none"
//       >
//         <div className="relative h-full w-full">
//           <Image
//             src="/robot.png"
//             alt="Robot"
//             layout="fill"
//             objectFit="contain"
//             objectPosition="right center"
//             className="drop-shadow-2xl"
//             priority
//           />
//         </div>
//       </motion.div>

//       {/* Content Container */}
//       <div className="relative z-20 h-full">
//         <div className="container mx-auto px-6 py-20 flex flex-col justify-center h-full">
//           <div className="max-w-full md:max-w-3xl">
//             {/* Main Title Section */}
//             <div className="space-y-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex flex-col"
//               >
//                 <motion.span
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.7, ease: "easeOut" }}
//                   className={`${orbitron.className} text-[2.5rem] md:text-[4rem] leading-tight font-bold mb-2 tracking-wider bg-gradient-to-r from-white via-white/60 to-white/80 bg-clip-text text-transparent`}
//                 >
//                   CAMBRIAN
//                 </motion.span>
//                 <h1 className={`${audiowide.className} text-[5rem] md:text-[8rem] leading-none font-bold text-white uppercase tracking-wider`}>
//                   OPEN
//                 </h1>
//                 <h1 className={`${audiowide.className} text-[5rem] md:text-[8rem] leading-none font-bold text-white uppercase tracking-wider`}>
//                   HOUSE
//                 </h1>
//               </motion.div>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className={`${orbitron.className} text-xl md:text-2xl text-white/90 font-medium tracking-widest mt-6 uppercase`}
//               >
//                 ENGAGE. IMMERSE. BELONG
//               </motion.p>

//               {/* Event Details */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="mt-8 md:mt-12 space-y-3"
//               >
//                 <div className="flex items-center">
//                   <p className={`${orbitron.className} text-2xl md:text-3xl text-white font-bold tracking-wide`}>
//                     19<sup>th</sup> APR &apos;25 | 9:30 AM <span className="text-white/80">TO</span> 5:00 PM
//                   </p>
//                 </div>
//                 <p className={`${spaceGrotesk.className} text-xl md:text-2xl text-white/90 tracking-wide`}>
//                   CIT KR PURAM, BENGALURU-560037
//                 </p>
//               </motion.div>

//               {/* CTA Button */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="mt-8 md:mt-12"
//               >
//                 <button className={`${orbitron.className} group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-lg md:text-xl font-bold rounded-md hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 overflow-hidden shadow-lg tracking-wider`}>
//                   REGISTER NOW
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Robot Image (visible only on small screens) - Adjusted to the right */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, delay: 0.5 }}
//         className="absolute bottom-0 right-0 z-10 md:hidden pointer-events-none"
//         style={{ height: '45%', width: '85%' }}
//       >
//         <div className="relative h-full w-full">
//           <Image
//             src="/robot.png"
//             alt="Robot"
//             layout="fill"
//             objectFit="contain"
//             objectPosition="bottom right"
//             className="drop-shadow-2xl"
//             priority
//           />
//         </div>
//       </motion.div>

//       {/* Floating Icons */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="absolute top-40 right-20">
//           <div className="w-16 h-16 md:w-20 md:h-20 text-white/10 border-4 border-current rounded-full" />
//         </div>
//         <div className="absolute bottom-40 left-1/4">
//           <div className="w-24 h-24 md:w-32 md:h-32 text-white/10 border-4 border-current rounded-full" />
//         </div>
//         <div className="absolute top-1/3 right-1/3">
//           <div className="w-12 h-12 md:w-16 md:h-16 text-white/10 border-4 border-current rounded-full" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

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
    <div className={`relative min-h-screen w-full overflow-hidden bg-[#141414] ${spaceGrotesk.className}`}>
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/campus.jpg"
          alt="Campus Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#67B044] via-[#FFD700] to-[#9B4DEE] opacity-80" />
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
        className="absolute top-0 right-0 bottom-0 w-1/2 z-10 hidden md:flex items-center justify-end pointer-events-none"
      >
        <div className="relative h-full w-full">
          <Image
            src="/robot.png"
            alt="Robot"
            layout="fill"
            objectFit="contain"
            objectPosition="right center"
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* Content Container (Text on the Left) */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6 py-20 flex flex-col justify-center h-full text-left">
          <div className="max-w-full md:max-w-3xl">
            {/* Main Title Section */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`${orbitron.className} text-[2.5rem] md:text-[4rem] leading-tight font-bold mb-2 tracking-wider bg-gradient-to-r from-white via-white/60 to-white/80 bg-clip-text text-transparent`}
                >
                  CAMBRIAN
                </motion.span>
                <h1 className={`${audiowide.className} text-[5rem] md:text-[8rem] leading-none font-bold text-white uppercase tracking-wider`}>
                  OPEN
                </h1>
                <h1 className={`${audiowide.className} text-[5rem] md:text-[8rem] leading-none font-bold text-white uppercase tracking-wider`}>
                  HOUSE
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`${orbitron.className} text-xl md:text-2xl text-white/90 font-medium tracking-widest mt-6 uppercase`}
              >
                ENGAGE. IMMERSE. BELONG
              </motion.p>

              {/* Event Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 md:mt-12 space-y-3"
              >
                <div className="flex items-center">
                  <p className={`${orbitron.className} text-2xl md:text-3xl text-white font-bold tracking-wide`}>
                    19<sup>th</sup> APR '25 | 9:30 AM <span className="text-white/80">TO</span> 5:00 PM
                  </p>
                </div>
                <p className={`${spaceGrotesk.className} text-xl md:text-2xl text-white/90 tracking-wide`}>
                  CIT KR PURAM, BENGALURU-560037
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 md:mt-12"
              >
                <button className={`${orbitron.className} group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-lg md:text-xl font-bold rounded-md hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 overflow-hidden shadow-lg tracking-wider`}>
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
        className="absolute bottom-0 right-0 z-10 md:hidden pointer-events-none"
        style={{ height: '45%', width: '85%' }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/robot.png"
            alt="Robot"
            layout="fill"
            objectFit="contain"
            objectPosition="bottom right"
            className="drop-shadow-2xl"
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
