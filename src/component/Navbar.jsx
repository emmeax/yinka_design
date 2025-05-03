import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close menu on click
    }
  };

  return (
    <nav className="bg-black font-neue font-regular text-white p-4">
      <div className="max-w-7xl mx-auto font-neue font-regular flex items-start justify-between">
        {/* Left Section: Name */}
        <div className="text-2xl font-neue font-medium">Olayinka D. Adeyefa</div>

        {/* Right Section: Desktop Content */}
        <div className="hidden md:flex flex-1 justify-between items-center ml-10">
          {/* Title */}
          <div className="text-left ml-10 leading-tight text-lg">
            <p>Head of Operations at</p>
            <p>at Axel Cyber & Veoc Tech</p>
          </div>

          {/* Status */}
          <div className="text-left text-lg">
            <p>Probably:</p>
            <p className="text-purple-500">At the Gym</p>
          </div>

          {/* Desktop Nav Links */}
          <div className="flex space-x-4 text-lg mb-5">
            {navLinks.map((link, idx) => (
              <span
                key={idx}
                onClick={() => handleScroll(link.id)}
                className={`cursor-pointer hover:text-purple-400 transition ${
                  link.label === 'Work' ? 'text-purple-500' : ''
                }`}
              >
                {link.label}
                {idx !== navLinks.length - 1 && ','}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile Toggle - Top Right */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
  <div className="absolute right-4 top-16 bg-black border border-gray-700 rounded-md shadow-md p-4 space-y-2 text-sm z-50">
    {navLinks.map((link, idx) => (
      <div
        key={idx}
        onClick={() => handleScroll(link.id)}
        className={`cursor-pointer ${
          link.label === 'Work' ? 'text-purple-500' : ''
        }`}
      >
        {link.label}
      </div>
    ))}
  </div>
)}
    </nav>
  );
};

export default Navbar;
