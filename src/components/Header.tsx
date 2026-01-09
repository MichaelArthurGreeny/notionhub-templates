'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-lg">NotionHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#templates" className="text-gray-600 hover:text-black transition-colors">
              Templates
            </a>
            <a href="#categories" className="text-gray-600 hover:text-black transition-colors">
              Categories
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-black transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-gray-600 hover:text-black transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#templates"
              className="bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Browse Templates
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#templates"
                className="text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Templates
              </a>
              <a
                href="#categories"
                className="text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#templates"
                className="bg-black text-white px-5 py-2.5 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Templates
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
