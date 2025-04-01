'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  //const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about'];  // Only track home and about since blog and sitemap are external
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

  const handleNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);

    if (sectionId === 'blog') {
      window.open('https://medium.com/@openhouse_38059', '_blank');
      return;
    }

    if (sectionId === 'sitemap') {
      window.open('/map.jpg', '_blank');
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId === 'register' ? 'registration-section' : sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = ['home', 'blog', 'sitemap', 'register'];

  return (
    <>
      <div className="w-[80vw] md:w-[60vw] fixed top-4 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-lg rounded-full shadow-md">
        {/* Main Navbar Container */}
        <div className="py-2 px-4 md:px-8 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('home')}
              className="cursor-pointer"
            >
              <Image
                src="/cit_navlogo.png"
                alt="CIT Logo"
                width={110}
                height={45}
                className="object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-base lg:text-lg font-extrabold tracking-wide text-black">
            {navigationItems.map((section) => (
              <button
                key={section}
                onClick={() => handleNavigation(section)}
                className={`uppercase ${activeSection === (section === 'register' ? 'about' : section)
                  ? 'text-black'
                  : 'hover:text-gray-600'
                  } transition-colors duration-200`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <div
              className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute left-0 right-0 mx-auto mt-2 px-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="backdrop-blur-lg bg-white/80 rounded-lg shadow-lg py-4 max-w-xs mx-auto">
                <div className="flex flex-col items-center space-y-4">
                  {navigationItems.map((section) => (
                    <button
                      key={section}
                      onClick={() => handleNavigation(section)}
                      className="text-black text-lg font-bold uppercase py-2 px-8 rounded-full w-40 text-center transition-colors hover:bg-gray-200"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
