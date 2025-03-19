import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jobApplications from '../data/jobApplications';
import { motion } from 'framer-motion';
import pageVariants from '../animations/pageVariants';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const JobsApplied = () => {
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setAppliedJobIds(userSnap.data().appliedJobs || []);
        }
      }
    };
    fetchAppliedJobs();
  }, []);

  const appliedApplications = jobApplications.filter(job => 
    appliedJobIds.includes(job.id)
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
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Jobs Applied</h1>
        {appliedApplications.length === 0 ? (
          <div className="text-center text-gray-600">No applied jobs yet.</div>
        ) : (
          <div className="space-y-4">
            {appliedApplications.map(job => (
              <Link key={job.id} to={`/job/${job.id}`} className="block">
                <div className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
                  <p className="mt-2 text-gray-700">Decision Pending</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default JobsApplied;