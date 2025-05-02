'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { X, Menu, Car } from 'lucide-react'; // Optional: install lucide icons

// Reusable Link component to avoid duplication
const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    className="hover:text-indigo-600 transition-colors duration-300 ease-in-out"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <nav className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] text-white px-6 py-4 shadow-xl fixed top-0 left-0 right-0 z-50 border-b-2 border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold text-white tracking-wide flex items-center">
          <Car className="w-10 h-10" />Luxcars
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink href="/cars" onClick={() => setIsOpen(false)}>Cars</NavLink>
            <NavLink href="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={handleMenuToggle} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={handleMenuToggle}
          role="button"
          aria-label="Close menu"
        />
      )}

      {/* Side Drawer */}
      <aside
        className={`fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-[#1c1c1e] to-[#2a2a2e] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <span className="text-2xl font-semibold "><Car className="w-10 h-10" />Luxcars</span>
          <button onClick={handleMenuToggle} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-6">
          <NavLink href="/" onClick={handleMenuToggle}>Home</NavLink>
          <NavLink href="/cars" onClick={handleMenuToggle}>Cars</NavLink>
          <NavLink href="/about" onClick={handleMenuToggle}>About</NavLink>
          <NavLink href="/contact" onClick={handleMenuToggle}>Contact</NavLink>
        </nav>
      </aside>
    </>
  );
}
