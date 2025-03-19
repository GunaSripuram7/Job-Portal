import React, { useEffect, useState } from 'react';
import JobList from './JobList';
import jobApplications from '../data/jobApplications';
import { motion } from 'framer-motion';
import pageVariants from '../animations/pageVariants';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Bookmarks = () => {
  const [bookmarkedJobIds, setBookmarkedJobIds] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setBookmarkedJobIds(userSnap.data().bookmarks || []);
        }
      }
    };
    fetchBookmarks();
  }, []);

  const bookmarkedApplications = jobApplications.filter(job => 
    bookmarkedJobIds.includes(job.id)
  );

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-10 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Bookmarked Jobs</h1>
        {bookmarkedApplications.length === 0 ? (
          <div className="text-center text-gray-600">No bookmarks yet.</div>
        ) : (
          <JobList jobs={bookmarkedApplications} />
        )}
      </div>
    </motion.div>
  );
};

export default Bookmarks;