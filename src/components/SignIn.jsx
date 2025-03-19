import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import pageVariants from '../animations/pageVariants';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMsg('');
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/profile');
      })
      .catch((error) => {
        // Display error popup based on Firebase error message
        setErrorMsg(error.message);
      });
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-50 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <form onSubmit={handleSignIn} className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        {errorMsg && (
          <div className="mb-4 bg-red-200 border border-red-400 text-red-700 px-4 py-2 rounded">
            {errorMsg}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            required 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            required 
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors"
        >
          Sign In
        </button>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </motion.div>
  );
};

export default SignIn;