import React from 'react';
import { motion } from 'framer-motion';
import pageVariants from '../animations/pageVariants';

const About = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-10 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us - Team TWEAK</h1>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold">The Invisible Job Board</span>, a revolutionary job portal developed by <span className="font-semibold">Team TWEAK</span> at the GDG InnoHacks Hackathon. Our team is dedicated to creating smart, skill-driven job discovery solutions that enhance user experience and efficiency in the hiring process.
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">👥 Team Members</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>SRIPURAM GUNASEKHAR</li>
            <li>SHAIK IMRAN</li>
            <li>M. VIJAY SEKHAR REDDY</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🚀 Our Mission</h2>
          <p className="text-gray-700">
            We believe that job seekers should only see opportunities that truly match their expertise. Our platform ensures that job listings remain completely hidden until candidates demonstrate their skills, unlocking relevant positions dynamically.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🔍 What Makes Our Job Portal Unique?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><span className="font-bold">Skill-Driven Discovery</span> – Users must input their skills to reveal matching jobs.</li>
            <li><span className="font-bold">Relevance-Based Prioritization</span> – Jobs with an 80%+ match are highlighted as "Top Matches."</li>
            <li><span className="font-bold">Real-Time Filtering</span> – No search buttons! Results update dynamically based on input.</li>
            <li><span className="font-bold">Seamless User Experience</span> – Smooth animations and an intuitive interface for effortless job exploration.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🏆 Built for GDG InnoHacks Hackathon</h2>
          <p className="text-gray-700">
            This project was developed under the Web Development track at GDG InnoHacks, where we tackled the challenge of designing a next-gen hiring platform that values skills over keyword-based job browsing.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🔹 Tech Stack & APIs</h2>
          <p className="text-gray-700">
            <strong>Tech Stack:</strong> React.js, Tailwind CSS, Framer Motion, Firebase authentication, and Firestore database.
          </p>
          <p className="text-gray-700">
            <strong>APIs Used:</strong> Firebase authentication (backend) and Firestore database.
          </p>
        </div>
        <hr className="my-6" />
        <p className="text-gray-700 text-center">
          💡 <span className="font-semibold">Team TWEAK</span> - Innovating Job Search, One Skill at a Time!
        </p>
      </div>
    </motion.div>
  );
};

export default About;