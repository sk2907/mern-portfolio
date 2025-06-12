import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-center space-x-8">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/about" className="hover:text-yellow-400">About</Link>
       <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
      <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
    </nav>
  );
}
