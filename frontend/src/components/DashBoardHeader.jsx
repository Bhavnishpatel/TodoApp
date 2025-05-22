import React from 'react';
import { Search, Bell, Grid } from 'lucide-react';

const DashBoardHeader = ({ setIsOpen }) => {
  const day = "Tuesday";
  const date = "20/06/2023";

  return (
    <div className="w-full bg-white shadow px-4 py-2 flex items-center">
      {/* Hamburger for mobile */}
      <button 
        onClick={() => setIsOpen(prev => !prev)}
        className="md:hidden text-white bg-red-500 p-2 rounded mr-2"
      >
        ☰
      </button>

      <div className="flex-shrink-0 mr-6">
        <h1 className="text-xl font-medium">
          <span className="text-red-500">Dash</span>
          <span className="text-gray-800">board</span>
        </h1>
      </div>

      <div className="flex-grow relative max-w-full">
        <input 
          type="text"
          placeholder="Search task here..."
          className="w-full bg-gray-100  rounded sm:rounded-lg py-2 px-2 sm:px-4 text-xs  sm:text-sm text-gray-600 focus:outline-none"
        />
        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-1.5 rounded-lg">
          <Search size={16} />
        </button>
      </div>

      <div className="flex items-center ml-auto">
        <div className="flex space-x-2 mx-4">
          <button className="text-gray-600 bg-gray-100 rounded-lg p-1.5">
            <Bell size={18} />
          </button>
          <button className="text-white bg-red-500 rounded-lg p-1.5">
            <Grid size={18} />
          </button>
        </div>

        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium">{day}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
