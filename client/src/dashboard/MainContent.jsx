import React from "react";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import DashNav from "./DashNav";
import AllData from "./AllData";
import MyActivity from "./MyActivity";
const MainContent = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6">
      <DashNav val={"DashBoard"} />
      <AllData></AllData>
      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Joiner Checklist */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">New Joiner Checklist</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <input type="checkbox" checked disabled className="mr-2" />
              Create your Account: Welcome to TestersHive!
            </li>
            <li className="flex items-center">
              <input type="checkbox" checked disabled className="mr-2" />
              Confirm your Email Address
            </li>
            <li className="flex items-center">
              <input type="checkbox" disabled className="mr-2" />
              Setup your Payment Method
            </li>
            <li className="flex items-center">
              <input type="checkbox" disabled className="mr-2" />
              Complete your Profile
            </li>
            <li className="flex items-center">
              <input type="checkbox" disabled className="mr-2" />
              Scan the Projects Board
            </li>
            <li className="flex items-center">
              <input type="checkbox" disabled className="mr-2" />
              Take a course at the Academy
            </li>
          </ul>
        </div>

        {/* Profile Completion */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Profile Completion</h2>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 relative">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  d="M18 1.0845
                  a 16.9155 16.9155 0 0 1 0 33.831
                  a 16.9155 16.9155 0 0 1 0 -33.831"
                  fill="none"
                  stroke="#d9d9d9"
                  strokeWidth="2.8"
                />
                <path
                  d="M18 1.0845
                  a 16.9155 16.9155 0 0 1 0 33.831"
                  fill="none"
                  stroke="#00abff"
                  strokeWidth="2.8"
                  strokeDasharray="29, 100"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-xs font-semibold">
                29%
              </span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-600">
              Complete my profile
            </button>
          </div>
        </div>
      </div>
      <MyActivity></MyActivity>
    </div>
  );
};

export default MainContent;
