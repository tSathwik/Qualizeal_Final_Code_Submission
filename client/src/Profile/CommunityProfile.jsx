import React from 'react';
import DashNav from '../dashboard/DashNav';
import Offcanvas from '../dashboard/Offcanvas';
import AboutCommunity from './AboutCommunity';
import user1 from "../assets/profile-pictures/user1.jpg";


const CommunityProfile = () => {
  return (
    <>
         <div className="ml-64 p-4 bg-gray-100">
        <DashNav val={"Community Profile"} />
      </div>
      <div className="ml-64 min-h-screen">
        <Offcanvas />
        <div className="max-w-7xl mx-auto py-10 px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to TestersHive Community</h1>
          <p className="text-gray-600 mt-2">Connect, collaborate, and grow with fellow testers from around the world!</p>
        </div>

      
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Community Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Top Contributors</h3>
              <p>Our most active members this month.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Latest Discussions</h3>
              <p>Check out the trending topics in our community forums.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
              <p>Join our upcoming webinars and testing workshops.</p>
            </div>
          </div>
        </section>

      
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recent Discussions</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">Best practices for mobile testing?</h4>
              <p className="text-gray-600">Ajay · 2 days ago</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">How to automate API testing effectively?</h4>
              <p className="text-gray-600">Kumar · 4 days ago</p>
            </li>
            <li className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-lg font-bold">New testing tools in 2024</h4>
              <p className="text-gray-600">Potuganti · 1 week ago</p>
            </li>
          </ul>
        </section>

       
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={user1}
                alt="Member Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-3"
              />
              <h3 className="font-semibold">Harshith</h3>
              <p className="text-gray-600">Automation Expert</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={user1}
                alt="Member Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-3"
              />
              <h3 className="font-semibold">Sai</h3>
              <p className="text-gray-600">Performance Tester</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={user1}
                alt="Member Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-3"
              />
              <h3 className="font-semibold">k</h3>
              <p className="text-gray-600">API Testing Specialist</p>
            </div>
          </div>
        </section>

       
        <section className="text-center py-10 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold mb-3">Become a part of TestersHive!</h2>
          <p className="mb-5 text-gray-600">Join our community today to share knowledge, connect with professionals, and access exclusive resources.</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
            Join Now
          </button>
        </section>
      </div>
      <AboutCommunity/>
    </div>
    </>
  );
};

export default CommunityProfile;
