'use client';

import Link from 'next/link';
import { useState } from 'react';
import { X, Menu } from 'lucide-react'; // Optional: install lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Luxcars
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/cars" className="hover:text-blue-400">cars</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full bg-[#1c1c1e] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          <Link href="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/cars" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>cars</Link>
          <Link href="/about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </aside>
    </>
  );
}
