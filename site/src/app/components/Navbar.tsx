'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'schedule', 'venue'];
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
    if (sectionId === 'blog') {
      router.push('/blog'); // Redirects to the Blog page
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-0 w-full max-w-screen z-50 bg-transparent px-5 md:px-10 py-4 backdrop-blur-2xl">
      {/* Logo and Navbar Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Link href="https://engg.cambridge.edu.in/">
            <Image
              src="/cit_navlogo.png"
              alt="CIT Logo"
              width={200}
              height={100}
              className="object-contain transition-transform duration-300 hover:scale-110 active:scale-95"
            />
          </Link>
        </div>

        {/* Navbar Section */}
        <nav className="mt-4 md:mt-0 flex justify-center md:justify-end">
          <div
            className="rounded-full shadow-lg backdrop-blur-lg px-4 py-2"
            style={{ background: 'linear-gradient(90deg, #9EE666 0%, #7AB54B 100%)' }}
          >
            <div className="flex w-full flex-row md:flex-row items-center">
              {['home', 'about', 'schedule', 'venue', 'blog'].map((section) => (
                <div key={section} className={activeSection === section ? 'bg-black text-white rounded-full' : ''}>
                  <button
                    onClick={() => handleNavigation(section)}
                    className="px-2 md:px-6 py-1 font-semibold hover:bg-black/10 flex justify-between rounded-full transition-colors"
                  >
                    {section.toUpperCase()}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;