"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">MySite</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-cyan-400 transition">Home</a>
        <a href="/about" className="hover:text-cyan-400 transition">About</a>
        <a href="/services" className="hover:text-cyan-400 transition">Services</a>
        <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <a href="/" className="hover:text-cyan-400 transition">Home</a>
          <a href="/about" className="hover:text-cyan-400 transition">About</a>
          <a href="/services" className="hover:text-cyan-400 transition">Services</a>
          <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
