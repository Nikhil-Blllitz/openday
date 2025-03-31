// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const Hero: React.FC = () => {
//   return (
//     <div id="home" className="min-h-screen w-full overflow-hidden flex flex-col relative">
//       {/* Full size background image */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <div className="relative w-full h-full">
//           {/* Mobile view */}
//           <div className="md:hidden absolute inset-0 flex items-start justify-center pt-40">
//             <Image
//               src="/mobile_robot.png"
//               alt="Robot Image"
//               width={440}
//               height={600}
//               className="transform-gpu object-top"
//               priority
//             />
//           </div>
//           {/* Desktop view */}
//           <div className="hidden md:block w-full h-full">
//             <Image
//               src="/base.webp"
//               alt="Robot Image"
//               fill
//               className="object-contain"
//               priority
//               sizes="100vw"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Content spacer */}
//       <div className="flex-grow"></div>

//       {/* Bottom Title Section */}
//       <div className="w-full pb-12 pt-4 z-10">
//         <div className="container mx-auto px-4">
//           {/* Mobile View */}
//           <div className="md:hidden flex flex-col items-center space-y-2 mt-[60vh]">
//             <div className="flex flex-col items-center space-y-6">
//               <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide">CAMBRIAN</h1>
//               <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide">OPEN</h1>
//               <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide">HOUSE</h1>
//             </div>
//             <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg inline-block text-sm font-medium mt-4">
//               19th APR '25 | 9:30 AM TO 5:00 PM
//             </p>
//             <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg inline-block text-sm font-medium mt-2">
//               CIT KR PURAM, BENGALURU-560036
//             </p>
//             {/* "JOIN US FOR FREE" Button for mobile */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex justify-center w-full mt-6"
//             >
//               <button
//                 onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
//                 className="bg-[#99E265] text-black font-bebas-neue text-lg tracking-wider py-3 px-8 w-full max-w-xs rounded-full hover:bg-[#8bd456] transition-all duration-300"
//               >
//                 JOIN US FOR FREE
//               </button>
//             </motion.div>
//           </div>

//           {/* Desktop View */}
//           <div className="hidden md:block text-center px-4">
//             <div className="hidden md:block lg:hidden">
//               <h1 className="text-[#FF8A00] text-[5vw] font-['BS'] tracking-wide whitespace-nowrap leading-normal">
//                 CAMBRIAN OPEN HOUSE
//               </h1>
//             </div>
//             <div className="hidden lg:block xl:hidden">
//               <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide whitespace-nowrap leading-normal mx-auto max-w-[90vw] overflow-hidden">
//                 CAMBRIAN OPEN HOUSE
//               </h1>
//             </div>
//             <div className="hidden xl:block">
//               <h1 className="text-[#FF8A00] text-6xl font-['BS'] tracking-wide whitespace-nowrap leading-normal">
//                 CAMBRIAN OPEN HOUSE
//               </h1>
//             </div>
//             <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg inline-block text-sm font-medium mt-4">
//               APRIL 15-17, 2025 • CIT CAMPUS, BENGALURU
//             </p>
//             {/* "JOIN US FOR FREE" Button - Desktop */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex justify-center mt-6"
//             >
//               <button
//                 onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
//                 className="bg-[#99E265] text-black font-bebas-neue text-lg tracking-wider py-2 px-8 rounded-full hover:bg-[#8bd456] transition-all duration-300"
//               >
//                 JOIN US FOR FREE
//               </button>
//             </motion.div>
//           </div>
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

const Hero: React.FC = () => {
  return (
    <div id="home" className="min-h-screen w-full overflow-hidden flex flex-col relative">
      {/* Full size background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          {/* Mobile view */}
          <div className="md:hidden absolute inset-0 flex items-start justify-center pt-40">
            <Image
              src="/mobile_robot.png"
              alt="Robot Image"
              width={440}
              height={600}
              className="transform-gpu object-top"
              priority
            />
          </div>
          {/* Desktop view */}
          <div className="hidden md:block w-full h-full">
            <Image
              src="/base.webp"
              alt="Robot Image"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Main Content spacer */}
      <div className="flex-grow"></div>

      {/* Bottom Title Section */}
      <div className="w-full pb-12 pt-4 z-10">
        <div className="container mx-auto px-4">
          {/* Mobile View */}
          <div className="md:hidden flex flex-col items-center space-y-2 mt-[60vh]">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide">CAMBRIAN</h1>
              <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide">OPEN</h1>
              <h1 className="text-[#FF8A00] text-4xl font-['BS'] tracking-wide">HOUSE</h1>
            </div>
            <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg inline-block text-sm font-medium mt-4">
              19th APR 2025 | 9:30 AM TO 5:00 PM
            </p>
            <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg inline-block text-sm font-medium mt-2">
              CIT KR PURAM, BENGALURU-560036
            </p>
            {/* "JOIN US FOR FREE" Button for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center w-full mt-6"
            >
              <button
                onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#99E265] text-black font-bebas-neue text-lg tracking-wider py-3 px-8 w-full max-w-xs rounded-full hover:bg-[#8bd456] transition-all duration-300"
              >
                JOIN US FOR FREE
              </button>
            </motion.div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block text-center px-4">
            <div className="hidden md:block lg:hidden">
              <h1 className="text-[#FF8A00] text-[5vw] font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="hidden lg:block xl:hidden">
              <h1 className="text-[#FF8A00] text-5xl font-['BS'] tracking-wide whitespace-nowrap leading-normal mx-auto max-w-[90vw] overflow-hidden">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <div className="hidden xl:block">
              <h1 className="text-[#FF8A00] text-6xl font-['BS'] tracking-wide whitespace-nowrap leading-normal">
                CAMBRIAN OPEN HOUSE
              </h1>
            </div>
            <p className="text-black bg-white/70 backdrop-blur-sm py-2 px-6 rounded-lg inline-block text-sm font-medium mt-4">
              APRIL 19, 2025 • 9:30 AM- 6:00 PM <br></br>
              CIT CAMPUS, BENGALURU
            </p>
            {/* "JOIN US FOR FREE" Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={() => document.getElementById("registration-section")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#99E265] text-black font-bebas-neue text-lg tracking-wider py-2 px-8 rounded-full hover:bg-[#8bd456] transition-all duration-300"
              >
                JOIN US FOR FREE
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;