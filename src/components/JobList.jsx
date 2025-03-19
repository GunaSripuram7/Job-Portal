import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs }) => {
    if (!jobs || jobs.length === 0) {
        return <div className="text-center">No job listings available. Please enter your skills to find matching jobs.</div>;
    }

    return (
        <div className="space-y-4">
            {jobs.map((job) => (
                <JobItem key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobList;