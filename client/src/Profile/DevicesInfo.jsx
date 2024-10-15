import React, { useState } from "react";
import { useDataContext } from "../DataContext";

const DevicesInfo = () => {
  const { userData, updateDeviceInfo } = useDataContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    computer: userData.computer || "",
    version: userData.version || "",
    language: userData.language || "",
    mobile: userData.mobile || "",
    model: userData.model || "",
    os: userData.os || "",
  });

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      // Reset form data when editing is canceled
      setFormData({
        computer: userData.computer || "",
        version: userData.version || "",
        language: userData.language || "",
        mobile: userData.mobile || "",
        model: userData.model || "",
        os: userData.os || "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      await updateDeviceInfo(formData); // Ensure this is an async function
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error); // Handle error
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-start items-center py-10">
      <div className="text-center text-4xl font-semibold mb-10 text-gray-800">
        <h1>Devices Info</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        <div className="mx-5 bg-white rounded-xl shadow-lg p-6 w-full md:w-80">
          {/* Edit Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleEditMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Computer */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">
              Your Computer
            </h2>
            {isEditing ? (
              <input
                type="text"
                name="computer"
                value={formData.computer}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.computer}
              </div>
            )}
          </div>

          {/* Version */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Version</h2>
            {isEditing ? (
              <input
                type="text"
                name="version"
                value={formData.version}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.version}
              </div>
            )}
          </div>

          {/* Language */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Language</h2>
            {isEditing ? (
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.language}
              </div>
            )}
          </div>

          {/* Mobile */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Your Mobile</h2>
            {isEditing ? (
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.mobile}
              </div>
            )}
          </div>

          {/* Model */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Model</h2>
            {isEditing ? (
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.model}
              </div>
            )}
          </div>

          {/* OS */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">OS</h2>
            {isEditing ? (
              <input
                type="text"
                name="os"
                value={formData.os}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.os}
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

export default DevicesInfo;
