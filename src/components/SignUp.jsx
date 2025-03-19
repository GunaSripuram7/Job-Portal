import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import pageVariants from '../animations/pageVariants';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword]           = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
    if (!username.trim()) {
      setErrorMsg('Username is required');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: username })
          .then(() => {
            navigate('/profile');
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      })
      .catch((error) => {
        // Error such as "email already in use" will be caught here
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
      <form onSubmit={handleSignUp} className="bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        {errorMsg && (
          <div className="mb-4 bg-red-200 border border-red-400 text-red-700 px-4 py-2 rounded">
            {errorMsg}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            required 
          />
        </div>
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
        <div className="mb-4">
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
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 w-full p-2 border rounded focus:outline-none focus:ring focus:ring-gray-300"
            required 
          />
        </div>
        <button 
          type="submit"
          className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </motion.div>
  );
};

export default SignUp;