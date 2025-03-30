'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
      color: 'from-[#67B044] to-[#9EE666]',
      bgColor: 'bg-[#9EE666]/10',
      borderColor: 'border-[#9EE666]/30'
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
      color: 'from-[#FFE600] to-[#FFE600]',
      bgColor: 'bg-[#FFE600]/10',
      borderColor: 'border-[#FFE600]/30'
    },
    {
      time: '1:30 PM - 2:30 PM',
      title: 'LUNCH BREAK',
      location: 'College Lawn',
      activities: [
        { name: 'NETWORKING LUNCH', description: 'Connect with Students and Faculty' },
        { name: 'CULTURAL PERFORMANCES', description: 'Student Showcases' }
      ],
      color: 'from-[#67B044] to-[#9EE666]',
      bgColor: 'bg-[#9EE666]/10',
      borderColor: 'border-[#9EE666]/30'
    },
    {
      time: '2:30 PM - 4:00 PM',
      title: 'TECHNICAL SESSIONS',
      location: 'Seminar Hall',
      activities: [
        { name: 'WORKSHOPS', description: 'Interactive Technical Sessions' },
        { name: 'PANEL DISCUSSIONS', description: 'Industry Insights & Trends' }
      ],
      color: 'from-[#FFE600] to-[#FFE600]',
      bgColor: 'bg-[#FFE600]/10',
      borderColor: 'border-[#FFE600]/30'
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'CLOSING CEREMONY',
      location: 'Main Seminar Hall',
      activities: [
        { name: 'AWARDS & RECOGNITION', description: 'Celebrating Excellence' },
        { name: 'CLOSING REMARKS', description: 'Vote of Thanks' }
      ],
      color: 'from-[#67B044] to-[#9EE666]',
      bgColor: 'bg-[#9EE666]/10',
      borderColor: 'border-[#9EE666]/30'
    }
  ];

  return (
    <div className="relative min-h-screen py-20">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#141414] mb-6">
            Event Schedule
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            A day filled with innovation, learning, and networking opportunities
          </p>
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scheduleBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {/* Time */}
              <div className={`text-xl font-bold bg-gradient-to-r ${block.color} bg-clip-text text-transparent mb-4`}>
                {block.time}
              </div>

              {/* Title & Location */}
              <div className="space-y-3 mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {block.title}
                </h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#9EE666]/20 border border-[#9EE666]/30">
                  <svg
                    className="w-5 h-5 text-[#67B044] mr-2"
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
                  <span className="text-lg font-semibold text-gray-700">
                    {block.location}
                  </span>
                </div>
              </div>

              {/* Activities */}
              <div className="space-y-4">
                {block.activities.map((activity, idx) => (
                  <div key={idx} className="border-t border-[#9EE666]/20 pt-4">
                    <div className="text-xl font-bold text-gray-800 mb-1">
                      {activity.name}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
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