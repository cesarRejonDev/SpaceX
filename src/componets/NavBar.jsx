import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


const Navbar = () => {
  return (
    <nav className="p-1 sticky top-0 z-50 mb-4">
      <div className="container mx-auto flex justify-between items-center">
    
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search Launches..."
            className="bg-neutral-500 p-2x1 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <button className="bg-neutral-400 text-slate-600 p-1 rounded-full hover:bg-gray-300">
          <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-4 text-neutral-400">
          <li>
            <a href="/" className="hover:underline hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/favorite" className="hover:underline hover:text-white">
              Favorite
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
