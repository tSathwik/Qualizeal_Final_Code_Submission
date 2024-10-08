import React, { useState } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import DashNav from "./DashNav";
import Projects from "./Projects";
import Invitations from "./Invitations";
import Community from "./Community";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("All");

  const renderContent = () => {
    switch (activeTab) {
      case "Projects":
        return <Projects />;
      case "Invitations":
        return <Invitations />;
      case "Community":
        return <Community />;
      default:
        return <p className="text-gray-600">No activity available.</p>;
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <DashNav val="Home" />

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
              Connect with the Community
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
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 1.0845 a 16.9155 16.9155 0 0 1 0 33.831 a 16.9155 16.9155 0 0 1 0 -33.831"
                  fill="none"
                  stroke="#d9d9d9"
                  strokeWidth="2.8"
                />
                <path
                  d="M18 1.0845 a 16.9155 16.9155 0 0 1 0 33.831"
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

       
        {/* My Devices */}
        <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">My Devices</h2>
          <div className="flex items-center space-x-2">
            <HiOutlineDesktopComputer className="text-gray-600 text-xl" />
            <p>Windows 10</p>
          </div>
          <a href="#" className="text-blue-500 mt-4 inline-block hover:underline">
            + Add devices
          </a>
        </div>
      </div>

      {/* My Activity */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">My Activity</h2>
        <ul className="flex space-x-4 border-b pb-4 mb-4 border-gray-200">
          <li
            onClick={() => setActiveTab("All")}
            className={`cursor-pointer ${activeTab === "All" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500 hover:text-blue-500"}`}
          >
            All
          </li>
          <li
            onClick={() => setActiveTab("Projects")}
            className={`cursor-pointer ${activeTab === "Projects" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500 hover:text-blue-500"}`}
          >
            Projects
          </li>
          <li
            onClick={() => setActiveTab("Invitations")}
            className={`cursor-pointer ${activeTab === "Invitations" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500 hover:text-blue-500"}`}
          >
            Invitations
          </li>
          <li
            onClick={() => setActiveTab("Community")}
            className={`cursor-pointer ${activeTab === "Community" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500 hover:text-blue-500"}`}
          >
            Community
          </li>
        </ul>
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
