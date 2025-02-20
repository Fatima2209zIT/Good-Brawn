"use client"; // Required for using React hooks

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the mobile menu toggle

const Navbar = () => {
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 
  const toggleMobileMenu = () => {
    console.log("Toggling mobile menu");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-orange-600 p-5 flex items-center justify-between shadow-lg">
      {/* Left Side - Logo */}
      <h1 className="text-3xl font-bold">GOOD BRAWN</h1>

      {/* Middle - Centered Links (Desktop) */}
      <div className="hidden md:flex flex-grow font-bold justify-center text-xl gap-[35px]">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-orange-600 focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && ( console.log("Mobile Menu Opened"),
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg text-center py-4">
          <Link href="/" className="block py-2 hover:bg-orange-100" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/about" className="block py-2 hover:bg-orange-100" onClick={toggleMobileMenu}>About</Link>
          <Link href="/contact" className="block py-2 hover:bg-orange-100" onClick={toggleMobileMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
