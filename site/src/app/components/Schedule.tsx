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
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-100',
      borderColor: 'border-green-300'
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
      color: 'from-yellow-500 to-amber-400',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      time: '1:30 PM - 2:30 PM',
      title: 'LUNCH BREAK',
      location: 'College Lawn',
      activities: [
        { name: 'NETWORKING LUNCH', description: 'Connect with Students and Faculty' },
        { name: 'CULTURAL PERFORMANCES', description: 'Student Showcases' }
      ],
      color: 'from-purple-500 to-fuchsia-400',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      time: '2:30 PM - 4:00 PM',
      title: 'TECHNICAL SESSIONS',
      location: 'Seminar Hall',
      activities: [
        { name: 'WORKSHOPS', description: 'Interactive Technical Sessions' },
        { name: 'PANEL DISCUSSIONS', description: 'Industry Insights & Trends' }
      ],
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      time: '4:00 PM - 5:00 PM',
      title: 'CLOSING CEREMONY',
      location: 'Main Seminar Hall',
      activities: [
        { name: 'AWARDS & RECOGNITION', description: 'Celebrating Excellence' },
        { name: 'CLOSING REMARKS', description: 'Vote of Thanks' }
      ],
      color: 'from-rose-500 to-pink-400',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200'
    }
  ];

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
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200">
                  <svg
                    className="w-5 h-5 text-gray-600 mr-2"
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
                  <div key={idx} className="border-t border-gray-100 pt-4">
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