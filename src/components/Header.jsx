import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/" className="hover:text-gray-600">
            TWEAK
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          <Link to="/bookmarks" className="text-gray-600 hover:text-gray-800">Bookmarks</Link>
          <Link to="/applied" className="text-gray-600 hover:text-gray-800">Jobs Applied</Link>
          {user ? (
            <Link to="/profile" className="text-gray-600 hover:text-gray-800" title="Profile">
              <span role="img" aria-label="profile" className="text-2xl">👤</span>
            </Link>
          ) : (
            <>
              <Link to="/signin" className="bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300">Sign In</Link>
              <Link to="/signup" className="bg-gray-200 text-gray-800 px-4 py-1 rounded hover:bg-gray-300">Sign Up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;