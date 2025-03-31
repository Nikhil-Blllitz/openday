'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'venue', 'register'];
      let currentSection = 'home';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    if (sectionId === 'register') {
      const element = document.getElementById('registration-section');
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } 
    else if (sectionId === 'blog') {
      router.push('/blog');
    } 
    else if (sectionId === 'about') {
      const element = document.getElementById('about');
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    else if (sectionId === 'schedule') {
      const element = document.getElementById('schedule');
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-4 backdrop-blur-md">
      {/* Main navbar container */}
      <div className="max-w-7xl mx-auto bg-[#E5F5DA] rounded-full py-2 px-4 flex justify-between items-center shadow-sm">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="https://engg.cambridge.edu.in/">
            <div className="flex items-center">
              <Image
                src="/cit_navlogo.png"
                alt="CIT Logo"
                width={130}
                height={50}
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-16 text-lg font-bold">
          {['home', 'venue', 'register'].map((section) => (
            <button
              key={section}
              onClick={() => handleNavigation(section)}
              className={`${
                activeSection === section ? 'text-black' : 'text-gray-700 hover:text-black'
              } transition-colors duration-200`}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Button - Visible only on mobile */}
        <button 
          className="md:hidden flex flex-col justify-center items-center space-y-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Centered with animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="absolute left-0 right-0 mx-auto mt-2 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#E5F5DA] rounded-xl shadow-lg py-4 max-w-xs mx-auto">
              <div className="flex flex-col items-center space-y-4">
                {['home', 'about', 'schedule', 'venue', 'register', 'blog'].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleNavigation(section)}
                    className={`${
                      activeSection === section ? 'bg-[#99E265] text-black' : 'text-gray-700'
                    } py-2 px-8 rounded-full text-base font-medium w-40 text-center transition-colors`}
                  >
                    {section.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;