import React from 'react';
import { motion } from 'framer-motion';
//import Image from 'next/image';

const SurpriseGuest = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Title Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-['Audiowide'] font-bold bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                            GUESS WHO?
                        </h2>
                        <p className="text-xl md:text-2xl font-['Rajdhani'] font-semibold text-gray-700">
                            A Special Surprise Guest Awaits You!
                        </p>
                    </motion.div>

                    {/* Mystery Guest Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-green-100 to-yellow-50 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Question Mark Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-6xl md:text-7xl text-white font-['Audiowide']">?</span>
                                </div>
                            </div>

                            {/* Repeating Text Pattern */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                    <span className="text-9xl font-['Audiowide'] transform -rotate-45">
                                        GUESS WHO
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Show Details */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-center mt-8"
                        >
                            {/* Time and Location Badge */}
                            <div className="inline-flex items-center justify-center space-x-4 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3"
                                >
                                    <p className="font-['Rajdhani'] font-bold text-lg text-green-700">
                                        4:30 PM - 5:00 PM
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-3"
                                >
                                    <p className="font-['Rajdhani'] font-bold text-lg text-yellow-700">
                                        Main Auditorium
                                    </p>
                                </motion.div>
                            </div>

                            <p className="text-xl md:text-2xl font-['Rajdhani'] font-bold text-gray-800 mb-4">
                                A Nationally Renowned Stand-up Comedian
                            </p>
                            <p className="text-lg md:text-xl font-['Rajdhani'] text-gray-600 max-w-xl mx-auto">
                                Get ready for an evening filled with laughter and entertainment!
                                Our mystery guest will leave you in splits with their witty humor and amazing stage presence.
                            </p>
                        </motion.div>

                        {/* Coming Soon Badge */}
                        <div className="absolute -top-4 -right-4 md:-right-8">
                            <motion.div
                                initial={{ rotate: -10, scale: 0.9 }}
                                animate={{ rotate: 10, scale: 1.1 }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className="bg-yellow-400 text-black font-['Audiowide'] text-sm md:text-base px-4 py-2 rounded-full transform rotate-12"
                            >
                                Revealing Soon!
                            </motion.div>
                        </div>

                        {/* Don't Miss Out Tag */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -left-4 bottom-4 md:-left-8 md:bottom-8"
                        >
                            <div className="bg-green-500 text-white font-['Rajdhani'] text-sm md:text-base px-4 py-2 rounded-full transform -rotate-12">
                                Don&apos;t Miss Out!
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SurpriseGuest; 