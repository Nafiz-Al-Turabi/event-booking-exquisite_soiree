'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    'Company Overview',
    'Booking Policy',
    'Pricing',
    'Services',
    'Gallery',
    'Contact Us',
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#00000042] md:backdrop-blur-lg text-white">
      <div className="flex justify-between items-center w-full max-w-[82.5rem] mx-auto px-4 2xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 py-2">
          <Image src={logo} alt="Logo" height={80} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-light">
          {navLinks.map((item, idx) => (
            <Link
              href={`/${item.replace(/\s+/g, '').toLowerCase()}`}
              key={idx}
              className={`hover:text-yellow-400 transition duration-300 py-11 ${
                item === 'Company Overview' ? 'text-yellow-400 border-b-2 border-yellow-400' : ''
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <FaBars className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#00000042] backdrop-blur-lg text-white transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-[999] shadow-lg`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col items-start space-y-4 px-6 pt-4 text-lg font-light">
          {navLinks.map((item, idx) => (
            <li key={idx} className="w-full">
              <Link
                href={`/${item.replace(/\s+/g, '').toLowerCase()}`}
                className="block w-full hover:text-yellow-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
