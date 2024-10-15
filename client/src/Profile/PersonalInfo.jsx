import React, { useState } from "react";
import { useDataContext } from "../DataContext";
import user1 from "../assets/profile-pictures/user1.jpg";

const PersonalInfo = () => {
  const { userData, updatePersonalInfo } = useDataContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: userData.first_name || "",
    last_name: userData.last_name || "",
    email: userData.email || "",
    dob: userData.dob || "",
  });

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Reset form data to current userData when cancelling edit mode
      setFormData({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
        dob: userData.dob || "",
      });
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    updatePersonalInfo(formData); // This will call the context function to update data
    setIsEditing(false);
  };

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
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleEditMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* First Name */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">First Name</h2>
            {isEditing ? (
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.first_name}
              </div>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Last Name</h2>
            {isEditing ? (
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.last_name}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Email</h2>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.email}
              </div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">
              Date of Birth
            </h2>
            {isEditing ? (
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.dob
                  ? new Date(userData.dob).toLocaleDateString()
                  : "N/A"}
              </div>
            )}
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
