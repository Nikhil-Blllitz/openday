'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBox, FiTarget, FiBriefcase, FiCpu, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    otherGender: "",
    phoneNumber: "",
    state: "",
    city: "",
    country: "",
    occupation: "",
    otherOccupation: "",
    referredBy: "",
    agreeToTerms: false,
    interest: [] as string[], // Ensure this is an empty array initially
  });

  const [status, setStatus] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const interests = [
    "AI & Machine Learning",
    "Robotics & Automation",
    "Web & Mobile Development",
    "IoT & Hardware",
    "Cybersecurity",
  ];

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
        body: JSON.stringify({
          ...formData,
          interest: formData.interest.join(", "),
        }),
      });

      if (res.ok) {
        setStatus("Registration successful!");
        setFormData({
          name: '',
          email: '',
          age: '',
          gender: 'Select you gender',
          otherGender: '',
          phoneNumber: '',
          state: '',
          city: '',
          country: '',
          occupation: '',
          otherOccupation: '',
          referredBy: '',
          agreeToTerms: false,
          interest: [],
        });
      } else {
        setStatus("Failed to register.");
      }
    } catch (error) {
      setStatus("An error occurred.");
      console.error(error);
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    if (name === "interest") {
      setFormData((prev) => ({
        ...prev,
        interest: checked
          ? [...prev.interest, value]
          : prev.interest.filter((item) => item !== value),
      }));
    } else if (name === "agreeToTerms") {
      setFormData((prev) => ({
        ...prev,
        agreeToTerms: checked,
      }));
    }
  };

  return (
    // Removed pt-40 and mt-32, using smaller values to reduce the gap
    <div className="relative min-h-screen p-4 sm:p-[2em] pt-10 sm:pt-16" id="about">
      {/* Main Content - No background styling as we're using the global background */}
      <div className="relative z-10 mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-20 mt-10 sm:mt-16"
        >
          <h1 className="max-sm:text-[7vw] tracking-tight text-4xl md:text-5xl font-bold text-center mb-4 font-['BS'] text-[#141414]">
            Innovation Showcase
          </h1>
          <p className="font-['OSK'] text-center text-gray-700 max-w-3xl mx-auto mb-[2em] tracking-wider md:tracking-widest text-lg md:text-xl font-semibold leading-relaxed md:leading-loose">
            Discover a world of innovation at CIT&apos;s largest tech exhibition featuring 100+ stalls of groundbreaking ideas and solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-[#9EE666]/30 hover:border-[#9EE666]/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="bg-[#67B044] w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-['OSK'] tracking-wide md:tracking-wider text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="font-['OSK'] tracking-wider md:tracking-widest text-gray-600 text-lg font-semibold leading-relaxed md:leading-loose">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-[#9EE666]/30 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#67B044] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">100+</div>
              <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Innovation Stalls</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFE600] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">50+</div>
              <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Live Demos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#67B044] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">20+</div>
              <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Tech Workshops</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#141414] mb-2 sm:mb-3 font-['OSK'] tracking-wide md:tracking-wider">2000+</div>
              <div className="font-['OSK'] tracking-wider md:tracking-widest text-gray-700 text-xl sm:text-2xl font-semibold">Expected Visitors</div>
            </div>
          </div>
        </motion.div>

        {/* Registration Image */}
        <div className='mt-6 sm:mt-[2em]'>
          <Image
            src="/about/amain.svg"
            alt="Innovation Stalls"
            width={600}
            height={400}
            className="w-full"
          />
        </div>

        {/* Registration Form */}
        <div className='w-full flex flex-col md:flex-row px-0 sm:px-[1em] gap-4 sm:gap-[2em]'>
          <div className='mt-[2em] hidden md:flex justify-center md:w-1/2'>
            <Image
              src="/about/aposters.svg"
              alt="Innovation Stalls"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            id='registration-section'
            className="mt-4 sm:mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-[#9EE666]/30 w-full md:w-1/2 mx-auto shadow-sm"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6 font-['OSK'] tracking-wider md:tracking-widest text-center">
              Register for Open House
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Form fields remain the same but with responsive padding */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="font-['OSK'] w-full p-2 sm:p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
              />
              {/* Other form fields follow the same pattern */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
              />
              <input
                type='text'
                name='age'
                value={formData.age}
                onChange={handleChange}
                placeholder='Age*'
                required
                className='font-["OSK"] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider'
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider"
              >
                <option hidden>Select your Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {formData.gender === 'Other' && (
                <input
                  type="text"
                  name="otherGender"
                  value={formData.otherGender}
                  onChange={handleChange}
                  placeholder="Please specify"
                  className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider"
                />
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
                />
              </div>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Select State"
                className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
              />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                required
                className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
              />
              <div className="relative w-full" ref={dropdownRef}>
                {/* Dropdown Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="font-['OSK'] w-full p-3 border flex flex-row justify-between border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 cursor-pointer tracking-wider"
                >
                  <span>
                    {formData.interest.length > 0
                      ? formData.interest.join(", ")
                      : "Select Your Interests"}
                  </span>
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute w-full mt-1 bg-white border border-[#9EE666]/40 rounded-lg shadow-lg z-10">
                    <div className="p-2 max-h-48 overflow-y-auto">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center gap-2 p-2 rounded hover:bg-[#9EE666]/10 cursor-pointer">
                          <input
                            type="checkbox"
                            name="interest"
                            value={interest}
                            checked={formData.interest.includes(interest)}
                            onChange={handleCheckboxChange}
                            className="w-4 h-4 text-[#67B044] focus:ring focus:ring-[#67B044]/30"
                          />
                          <span className="text-gray-700 font-['OSK'] tracking-wider">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <select
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className='font-["OSK"] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider pr-10'
                >
                  <option value="" disabled>Your Occupation</option>
                  <option>Student</option>
                  <option>Faculty/Professor</option>
                  <option>Researcher</option>
                  <option>Industry Professional</option>
                  <option>Startup Founder/Entrepreneur</option>
                  <option>Government Official</option>
                  <option>Investor/Venture Capitalist</option>
                  <option>Parent/Guardian</option>
                  <option>School Representative {('Principal/Teacher')}</option>
                  <option>Media/Journalist</option>
                  <option>Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiChevronDown className="w-5 h-5 text-gray-500" />
                </div>
              </div>
              {/* Show Text Input if "Other" is selected */}
              {formData.occupation === 'Other' && (
                <input
                  type="text"
                  name="otherOccupation"
                  value={formData.otherOccupation}
                  onChange={handleChange}
                  placeholder="Specify your occupation"
                  className="font-['OSK'] w-full p-3 border border-[#9EE666]/40 rounded-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 appearance-none cursor-pointer tracking-wider"
                />
              )}
              <div className="relative">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-['OSK'] tracking-wider">
                  Referred By (Cambridge Institute Student/Faculty) ?
                </label>
                <div className="flex">
                  <input
                    type="text"
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleChange}
                    placeholder="Mail id ( Ex: abc.22cse )"
                    className="font-['OSK'] flex-grow p-3 border border-[#9EE666]/40 rounded-l-lg bg-white/90 backdrop-blur-sm focus:ring-2 focus:ring-[#67B044] focus:border-transparent text-gray-700 placeholder-gray-400 tracking-wider"
                  />
                  <span className="font-['OSK'] flex items-center justify-center p-3 bg-gray-200 border border-[#9EE666]/40 rounded-r-lg text-gray-700 tracking-wider">
                    @cambridge.edu.in
                  </span>
                </div>
                <p className="text-xs italic text-gray-600 mt-1 font-['OSK'] tracking-wide">Optional: Enter the mail id of a Cambridge Institute member who referred you.</p>
              </div>
              {/* Terms and Conditions for Referrals */}
              <div className="flex items-start gap-2 mt-4">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1 w-4 h-4 text-[#67B044] focus:ring focus:ring-[#67B044]/30"
                />
                <div>
                  <label className="block text-gray-700 font-['OSK'] tracking-wider text-sm">
                    I agree to the terms and conditions*
                  </label>
                  <p className="text-xs text-gray-600 font-['OSK'] tracking-wide">
                    If I've provided a referral, I confirm that the person is a current student or faculty member at Cambridge Institute of Technology. I understand that false referrals will disqualify both parties from any benefits or surprises. Valid referrals may receive special recognition and prizes.
                  </p>
                </div>
              </div>
              <motion.button
                type="submit"
                className="font-['OSK'] w-full py-4 rounded-lg bg-[#67B044] text-white font-bold text-xl sm:text-2xl shadow-md transition-all hover:shadow-lg hover:bg-[#67B044]/90 tracking-wider md:tracking-widest"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                REGISTER NOW
              </motion.button>
            </form>
            {status && <p className="mt-4 text-center text-gray-600 font-['OSK'] tracking-wider">{status}</p>}
          </motion.div>
        </div>
      </div>
    </div >
  );
}