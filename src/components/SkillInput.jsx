import React, { useState, useEffect } from 'react';

const skillOptions = ['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'CSS', 'HTML'];

const SkillInput = ({ value, onSkillChange }) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [suggestions, setSuggestions] = useState([]);

    // Update internal state when the prop changes.
    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        onSkillChange(val);

        if (val.length > 1) {
            const filtered = skillOptions.filter(skill =>
                skill.toLowerCase().includes(val.toLowerCase())
            );
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        const newVal = suggestion;
        setInputValue(newVal);
        onSkillChange(newVal);
        setSuggestions([]);
    };

    const clearInput = () => {
        setInputValue('');
        onSkillChange('');
        setSuggestions([]);
    };

    return (
        <div className="mb-6 relative">
            <label htmlFor="skill-input" className="block text-lg text-gray-700 font-medium">
                Enter your skills:
            </label>
            <div className="relative">
                <input
                    type="text"
                    id="skill-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="mt-2 block w-full p-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-gray-300"
                    placeholder="e.g., React.js, SQL, Python, Cloud Computing"
                />
                {inputValue && (
                    <button
                        onClick={clearInput}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    >
                        &#x2715;
                    </button>
                )}
            </div>
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-200 w-full mt-2 z-10 rounded shadow-sm">
                    {suggestions.map((sug, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                            onClick={() => handleSuggestionClick(sug)}
                        >
                            {sug}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SkillInput;