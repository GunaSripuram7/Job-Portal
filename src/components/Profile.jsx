import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import pageVariants from '../animations/pageVariants';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  if (!user) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gray-50 font-sans"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <p className="text-xl text-gray-700">Loading profile...</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-10 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Free-style layout without a boxed container */}
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello, {user.displayName || 'User'}!</h1>
        <p className="text-gray-700 mb-2">Email: {user.email}</p>
        <button 
          onClick={handleSignOut}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </motion.div>
  );
};

export default Profile;