import React from 'react';
import { motion } from 'framer-motion';
import pageVariants from '../animations/pageVariants';

const Contact = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-10 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="font-bold">SRIPURAM GUNASEKHAR</span> - <a href="mailto:gunasripuramofficial1@gmail.com" className="text-blue-600 hover:underline">gunasripuramofficial1@gmail.com</a>
          </li>
          <li>
            <span className="font-bold">SHAIK IMRAN</span> - <a href="mailto:imran8122005@gmail.com" className="text-blue-600 hover:underline">imran8122005@gmail.com</a>
          </li>
          <li>
            <span className="font-bold">M. VIJAY SEKHAR REDDY</span> - <a href="mailto:vijaysekharreddym90@gmail.com" className="text-blue-600 hover:underline">vijaysekharreddym90@gmail.com</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Contact;