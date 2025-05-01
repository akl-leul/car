'use client';
import { Facebook, Instagram, Twitter } from 'lucide-react'; // optional icons

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 px-6 py-10  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Luxcars</h2>
          <p className="text-sm">Experience the ultimate in automotive luxury and performance.</p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <a href="/cars" className="footer-link">Cars</a>
          <a href="#about" className="footer-link">About Us</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>

        {/* Socials */}
        <div className="flex md:justify-end space-x-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-white transition"><Facebook size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram size={20} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter size={20} /></a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Luxcars. All rights reserved.
      </div>
    </footer>
  );
}
