import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const DashNav = ({ val }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{val}</h1>
      <div className="flex items-center space-x-4">
        {/*
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />*/}
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaBell className="text-xl" />
        </button>
        {/* <button className="p-2 rounded-full hover:bg-gray-200">
            <FaUserCircle className="text-xl" />
          </button> */}
      </div>
    </div>
  );
};

export default DashNav;
