'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#1A1A1A] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#9EE666] opacity-20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#7AB54B] opacity-20 blur-[100px] animate-pulse" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center px-4"
                >
                    <h1 className="text-6xl font-bold text-white mb-8">
                        Blog Coming Soon!
                    </h1>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                       We are working on something exciting! Our blog will be available soon with amazing content about Cambridge Open House.
                    </p>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-3 bg-gradient-to-r from-[#9EE666] to-[#7AB54B] text-black font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        Return Home
                    </button>
                </motion.div>
            </div>
        </div>
    );
}