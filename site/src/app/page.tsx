// src/app/page.tsx
'use client';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
//import Events from './components/Events';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
import Venue from './components/Venue';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
//import MetaTagRotator from './components/MetaTagRotator';
// import { motion } from 'framer-motion';
import PartnersMarquee from './components/PartnersMarquee';

export default function MainPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Animated Button
      <div className="bottom-4 z-50 fixed right-4">
        <motion.button
          className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join Us for Free
        </motion.button>
      </div> */}


      <section id="home" className="min-h-screen">
        <Hero />
      </section>
      <section id="partners" className="min-h-screen">
        <PartnersMarquee />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      {/* <section id="events" className="min-h-screen">
        <Events />
      </section> */}
      <section id="schedule" className="min-h-screen">
        <Schedule />
      </section>
      {/* <section id="meta" className="min-h-auto">
        <MetaTagRotator />
      </section> */}
      <section id="venue" className="min-h-screen">
        <Venue />
      </section>
      <section id="faq" className="min-h-screen">
        <FAQ />
      </section>
      <section id="" className="min-h-fit">
        <Footer />
      </section>
    </div>
  );
}

