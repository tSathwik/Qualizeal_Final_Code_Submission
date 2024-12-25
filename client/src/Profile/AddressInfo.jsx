import React, { useState } from "react";
import { useDataContext } from "../DataContext";

const AddressInfo = () => {
  const { userData, updateAddressInfo } = useDataContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    city: userData.city || "",
    zip: userData.zip || "",
    country: userData.country || "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData({
        city: userData.city || "",
        zip: userData.zip || "",
        country: userData.country || "",
      });
      setErrorMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }
    setIsSaving(true);
    try {
      await updateAddressInfo(formData);
      setIsEditing(false);
    } catch (error) {
      setErrorMessage("Failed to update information. Please try again.");
    }
    setIsSaving(false);
  };

  const validateForm = () => {
    if (!formData.city || !formData.zip || !formData.country) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const renderInputField = (label, name, required = false) => (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {isEditing ? (
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          required={required}
        />
      ) : (
        <div className="mt-2 p-3 block w-full bg-gray-100 text-gray-700 rounded-lg">
          {formData[name] || "N/A"}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-5 px-6 text-center">
          <h1 className="text-2xl font-semibold">Address Information</h1>
        </div>

        <div className="px-8 py-10">
          {/* Edit Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleEditMode}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 gap-8">
            {renderInputField("City", "city", true)}
            {renderInputField("Zip or Postal Code", "zip", true)}
            {renderInputField("Country", "country", true)}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
          )}

          {/* Save Button */}
          {isEditing && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className={`px-6 py-3 rounded-lg text-white font-medium transition duration-200 ${
                  isSaving ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
                }`}
              >
                {isSaving ? "Saving..." : "Save"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
