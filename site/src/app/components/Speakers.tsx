'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

type Speaker = {
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  tags: string[];
};

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const speakers: Speaker[] = [
    {
      name: "Dr. Sarah Chen",
      role: "AI Research Director",
      company: "TechVision Labs",
      bio: "Leading researcher in artificial intelligence with a focus on neural networks and machine learning applications in healthcare.",
      image: "/speakers/speaker1.jpg",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      tags: ["AI", "Machine Learning", "Healthcare"]
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "FutureTech",
      bio: "Pioneering technologist with 15+ years of experience building scalable cloud infrastructure and leading engineering teams.",
      image: "/speakers/speaker2.jpg",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      tags: ["Cloud Computing", "Leadership", "Scalability"]
    },
    {
      name: "Aisha Johnson",
      role: "Blockchain Specialist",
      company: "Crypto Innovations",
      bio: "Expert in blockchain technology and decentralized finance, advising Fortune 500 companies on implementing blockchain solutions.",
      image: "/speakers/speaker3.jpg",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      tags: ["Blockchain", "DeFi", "Cryptocurrency"]
    },
    {
      name: "David Park",
      role: "UX Design Lead",
      company: "Interface Masters",
      bio: "Award-winning designer focused on creating intuitive and accessible user experiences for emerging technologies.",
      image: "/speakers/speaker4.jpg",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com"
      },
      tags: ["UX/UI", "Design Systems", "Accessibility"]
    },
    {
      name: "Elena Vega",
      role: "Cybersecurity Expert",
      company: "SecureNet",
      bio: "Specializing in threat detection and ethical hacking, Elena has helped secure systems for government agencies and major corporations.",
      image: "/speakers/speaker5.jpg",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      tags: ["Cybersecurity", "Ethical Hacking", "Privacy"]
    },
    {
      name: "James Wilson",
      role: "AR/VR Developer",
      company: "Immersive Worlds",
      bio: "Pushing the boundaries of augmented and virtual reality applications for education, training, and entertainment.",
      image: "/speakers/speaker6.jpg",
      socials: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com"
      },
      tags: ["AR/VR", "Metaverse", "3D Modeling"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="speakers" className="py-24 bg-gradient-to-b from-black via-indigo-950/30 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-violet-500/10 rounded-full filter blur-3xl"
        />
      </div>
      
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Meet Our Speakers
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Industry leaders and innovators sharing their expertise and vision
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:opacity-70 transition-opacity duration-300 z-0"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                  <p className="text-sm text-gray-300">{speaker.role}, {speaker.company}</p>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2 z-20">
                  {speaker.socials.twitter && (
                    <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  )}
                  {speaker.socials.linkedin && (
                    <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {speaker.socials.github && (
                    <a href={speaker.socials.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
                <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                <Image 
                  src={speaker.image} 
                  alt={speaker.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{speaker.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {speaker.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="/speakers" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full text-white font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-indigo-600 hover:to-purple-700"
          >
            View All Speakers
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}