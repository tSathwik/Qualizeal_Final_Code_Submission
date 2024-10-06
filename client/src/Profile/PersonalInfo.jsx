import React from 'react';
import user1 from "../assets/profile-pictures/user1.jpg";

const PersonalInfo = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-start items-center py-10">
      <div className="text-center text-4xl font-semibold mb-10 text-gray-800">
        <h1>Personal Info</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        <img 
          src={user1} 
          alt="User Profile" 
          className="w-48 h-48 rounded-full mb-5 md:mb-0 md:mr-10 shadow-lg" 
        />
        <div className="mx-5 bg-white rounded-xl shadow-lg p-6 w-full md:w-80">
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">First Name</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">Harshith</div>
          </div>
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Last Name</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">Sai</div>
          </div>
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Email</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">harshith@gmail.com</div>
          </div>
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Date of Birth</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">July 7, 2005</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
