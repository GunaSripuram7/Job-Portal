import { useState, useEffect } from 'react';
import jobApplications from '../data/jobApplications';

const useJobSearch = (filters) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Only search if at least one skill is entered
        if (!filters.skills || filters.skills.length === 0) {
            setJobs([]);
            return;
        }
        setLoading(true);
        try {
            const filteredJobs = jobApplications.filter(job => {
                const inputSkills = filters.skills.map(s => s.toLowerCase());
                const jobSkills = job.skills.map(s => s.toLowerCase());
                // Show the job if at least one input skill is found as a substring in any job skill.
                return inputSkills.some(inputSkill =>
                    jobSkills.some(jobSkill => jobSkill.includes(inputSkill))
                );
            });
            setJobs(filteredJobs);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, [filters]);

    return { jobs, loading, error };
};

export default useJobSearch;