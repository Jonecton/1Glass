// app/components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import orbitron from "../layout"; // Import the orbitron className from layout.tsx

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      {/* Office Hours Above Navbar with Centered Container */}
      <div className="flex justify-center py-2 text-sm text-center bg-gray-700">
        <p>Mon-Fri: 8AM - 5:30PM | Sat: 9AM - 1PM</p>
      </div>

      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-[900px]">
        {/* Left Side: Logo and Glass Shop Name */}
        <div className="flex items-center">
          <img src="glass_logo.png" alt="Company Logo" className="h-12" />
          <span
            className={`font-bold text-lg ${orbitron} text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600`}
          >
            Glass Shop
          </span>
        </div>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-center">
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/quote">Request a Quote</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Right Side: Phone Number Button */}
        <div className="flex-none w-auto">
          <a
            href="tel:+1234567890"
            className="text-white bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-700 transition"
          >
            (956) 351-5877
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
