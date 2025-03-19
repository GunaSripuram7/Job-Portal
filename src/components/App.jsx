import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import SkillInput from './SkillInput';
import JobList from './JobList';
import SignIn from './SignIn';
import SignUp from './SignUp';
import JobDetail from './JobDetail';
import Bookmarks from './Bookmarks';
import JobsApplied from './JobsApplied';
import Profile from './Profile';
import useJobSearch from '../hooks/useJobSearch';
import pageVariants from '../animations/pageVariants';
import About from './About';
import Contact from './Contact'; 

const Home = ({ filters, setFilters }) => {
  const { jobs, loading, error } = useJobSearch(filters);

  const handleSkillChange = (value) => {
    // Convert the comma-separated input string to an array of skills.
    const skills = value.split(',').map(s => s.trim()).filter(s => s);
    setFilters(prev => ({ ...prev, skills }));
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-10 font-sans"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Job Portal</h1>
        <SkillInput value={filters.skills.join(', ')} onSkillChange={handleSkillChange} />
        {loading && <div className="text-center text-gray-600">Loading jobs...</div>}
        {error && <div className="text-center text-red-600">Error: {error.message}</div>}
        <JobList jobs={jobs} />
      </div>
    </motion.div>
  );
};

const App = () => {
  // The search state is kept in App so that it survives route transitions.
  const [filters, setFilters] = useState({ skills: [] });
  const location = useLocation();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home filters={filters} setFilters={setFilters} />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/applied" element={<JobsApplied />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;