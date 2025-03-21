'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isOpen) {
        toggleMenu();
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Logos and Brand */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-6">
              {/* CIT Logo */}
              <div className="relative w-[60px] h-[60px] group">
                <Image
                  src="/citlogo.png"
                  alt="CIT Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Vertical Divider */}
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
              {/* INTUIT Header */}
              <div className="flex flex-col">
                <span className="text-2xl font-black text-black tracking-tight">CIT INTUIT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks scrollToSection={scrollToSection} />
            <motion.button
              onClick={() => scrollToSection('register')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              Register Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <MobileNavLinks scrollToSection={scrollToSection} />
              <div className="pt-4">
                <motion.button
                  onClick={() => scrollToSection('register')}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 text-white font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                >
                  Register Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLinks = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'venue', label: 'Venue' },
  ];

  return (
    <div className="flex items-center space-x-5">
      {links.map((link) => (
        <NavLink key={link.id} onClick={() => scrollToSection(link.id)}>
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

const MobileNavLinks = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'venue', label: 'Venue' },
  ];

  return (
    <div className="space-y-2">
      {links.map((link, index) => (
        <motion.div
          key={link.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <MobileNavLink onClick={() => scrollToSection(link.id)}>
            {link.label}
          </MobileNavLink>
        </motion.div>
      ))}
    </div>
  );
};

function NavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="group relative">
      <span className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
    </button>
  );
}

function MobileNavLink({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left py-3 px-4 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-300 rounded-lg hover:bg-gray-50"
    >
      {children}
    </button>
  );
}

export default Navbar;
