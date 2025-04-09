'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: "What is the purpose of this event?",
        answer: "The event is designed to be a hub of innovation, technology, and creativity, bringing together diverse minds to explore cutting-edge ideas, participate in hands-on activities, and engage in insightful discussions."
    },
    {
        question: "Who can participate?",
        answer: "This event is open to everyone! Whether you're a student, entrepreneur, professional, or just a keen learner, there's something for you. With a mix of tech and non-tech exhibits, engaging talks, and interactive stalls, it's a space for all to connect, learn, and grow."
    },
    {
        question: "Is there a registration fee?",
        answer: "No, entry is absolutely free! We believe in making knowledge and innovation accessible to all, so everyone is welcome to attend without any cost."
    },
    {
        question: "Where is the event taking place?",
        answer: "The event will be held on the lawn of Cambridge Institute of Technology, providing a vibrant and open space for exhibits, discussions, and interactive sessions."
    },
    {
        question: "Do I need to register in advance?",
        answer: "Yes, registering in advance ensures you make the most of the event. It allows you to receive important updates, secure your participation in workshops and more."
    },
    {
        question: "Will there be prizes for winners?",
        answer: "Yes! There will be exciting prizes for the best projects and ideas."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-6 sm:py-14 px-4 sm:px-6 relative faq-section">
            <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-['BS'] text-4xl sm:text-5xl mt-10 z-50 font-bold text-[#141414]"
                >
                    FAQ
                </motion.h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 hover:shadow-md transition duration-300 w-full"
                    >
                        <button
                            className="flex justify-between items-center w-full text-left text-lg sm:text-xl font-bold text-gray-800 focus:outline-none osk-font"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="pr-2">{faq.question}</span>
                            <span className="bg-[#9EE666]/20 p-2 rounded-full flex-shrink-0 flex items-center justify-center">
                                {openIndex === index ?
                                    <FaMinus className="text-[#67B044]" /> :
                                    <FaPlus className="text-[#67B044]" />
                                }
                            </span>
                        </button>
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={openIndex === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-600 mt-3 pl-1 osk-font">{faq.answer}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Contact link */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12 sm:mt-16 mb-6 sm:mb-10"
            >
                <p className="text-gray-700 mb-4 osk-font text-xl sm:text-2xl font-semibold">Still have questions?</p>
                <a
                    href="mailto:openhouse@cambridge.edu.in"
                    className="inline-flex items-center px-6 py-3 bg-[#67B044] text-white font-bold rounded-lg hover:bg-[#67B044]/90 transition-all duration-300 osk-font text-lg sm:text-xl tracking-wider"
                >
                    Contact Us
                </a>
            </motion.div>

            {/* Add inline style for osk-font class */}
            <style jsx>{`
                .faq-section .osk-font {
                    font-family: 'OSK', sans-serif !important;
                    letter-spacing: 0.04em;
                }
            `}</style>
        </div>
    );
};

export default FAQ;