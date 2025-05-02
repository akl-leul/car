'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { X, Menu, Car } from 'lucide-react';
import { usePathname } from 'next/navigation';

// NavLink now supports active highlighting
const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`transition-colors duration-200 ease-in-out text-lg font-medium
        ${isActive
          ? 'text-indigo-500 underline underline-offset-4'
          : 'hover:text-indigo-400 text-white'}
      `}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Main Navbar */}
      <nav className=" bg-black text-white px-6 py-4 shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-wide">
            <Car className="w-8 h-8 text-indigo-500" />
            Luxcars
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" onClick={closeMenu}>Home</NavLink>
            <NavLink href="/cars" onClick={closeMenu}>Cars</NavLink>
            <NavLink href="/about" onClick={closeMenu}>About</NavLink>
            <NavLink href="/contact" onClick={closeMenu}>Contact</NavLink>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 transition-opacity"
          onClick={closeMenu}
          aria-label="Close menu"
          tabIndex={-1}
        />
      )}

      {/* Mobile Side Drawer */}
      <aside
        className={`fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-[#23232a] to-[#18181b] text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-700">
          <span className="flex items-center gap-2 text-2xl font-bold">
            <Car className="w-8 h-8 text-indigo-500" />
            Luxcars
          </span>
          <button onClick={closeMenu} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 px-6 pt-8">
          <NavLink href="/" onClick={closeMenu}>Home</NavLink>
          <NavLink href="/cars" onClick={closeMenu}>Cars</NavLink>
          <NavLink href="/about" onClick={closeMenu}>About</NavLink>
          <NavLink href="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </aside>
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-20" />
    </>
  );
}
