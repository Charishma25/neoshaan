import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="shadow sticky top-0 bg-white dark:bg-gray-800 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">NeoKart+</Link>
        <div className="hidden sm:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? '🌞' : '🌙'}
          </button>
          <Link to="/wishlist">❤️</Link>
          <Link to="/cart">🛒</Link>
          <Link to="/signin">🔐</Link>
        </div>
      </div>
    </header>
  );
}
