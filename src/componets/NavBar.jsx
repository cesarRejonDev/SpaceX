import React from "react";
import { Link } from "react-router-dom";
import Magnifying from "./icons/Magnifying";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 mb-4">
      <div className="mx-auto flex justify-between items-center">
    
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search Launches..."
            className="bg-transparent p-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
          />
          <button className="bg-blue-950 p-1 rounded-full hover:bg-blue-900">
            <Magnifying className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-4 text-neutral-400">
          <li>
            <Link to="/" className="hover:underline hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:underline hover:text-white">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
