import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">TestersHive</h2>
          <p className="text-sm">harshith sai</p>
          <p className="text-sm">Tester ID: 2101562</p>
          <p className="mt-2 text-xs text-gray-400">UNRATED</p>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Academy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Projects
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Community
              </a>
            </li>
          </ul>
        </nav>
        <footer className="mt-auto">
          <ul className="text-xs text-gray-500 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                TestersHive Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookie Settings
              </a>
            </li>
          </ul>
          <p className="text-xs mt-4 text-gray-500">© TestersHive</p>
        </footer>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 rounded-full hover:bg-gray-200">
              <FaBell className="text-xl" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <FaUserCircle className="text-xl" />
            </button>
          </div>
        </div>

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

          {/* My Devices */}
          <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">My Devices</h2>
            <div className="flex items-center space-x-2">
              <HiOutlineDesktopComputer className="text-gray-600 text-xl" />
              <p>Windows 10</p>
            </div>
            <a
              href="#"
              className="text-blue-500 mt-4 inline-block hover:underline"
            >
              + Add devices
            </a>
          </div>
        </div>

        {/* My Activity */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">My Activity</h2>
          <ul className="flex space-x-4 border-b pb-4 mb-4 border-gray-200">
            <li className="cursor-pointer text-blue-500 border-b-2 border-blue-500">
              All
            </li>
            <li className="cursor-pointer text-gray-500 hover:text-blue-500">
              Projects
            </li>
            <li className="cursor-pointer text-gray-500 hover:text-blue-500">
              Invitations
            </li>
            <li className="cursor-pointer text-gray-500 hover:text-blue-500">
              Community
            </li>
          </ul>
          <p className="text-gray-600">No activity available.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
