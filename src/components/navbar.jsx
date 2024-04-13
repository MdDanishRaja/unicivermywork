// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/uniceverlogo.svg"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-pink-800 text-white py-4 px-6 mb-10">
      <div className="flex items-center">
        <img src={img} alt="Logo" className="h-8 mr-2" />
      </div>
      <div className="flex">
        <Link to="/" className="text-gray-300 hover:text-white px-4">Home</Link>
        <Link to="/about" className="text-gray-300 hover:text-white px-4">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
