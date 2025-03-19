'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    // Interactive state for rotating headings
    const [activeIndex, setActiveIndex] = useState(0);
    
    // Auto-rotate headings
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % headings.length);
        }, 4000);
        
        return () => clearInterval(interval);
    }, []);
    
    // Rotating headings for Intuit Open Day
    const headings = [
        {
            title: "Intuit Open Day",
            subtitle: "Discover Innovation",
            color: "from-purple-600 to-orange-500"
        },
        {
            title: "Join Our Team",
            subtitle: "Shape the Future",
            color: "from-orange-500 to-purple-600"
        },
        {
            title: "Tech Showcase",
            subtitle: "Experience Excellence",
            color: "from-purple-500 to-orange-400"
        }
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Animated particles background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black opacity-90" />
                
                {/* Particles */}
                {Array.from({ length: 50 }).map((_, i) => {
                    const size = Math.random() * 4 + 2;
                    const initialX = Math.random() * 100;
                    const initialY = Math.random() * 100;
                    const duration = Math.random() * 20 + 10;
                    const delay = Math.random() * 5;
                    
                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                width: size,
                                height: size,
                                left: `${initialX}%`,
                                top: `${initialY}%`,
                                background: i % 2 === 0 ? 
                                    'linear-gradient(to right, #9333ea, #f97316)' : 
                                    'linear-gradient(to right, #f97316, #9333ea)',
                                boxShadow: `0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.3)`
                            }}
                            animate={{
                                y: [0, -100, 0],
                                x: [0, Math.random() * 50 - 25, 0],
                                opacity: [0, 0.8, 0]
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                delay,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}
            </div>
            
            {/* Main content */}
            <div className="relative z-10 h-full w-full flex flex-col">
                {/* Navigation */}
                <header className="w-full px-8 py-6 flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
                            INTUIT
                        </span>
                    </div>
                    
                    <nav className="hidden md:flex space-x-8">
                        {["Home", "Schedule", "Speakers", "Register", "Contact"].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                            >
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white hover:text-orange-400 transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                    
                    <motion.button
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Register Now
                    </motion.button>
                </header>
                
                {/* Hero content */}
                <div className="flex-1 flex flex-col md:flex-row items-center px-8 md:px-16 py-12">
                    {/* Left column - Animated headings */}
                    <div className="w-full md:w-1/2 mb-12 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                                May 15-16, 2024 • Virtual & In-Person
                            </span>
                        </motion.div>
                        
                        <div className="relative h-32 mb-6 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={activeIndex}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="text-5xl md:text-6xl font-bold tracking-tight absolute"
                                >
                                    <span className={`bg-gradient-to-r ${headings[activeIndex].color} text-transparent bg-clip-text`}>
                                        {headings[activeIndex].title}
                                    </span>
                                </motion.h1>
                            </AnimatePresence>
                        </div>
                        
                        <div className="relative h-16 mb-8 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
                                    className="text-2xl text-white/90 absolute"
                                >
                                    {headings[activeIndex].subtitle}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        
                        <p className="text-white/70 text-lg mb-8 max-w-lg">
                            Join us for an exclusive look inside Intuit's innovative culture, 
                            cutting-edge technologies, and career opportunities. Connect with 
                            our team and discover how we power prosperity around the world.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px -10px rgba(147, 51, 234, 0.5)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Register for Free
                            </motion.button>
                            
                            <motion.button
                                className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Schedule
                            </motion.button>
                        </div>
                        
                        <div className="mt-12 flex items-center space-x-4">
                            <div className="flex space-x-2">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className={`w-3 h-3 rounded-full ${activeIndex === i ? 'bg-orange-500' : 'bg-white/30'}`}
                                        whileHover={{ scale: 1.5 }}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right column - Visual content */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
                        <motion.div
                            className="absolute inset-0 rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                                {/* Animated circles */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/10 opacity-30" />
                                
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-purple-500/30"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-orange-500/30"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                                
                                {/* Intuit logo in center */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500"
                                    >
                                        INTUIT
                                    </motion.div>
                                </div>
                                
                                {/* Floating features */}
                                {[
                                    { text: "Innovation", orbit: 320, speed: 25, color: "purple" },
                                    { text: "Technology", orbit: 240, speed: 30, color: "orange" },
                                    { text: "Design", orbit: 400, speed: 20, color: "purple" },
                                    { text: "Community", orbit: 480, speed: 35, color: "orange" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-full h-full"
                                        style={{
                                            width: item.orbit,
                                            height: item.orbit,
                                            marginLeft: -item.orbit/2,
                                            marginTop: -item.orbit/2,
                                            border: `1px dashed rgba(${item.color === 'purple' ? '147, 51, 234' : '249, 115, 22'}, 0.3)`,
                                            borderRadius: '50%',
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ 
                                            duration: item.speed, 
                                            repeat: Infinity, 
                                            ease: "linear"
                                        }}
                                    >
                                        <motion.div
                                            className={`absolute top-0 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-${item.color}-500/30 text-white text-sm font-medium`}
                                            animate={{ rotate: -360 }}
                                            transition={{ 
                                                duration: item.speed, 
                                                repeat: Infinity, 
                                                ease: "linear"
                                            }}
                                        >
                                            {item.text}
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/* Glowing effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 left-0 right-0 flex justify-center"
                >
                    <motion.div
                        className="w-8 h-12 rounded-full border-2 border-white/30 flex items-center justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1 h-3 bg-orange-500 rounded-full"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}