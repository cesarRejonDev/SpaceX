import React, { useState } from "react";
import { Link } from "react-router-dom";
import Magnifying from "./icons/Magnifying";


const Navbar = ({ handleFilters }) => {
  const [rocket, setRocket] = useState("");
  const [name, setName] = useState("");
  const filter = {};

  const onChangeFilter = (e, setFilter) => {
    const { name, value } = e.target;
    setFilter(value);
    filter[name] = value;
    console.log(filter);
    handleFilters(filter);
  }

  return (
    <nav className="sticky top-0 z-50 mb-4">
      <div className="mx-auto flex justify-between items-center">
    
        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input 
            value={name ?? ''}
            name="name"         
            type="search"
            placeholder="Search Launches..."
            className="bg-transparent p-2 rounded-md border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            onChange={(e) => onChangeFilter(e, setName)}
         />
          <button className="bg-blue-950 p-1 rounded-full hover:bg-blue-900">
            <Magnifying className="h-5 w-5 text-white" />
          </button>

        </div>

        {/* Nav Links */}
        <ul className="flex space-x-4 text-neutral-400">
          <li>
            <select className="appearance-none bg-transparent ">
              <option value="true" >Success</option>
              <option value="false">Fail</option>
            </select>
          </li>
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
          <li>
            <select 
              name="rocket"
              defaultValue={"DE"}
              onChange={(e) => onChangeFilter(e, setRocket)}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="5e9d0d95eda69955f709d1eb">Falcon 1</option>
              <option value="5e9d0d95eda69973a809d1ec">Falcon 9</option>
              <option value="5e9d0d95eda69974db09d1ed">Falcon Heavy</option>
              <option value="5e9d0d96eda699382d09d1ee">Starship</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
