import React from 'react';
import { Link } from 'react-router-dom';

const JobItem = ({ job }) => {
    const { id, title, company, location, isTopMatch } = job;
    return (
        <Link to={`/job/${id}`} className="block">
            <div className={`p-4 border rounded-lg shadow-md ${isTopMatch ? 'bg-yellow-100' : 'bg-white'}`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{company}</p>
                <p className="text-sm text-gray-500">{location}</p>
                {isTopMatch && <span className="text-green-500 font-bold">Top Match</span>}
            </div>
        </Link>
    );
};

export default JobItem;