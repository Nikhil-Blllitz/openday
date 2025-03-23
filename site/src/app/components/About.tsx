'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiTarget, FiBriefcase, FiCpu } from 'react-icons/fi';

export default function About() {
  const [formData, setFormData] = useState({
    registrationType: 'Individual Registration',
    name: '',
    email: '',
    phoneNumber: '',
    state: '',
    city: '',
    interest: 'Select Your Interest',
    accompaniedBy: 'Accompanied By (Including you)',
  });
  const [status, setStatus] = useState('');

  const features = [
    {
      icon: FiBox,
      title: '150+ Innovation Stalls',
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
    setStatus('Submitting...');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Registration successful!');
        setFormData({
          registrationType: 'Individual Registration',
          name: '',
          email: '',
          phoneNumber: '',
          state: '',
          city: '',
          interest: 'Select Your Interest',
          accompaniedBy: 'Accompanied By (Including you)',
        });
      } else {
        setStatus('Failed to register.');
      }
    } catch (error) {
      setStatus('An error occurred.');
      console.error(error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-200/30 to-yellow-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-100/30 to-orange-100/30 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-amber-900 to-yellow-800 mb-6">
            Innovation Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto">
            Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 150+ stalls of groundbreaking ideas and solutions
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
              className="bg-white/60 backdrop-blur-lg rounded-xl p-6 border border-amber-100 hover:bg-white/70 transition-all duration-300 shadow-lg"
            >
              <div className="bg-gradient-to-br from-amber-500 to-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-lg rounded-xl p-8 border border-amber-100 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-2">150+</div>
              <div className="text-gray-700">Innovation Stalls</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-2">50+</div>
              <div className="text-gray-700">Live Demos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-2">20+</div>
              <div className="text-gray-700">Tech Workshops</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-2">1000+</div>
              <div className="text-gray-700">Expected Visitors</div>
            </div>
          </div>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/60 backdrop-blur-lg rounded-xl p-8 border border-amber-100 max-w-2xl mx-auto shadow-lg"
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-6 text-center">
            Register for Open Day
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              name="registrationType"
              value={formData.registrationType}
              onChange={handleChange}
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 appearance-none cursor-pointer"
            >
              <option>Individual Registration</option>
              <option>Group Registration</option>
            </select>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              required
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              required
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 placeholder-gray-500"
            />
            <div className="flex gap-2">
              <select className="w-1/3 p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 appearance-none cursor-pointer">
                <option>+91</option>
              </select>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              className="w-2/3 p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 placeholder-gray-500"
              />
            </div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Select State"
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 placeholder-gray-500"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City*"
              required
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 placeholder-gray-500"
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 appearance-none cursor-pointer"
            >
              <option>Select Your Interest</option>
              <option>AI & Machine Learning</option>
              <option>Robotics & Automation</option>
              <option>Web & Mobile Development</option>
              <option>IoT & Hardware</option>
              <option>Cybersecurity</option>
            </select>
            <select
              name="accompaniedBy"
              value={formData.accompaniedBy}
              onChange={handleChange}
              className="w-full p-3 border border-amber-200 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-amber-300 focus:border-transparent text-gray-800 appearance-none cursor-pointer"
            >
              <option>Accompanied By (Including you)</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
            <motion.button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold text-lg shadow-lg transition-all hover:from-amber-600 hover:to-yellow-600"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              REGISTER NOW
            </motion.button>
          </form>
          {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </motion.div>
      </div>
    </div>
  );
  
}