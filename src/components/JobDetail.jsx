import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import pageVariants from '../animations/pageVariants';
import jobApplications from '../data/jobApplications';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobApplications.find(job => job.id === jobId);
  const [bookmarkStatus, setBookmarkStatus] = useState(false);
  const [appliedStatus, setAppliedStatus] = useState(false);

  // Load user-specific bookmark and applied status from Firestore
  useEffect(() => {
    const loadUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          const data = userSnap.data();
          setBookmarkStatus(data.bookmarks?.includes(jobId) || false);
          setAppliedStatus(data.appliedJobs?.includes(jobId) || false);
        } else {
          // If no user doc exists, create one with empty arrays.
          await setDoc(userDocRef, { bookmarks: [], appliedJobs: [] });
          setBookmarkStatus(false);
          setAppliedStatus(false);
        }
      }
    };
    loadUserData();
  }, [jobId]);

  const toggleBookmark = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const userDocRef = doc(db, "users", user.uid);
    if (bookmarkStatus) {
      // Remove jobId from bookmarks
      await updateDoc(userDocRef, {
        bookmarks: arrayRemove(jobId)
      });
      setBookmarkStatus(false);
    } else {
      // Add jobId to bookmarks
      await updateDoc(userDocRef, {
        bookmarks: arrayUnion(jobId)
      });
      setBookmarkStatus(true);
    }
  };

  const applyJob = async () => {
    const user = auth.currentUser;
    if (!user) return;
    if (appliedStatus) return; // Already applied
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, {
      appliedJobs: arrayUnion(jobId)
    });
    setAppliedStatus(true);
  };

  if (!job) {
    return <div className="text-center p-4 text-gray-700">Job not found.</div>;
  }

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-10 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow p-8">
        <button onClick={() => navigate(-1)} className="mb-4 text-blue-600 hover:underline">&larr; Back</button>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{job.title}</h1>
        <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
        <p className="text-gray-700 mb-4"><strong>Skills:</strong> {job.skills.join(', ')}</p>
        <p className="text-gray-800 leading-relaxed mb-4">{job.description}</p>
        <div className="flex space-x-4">
          <button 
            onClick={toggleBookmark}
            className="flex items-center text-gray-800 hover:text-blue-600"
          >
            {bookmarkStatus ? '🔖 Bookmarked' : '🔖 Bookmark'}
          </button>
          <button 
            onClick={applyJob}
            className={`flex items-center text-gray-800 hover:text-blue-600 ${appliedStatus ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={appliedStatus}
          >
            {appliedStatus ? 'Applied' : 'Apply'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetail;