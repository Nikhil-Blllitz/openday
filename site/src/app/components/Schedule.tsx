'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Schedule() {
  const scheduleBlocks = [
    {
      time: '10:00 AM - 11:30 AM',
      title: 'OPENING CEREMONY',
      location: 'Main Seminar Hall',
      activities: [
        { name: 'WELCOME ADDRESS', description: 'Introduction to CIT Open House 2025' },
        { name: 'KEYNOTE SESSION', description: 'Future of Technology & Innovation' }
      ],
      color: 'from-amber-400 to-yellow-400'
    },
    {
      time: '11:30 AM - 1:30 PM',
      title: 'INNOVATION SHOWCASE',
      location: 'College Lawn',
      activities: [
        { name: 'TECH EXPO', description: 'Student Projects & Innovations' },
        { name: 'INTERACTIVE DEMOS', description: 'Hands-on Technology Experience' },
        { name: 'CLUB ACTIVITIES', description: 'Student Club Demonstrations' }
      ],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      time: '1:30 PM - 2:30 PM',
      title: 'LUNCH BREAK',
      location: 'College Lawn',
      activities: [
        { name: 'NETWORKING LUNCH', description: 'Connect with Students and Faculty' },
        { name: 'CULTURAL PERFORMANCES', description: 'Student Showcases' }
      ],
      color: 'from-amber-400 to-yellow-400'
    },
    {
      time: '2:30 PM - 4:00 PM',
      title: 'TECHNICAL SESSIONS',
      location: 'Seminar Hall',
      activities: [
        { name: 'WORKSHOPS', description: 'Interactive Technical Sessions' },
        { name: 'PANEL DISCUSSIONS', description: 'Industry Insights & Trends' }
      ],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'CLOSING CEREMONY',
      location: 'Main Seminar Hall',
      activities: [
        { name: 'AWARDS & RECOGNITION', description: 'Celebrating Excellence' },
        { name: 'CLOSING REMARKS', description: 'Vote of Thanks' }
      ],
      color: 'from-amber-400 to-yellow-400'
    }
  ];

  return (
    <div className="min-h-screen bg-[#67B044] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#67B044]/90 to-[#67B044]/70 z-0" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-yellow-300 opacity-20 blur-2xl" />
        <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-amber-400 opacity-20 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`${orbitron.className} inline-block text-5xl font-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-4 tracking-wider`}>
            EVENT SCHEDULE
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-yellow-200 to-amber-500 mx-auto rounded-full" />
        </motion.div>

        {/* Schedule Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scheduleBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-amber-400/50 transition-all duration-300"
            >
              {/* Time */}
              <div className="text-xl font-bold text-amber-400 mb-4">
                {block.time}
              </div>

              {/* Title & Location */}
              <div className="space-y-3 mb-6">
                <h3 className="text-3xl font-black text-white">
                  {block.title}
                </h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 border border-amber-400/30">
                  <svg
                    className="w-5 h-5 text-amber-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-lg font-semibold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    {block.location}
                  </span>
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-4">
                {block.activities.map((activity, idx) => (
                  <div key={idx} className="border-t border-white/10 pt-4">
                    <div className="text-xl font-bold text-white mb-1">
                      {activity.name}
                    </div>
                    <div className="text-sm font-medium text-white/70">
                      {activity.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
