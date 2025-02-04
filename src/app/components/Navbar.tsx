"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineFacebook } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Office Hours Row */}
      <div className="fixed top-0 left-0 w-full flex justify-center py-2 text-sm text-center bg-gray-700 text-white z-50">
        <p>Mon-Fri: 8AM - 5:30PM | Sat: 9AM - 1PM</p>
      </div>

      {/* Navbar */}
      <nav className="fixed top-[32px] w-full h-20 shadow-xl bg-white z-50">
        {/* Centered Container with max width */}
        <div className="max-w-[815px] w-full mx-auto flex justify-between items-center h-full px-6 space-x-6">
          {/* Logo and Name */}
          <div className="flex items-center flex-shrink-0 whitespace-nowrap">
            <img src="logo-full.png" alt="Glass Logo" className="h-12 nav:h-14" />
            <span className="text-lg nav:text-xl font-semibold ml-2"></span>
          </div>

          {/* Desktop Navigation (Hidden Below 850px) */}
          <div className="hidden nav:flex flex-grow">
            <ul className="flex space-x-6 text-gray-600">
              <li className="uppercase hover:border-b text-lg nav:text-xl"><Link href="/">Home</Link></li>
              <li className="uppercase hover:border-b text-lg nav:text-xl"><Link href="/services">Services</Link></li>
              <li className="uppercase hover:border-b text-lg nav:text-xl"><Link href="/projects">Projects</Link></li>
              <li className="uppercase hover:border-b text-lg nav:text-xl"><Link href="/quote">Request a Quote</Link></li>
              <li className="uppercase hover:border-b text-lg nav:text-xl"><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Hamburger Menu Icon (Visible Below 850px) */}
          <div onClick={handleNav} className="nav:hidden cursor-pointer text-gray-600">
            <AiOutlineMenu size={30} />
          </div>
        </div>

        {/* Mobile Menu (Hidden by Default, Appears on Click) */}
        <div
          className={`fixed top-0 left-0 w-[65%] h-screen bg-[#ecf0f3] p-10 transition-all duration-500 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={handleNav} className="cursor-pointer text-gray-600">
              <AiOutlineClose size={30} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col py-4 space-y-6 text-gray-600">
            <li onClick={handleNav} className="cursor-pointer text-xl"><Link href="/">Home</Link></li>
            <li onClick={handleNav} className="cursor-pointer text-xl"><Link href="/services">Services</Link></li>
            <li onClick={handleNav} className="cursor-pointer text-xl"><Link href="/projects">Projects</Link></li>
            <li onClick={handleNav} className="cursor-pointer text-xl"><Link href="/quote">Request a Quote</Link></li>
            <li onClick={handleNav} className="cursor-pointer text-xl"><Link href="/contact">Contact</Link></li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-start pt-10 text-gray-600">
            <AiOutlineFacebook size={30} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
