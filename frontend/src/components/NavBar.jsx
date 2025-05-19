import { Menu } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to={"/"} className="text-2xl font-bold text-gray-900">TodoSync</Link>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#contact" className="text-gray-700 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                <Link to={"/signin"} className="text-gray-700 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Login</Link>
                <Link to={"/signup"} className="bg-red-400 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-500 transition-colors">Sign Up</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-400 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#features" className="text-gray-700 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <a href="#" className="text-gray-700 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium">Login</a>
              <a href="#" className="bg-red-400 text-white block px-3 py-2 rounded-md text-base font-medium">Sign Up</a>
            </div>
          </div>
        )}
      </nav>
  )
}

export default NavBar