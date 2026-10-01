"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold">
          Nova
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          <a
            href="#pricing"
            className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-4 text-sm">
            <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
              Features
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
              Pricing
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
              Contact
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}