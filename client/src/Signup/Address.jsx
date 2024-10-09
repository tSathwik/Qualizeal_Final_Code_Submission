import React, { useState } from "react";
import SignupImage from "../Signup/SignupImage";
import { useNavigate } from "react-router-dom";

// Example list of countries; you might want to use a more comprehensive list
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "Russia",
  "Brazil",
  "South Africa",
  // Add more countries as needed
];

const Address = () => {
  const [formData, setFormData] = useState({
    city: "",
    zip: "",
    country: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "HTTP error!");
      }

      navigate("/Devices");
    } catch (error) {
      console.error("Error:", error);
      alert(
        "An error occurred while submitting your information: " + error.message
      );
    }
  };

  const navigate = useNavigate();

  const isFormValid = () => {
    return formData.city && formData.zip && formData.country;
  };

  const handleBackClick = () => {
    navigate("/Personal");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />
      {/* Right Side - Stylish Form Container */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl">
        {/* Alert Message */}
        {alertMessage && (
          <div className="mb-4 p-4 text-white bg-red-500 rounded-lg shadow-lg">
            {alertMessage}
          </div>
        )}
        <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
          <h2 className="text-3xl font-extrabold mb-2">Step 2:</h2>
          <h1 className="text-4xl font-serif mb-8">Add Your Address</h1>
          <p className="text-base font-light mb-8">
            By telling us where you live, you enable our customers to truly test
            their products and software throughout the globe - in the hands of
            real people like you. All fields required.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-xl shadow-md mt-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="city"
              >
                City*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="zip"
              >
                Zip or postal code*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="number"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="country"
            >
              Country*
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-start mt-auto">
              <button
                className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] mt-4 shadow-lg transition-transform duration-300 hover:scale-105"
                type="button"
                onClick={handleBackClick}
              >
                &lt; Previous
              </button>
            </div>
            <div className="flex justify-end mt-auto">
              <button
                className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] mt-4 shadow-lg transition-transform duration-300 hover:scale-105"
                type="submit"
              >
                Next &gt;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
