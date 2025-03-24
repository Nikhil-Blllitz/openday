'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiTarget, FiBriefcase, FiCpu } from 'react-icons/fi';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    phoneNumber: '',
    state: '',
    city: '',
    country: '',
    currentOccupation: '',
    occupation: 'Your Occupation',
    otherOccupation: '',
    interest: 'Select Your Interest',
  });
  const [status, setStatus] = useState('');

  const features = [
    {
      icon: FiBox,
      title: '100+ Innovation Stalls',
      description: 'Explore a vast array of cutting-edge projects, from AI and robotics to sustainable technology solutions.',
    },
    {
      icon: FiCpu,
      title: 'Tech Innovation Hub',
      description: 'Witness groundbreaking innovations from our brightest minds across multiple engineering disciplines.',
    },
    {
      icon: FiBriefcase,
      title: 'Industry Connect',
      description: 'Interact with industry leaders and explore potential collaboration opportunities.',
    },
    {
      icon: FiTarget,
      title: 'Future Tech',
      description: "Experience tomorrow's technology today through interactive demonstrations and workshops.",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
  
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setStatus("Registration successful!");
        setFormData({
          name: '',
          email: '',
          age: '',
          gender: 'Select you gender',
          phoneNumber: '',
          state: '',
          city: '',
          country: '',
          currentOccupation: '',
          occupation: 'Your Occupation',
          otherOccupation: '',
          interest: 'Select Your Interest',
        });
      } else {
        setStatus("Failed to register.");
      }
    } catch (error) {
      setStatus("An error occurred.");
      console.error(error);
    }
  };
  

  // ... existing code ...

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

      {/* Diagonal Color Bands - Inspired by the Poster */}
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
      <div className="relative z-10 max-w-7xl mt-auto mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500 mb-6">
            Innovation Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls of groundbreaking ideas and solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className={`
              ${index % 4 === 0 ? 'bg-green-500' : ''}
              ${index % 4 === 1 ? 'bg-yellow-400' : ''}
              ${index % 4 === 2 ? 'bg-purple-500' : ''}
              ${index % 4 === 3 ? 'bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500' : ''}
              w-12 h-12 rounded-lg flex items-center justify-center mb-4
            `}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">100+</div>
              <div className="text-gray-600">Innovation Stalls</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-600">Live Demos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">20+</div>
              <div className="text-gray-600">Tech Workshops</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500 mb-2">2000+</div>
              <div className="text-gray-600">Expected Visitors</div>
            </div>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id='registration-section'
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-gray-100 max-w-2xl mx-auto shadow-sm"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-purple-500 mb-6 text-center">
            Register for Open Day
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer"
            >
              <option>Individual Registration</option>
              <option>Institutional Registration</option>
            </select> */}
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <input  
              type='text'
              name='age'
              value={formData.age}
              onChange={handleChange}
              placeholder='Age'
              required
              className='w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer'
              />
              <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer"
            >
              <option hidden>Select your Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select>
            <div className="flex gap-2">
              {/* <label className="w-1/3 p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 appearance-none">
                +91
              </label> */}
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Select State"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <input
              type="text"
              name="currentOccupation"
              value={formData.currentOccupation}
              onChange={handleChange}
              placeholder="Current education/ occupation (for college or workplace)"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer"
            >
              <option hidden>Select Your Interest</option>
              <option>AI & Machine Learning</option>
              <option>Robotics & Automation</option>
              <option>Web & Mobile Development</option>
              <option>IoT & Hardware</option>
              <option>Cybersecurity</option>
            </select>
            <select
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className='w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer ' 
              >
                <option hidden>Your Occupation</option>
                <option>Student</option>
                <option>Faculty/Professor</option>
                <option>Researcher</option>
                <option>Industry Professional</option>
                <option>Startup Founder/Entrepreneur</option>
                <option>Government Official</option>
                <option>Investor/Venture Capitalist</option>
                <option>Parent/Guardian</option>
                <option>School Representative {`(Principal/Teacher)`}</option>
                <option>Media/Journalist</option>
                <option>Other</option>
              </select>
              {/* Show Text Input if "Other" is selected */}
              {formData.occupation === 'Other' && (
              <input type="text" name="otherOccupation" value={formData.otherOccupation} onChange={handleChange} placeholder="Specify your occupation" className="w-full p-3 border border-gray-200 rounded-lg" />
            )}
            {/* <select
              name="accompaniedBy"
              value={formData.accompaniedBy}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer"
            >
              <option>Accompanied By (Including you)</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select> */}
            {/* <input 
              name="accompaniedBy"
              value={formData.accompaniedBy}
              onChange={handleChange}
              type="number"
              placeholder="Accompanied By (Including you) Ex: 3"
              className="w-full p-3 border border-gray-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent text-gray-700 appearance-none cursor-pointer"
              /> */}
            <motion.button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg shadow-md transition-all hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              REGISTER NOW
            </motion.button>
          </form>
          {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
        </motion.div>
      </div>
    </div>
  );
  // ... existing code ...
}