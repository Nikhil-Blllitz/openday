'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
    {
        question: "What is the purpose of this event?",
        answer: "This event is designed to bring together innovators, creators, and thinkers to collaborate on cutting-edge projects and ideas."
    },
    {
        question: "Who can participate?",
        answer: "Anyone with a passion for technology, creativity, and problem-solving is welcome to participate."
    },
    {
        question: "Is there a registration fee?",
        answer: "No, participation in the event is completely free."
    },
    {
        question: "Will there be prizes for winners?",
        answer: "Yes! There will be exciting prizes for the best projects and ideas."
    },
    {
        question: "How do I prepare for the event?",
        answer: "Come with an open mind, bring your laptop, and be ready to collaborate and innovate."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" max-sm:pt-[0.5em] relative  py-20 px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-['BS'] max-sm:text-[7vw] max-sm:leading-[10vw] text-5xl mt-1 z-50 font-bold text-[#141414]"
                >
                    FAQ
                </motion.h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-[#9EE666]/30 hover:border-[#9EE666]/50 hover:shadow-md transition duration-300 w-full"
                    >
                        <button
                            className="flex justify-between items-center w-full text-left text-xl font-bold text-gray-800 focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="bg-[#9EE666]/20 p-2 rounded-full flex items-center justify-center">
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
                            <p className="text-gray-600 mt-3 pl-1">{faq.answer}</p>
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
                className="text-center mt-12"
            >
                <p className="text-gray-700 mb-4">Still have questions?</p>
                <a
                    href="mailto:support@cambrian-openhouse.com"
                    className="inline-flex items-center px-5 py-3 bg-[#67B044] text-white font-semibold rounded-lg hover:bg-[#67B044]/90 transition-all duration-300"
                >
                    Contact Us
                </a>
            </motion.div>
        </div>
    );
};

export default FAQ;