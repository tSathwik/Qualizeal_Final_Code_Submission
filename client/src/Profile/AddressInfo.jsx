import React, { useState } from "react";
import { useDataContext } from "../DataContext";
import map from "../assets/map.png";

const AddressInfo = () => {
  const { userData, updateAddressInfo } = useDataContext(); // Change to use separate function
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    city: userData.city || "",
    zip: userData.zip || "",
    country: userData.country || "",
  });

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setFormData({
        city: userData.city || "",
        zip: userData.zip || "",
        country: userData.country || "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    await updateAddressInfo(formData); // Use specific function
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-start items-center py-10">
      <div className="text-center text-4xl font-semibold mb-10 text-gray-800">
        <h1>Address Info</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
        <img
          src={map}
          alt="map"
          className="w-auto h-60 mb-5 md:mb-0 mr-20 shadow-lg"
        />
        <div className="mx-5 bg-white rounded-xl shadow-xl p-6 w-full md:w-80">
          {/* Edit Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleEditMode}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* City */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">City</h2>
            {isEditing ? (
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.city}
              </div>
            )}
          </div>

          {/* Zip or Postal Code */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">
              Zip or Postal Code
            </h2>
            {isEditing ? (
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.zip}
              </div>
            )}
          </div>

          {/* Country */}
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Country</h2>
            {isEditing ? (
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            ) : (
              <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">
                {userData.country}
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

export default AddressInfo;
