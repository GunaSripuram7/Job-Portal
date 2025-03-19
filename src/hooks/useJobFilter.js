import { useState, useEffect } from 'react';

const useJobFilter = (jobs, skills) => {
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        if (skills.length === 0) {
            setFilteredJobs([]);
            return;
        }

        const skillSet = new Set(skills);
        const matchedJobs = jobs.filter(job => {
            const jobSkills = new Set(job.skills);
            const matchCount = [...skillSet].filter(skill => jobSkills.has(skill)).length;
            return matchCount > 0;
        });

        const prioritizedJobs = matchedJobs.map(job => {
            const jobSkills = new Set(job.skills);
            const matchCount = [...skillSet].filter(skill => jobSkills.has(skill)).length;
            return {
                ...job,
                isTopMatch: matchCount >= Math.ceil(jobSkills.size * 0.8)
            };
        }).sort((a, b) => {
            return b.isTopMatch - a.isTopMatch; // Top matches first
        });

        setFilteredJobs(prioritizedJobs);
    }, [jobs, skills]);

    return filteredJobs;
};

export default useJobFilter;