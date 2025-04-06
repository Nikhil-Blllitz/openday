import React from 'react';
import { motion } from 'framer-motion';
//import Image from 'next/image';

const SurpriseGuest = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-12 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Title Section */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 px-4"
                    >
                        <div className="mb-4">
                            <h2 className="font-[BS] font-bold">
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#67B044] to-[#9EE666] bg-clip-text text-transparent inline-block sm:inline">
                                    SURPRISE
                                </span>
                                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black inline-block sm:inline sm:ml-2">
                                    COMEDIAN!
                                </span>
                            </h2>
                        </div>
                        <p className="font-[OSK] tracking-wide text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto px-2">
                            A Top-Notch Standup Performance You Won&apos;t Want To Miss!
                        </p>
                    </motion.div>

                    {/* Mystery Guest Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative max-w-2xl mx-auto"
                    >
                        <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#9EE666]/20 to-[#EBE7D8] rounded-3xl overflow-hidden shadow-2xl border border-[#9EE666]/30">
                            {/* Question Mark Overlay with Pulsing Animation */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{
                                    boxShadow: ["0 0 20px rgba(103, 176, 68, 0.3)", "0 0 40px rgba(103, 176, 68, 0.6)", "0 0 20px rgba(103, 176, 68, 0.3)"]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <motion.div
                                    className="w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-[#67B044] to-[#9EE666] rounded-full flex items-center justify-center"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <span className="text-5xl md:text-7xl text-white font-[BS]">?</span>
                                </motion.div>
                            </motion.div>

                            {/* Repeating Text Pattern */}
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                    <span className="text-7xl md:text-9xl font-[BS] transform -rotate-45">
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
                            <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#9EE666]/20 border border-[#9EE666]/30 rounded-full px-6 py-3"
                                >
                                    <p className="font-[OSK] tracking-wide text-lg text-gray-800 font-bold">
                                        4:30 PM - 5:30 PM
                                    </p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#9EE666]/20 border border-[#9EE666]/30 rounded-full px-6 py-3"
                                >
                                    <p className="font-[OSK] tracking-wide text-lg text-gray-800 font-bold">
                                        Main Stage
                                    </p>
                                </motion.div>
                            </div>

                            <p className="font-[OSK] tracking-wide text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4">
                                Get Ready To Laugh Until It Hurts!
                            </p>
                            <p className="font-[OSK] tracking-wide text-lg sm:text-xl md:text-xl text-gray-700 max-w-3xl mx-auto">
                                We&apos;re bringing a nationally acclaimed standup comedian to close out our event! Prepare for an hour of non-stop entertainment and hilarious moments.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Extra Excitement Element */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-10 text-center"
                    >
                        <div className="mt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-[#67B044] to-[#9EE666] text-white font-[OSK] tracking-wide px-8 py-3 rounded-full shadow-lg text-lg"
                                onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Register Now
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SurpriseGuest; 