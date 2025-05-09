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
    <nav className="bg-black font-neue font-regular  text-white p-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Name (Desktop Only) */}
        <div className="text-2xl hidden md:block font-medium">
          Olayinka D. Adeyefa
        </div>

        {/* Center (Desktop Only) */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-16">
          <div className="text-left leading-tight text-lg">
            <p>Head of Operations at</p>
            <p>Axel Cyber & Veoc Tech</p>
          </div>
          <div className="text-left text-lg">
            <p>Probably:</p>
            <p className="text-purple-500">At the Gym</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-4 text-lg">
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

          {/* Mobile Toggle Button (Right aligned) */}
          <div className="md:hidden mb-5">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="absolute right-4 top-10 text-left bg-black border border-gray-700 rounded-md shadow-md p-4 space-y-2 text-sm z-50">
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
