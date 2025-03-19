'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Schedule() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const scheduleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    })
  };

  const scheduleItems = [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Registration & Breakfast",
      description: "Check in and enjoy a complimentary breakfast while networking with fellow attendees.",
      icon: "🎫",
      color: "from-blue-500 to-cyan-400"
    },
    {
      time: "9:00 AM - 10:00 AM",
      title: "Opening Keynote",
      description: "Join our visionary keynote speaker as they explore the future of technology and innovation.",
      icon: "🎤",
      color: "from-purple-500 to-indigo-500"
    },
    {
      time: "10:15 AM - 11:45 AM",
      title: "Workshop Sessions",
      description: "Choose from multiple hands-on workshops covering AI, blockchain, cloud computing, and more.",
      icon: "💻",
      color: "from-pink-500 to-rose-500"
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Networking Lunch",
      description: "Enjoy a catered lunch while connecting with industry professionals and fellow tech enthusiasts.",
      icon: "🍽️",
      color: "from-amber-500 to-orange-500"
    },
    {
      time: "1:15 PM - 2:45 PM",
      title: "Panel Discussion",
      description: "Industry leaders discuss emerging technologies and their impact on the future of work.",
      icon: "👥",
      color: "from-emerald-500 to-teal-500"
    },
    {
      time: "3:00 PM - 4:30 PM",
      title: "Hackathon Showcase",
      description: "Teams present their innovative solutions developed during our 24-hour hackathon.",
      icon: "🚀",
      color: "from-red-500 to-pink-500"
    },
    {
      time: "4:45 PM - 5:30 PM",
      title: "Closing Remarks & Awards",
      description: "Celebrate the day's achievements and recognize outstanding contributions.",
      icon: "🏆",
      color: "from-yellow-500 to-amber-500"
    },
    {
      time: "5:30 PM - 7:00 PM",
      title: "Networking Reception",
      description: "Continue conversations over drinks and appetizers at our closing reception.",
      icon: "🥂",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-gradient-to-b from-black via-blue-950/30 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
        />
      </div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Event Schedule
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A full day of inspiration, learning, and networking
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full hidden md:block"></div>
          
          {/* Schedule items */}
          <div className="space-y-12">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={controls}
                variants={scheduleVariants}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Time bubble */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-r ${item.color} px-6 py-3 rounded-full text-white font-bold shadow-lg`}
                  >
                    {item.time}
                  </motion.div>
                </div>
                
                {/* Content card */}
                <div className="md:w-1/2">
                  <motion.div 
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-[42px] w-6 h-6 rounded-full bg-white shadow-lg hidden md:flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className={`mr-4 bg-gradient-to-br ${item.color} p-3 rounded-lg text-white text-2xl flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Download button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-cyan-600 hover:to-blue-700 group"
          >
            <svg className="w-6 h-6 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Schedule
          </a>
        </motion.div>
      </div>
      
      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:flex-row-reverse .md\\:justify-end {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}