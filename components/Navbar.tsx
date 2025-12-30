"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard/users", label: "Devs" },
    { href: "/community", label: "Community" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 border-b border-slate-700/50 backdrop-blur-xl bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-4 py-2 bg-gray-900 rounded-lg">
                <h1 className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  DevProfiles
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <li className="group relative px-4 py-2 rounded-lg text-gray-300 hover:text-white transition duration-300 font-medium flex items-center gap-2 cursor-pointer">
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </li>
              </Link>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            {/* CTA Button - Desktop */}
            <button className="hidden sm:block relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-2 bg-gray-900 rounded-lg text-white font-semibold hover:text-cyan-300 transition duration-300">
                Join
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative group p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 transform ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 transform ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition duration-300 font-medium flex items-center gap-3 cursor-pointer border border-slate-700/30"
                >
                 
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
            <button className="w-full relative group mt-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-3 bg-gray-900 rounded-lg text-white font-semibold hover:text-cyan-300 transition duration-300 w-full">
                Join
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
