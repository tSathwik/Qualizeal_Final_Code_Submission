import React, { useState } from "react";
import SignupImage from "../Signup/SignupImage";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    stayInformed: false,
    termsAccepted: false,
    privacyAccepted: false,
    otp: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      navigate("/otp");
    } else {
      setAlertMessage("Please fill in all the details before proceeding.");
    }
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setAlertMessage("Passwords do not match.");
      return;
    }

    // Check if terms and privacy policies are accepted
    if (!formData.termsAccepted || !formData.privacyAccepted) {
      setAlertMessage(
        "You must accept the terms of use and the privacy policy to proceed."
      );
      return;
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_DOMAIN}/signup/password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/otp");
      }
      if (!response.ok) {
        throw new Error("HTTP error!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting your information.");
    }
  };

  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      formData.password &&
      formData.confirmPassword &&
      formData.stayInformed &&
      formData.termsAccepted &&
      formData.privacyAccepted
    );
  };

  const handleBackClick = () => {
    navigate("/devices");
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
          <h2 className="text-3xl font-extrabold mb-2">Step 4:</h2>
          <h1 className="text-4xl font-serif mb-8">The Last Step</h1>
          <p className="text-base font-light mb-8">
            Almost done! Please create a password for your account. Then review
            and accept our terms of use, TestersHive Guidelines, and privacy &
            security policy to complete the setup process.
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
                htmlFor="password"
              >
                Password*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full md:w-1/2">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="otp"
            >
              OTP*
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
              type="button"
            >
              Send OTP
            </button>

            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
              type="submit"
            >
              Submit OTP
            </button>
          </div> */}

          {/* Checkboxes */}
          <div className="mb-4 mt-3 bg-blue-50 w-full px-4 py-6 rounded-lg shadow-sm transition-transform duration-300 hover:scale-105">
            <label className="block text-blue-500 text-sm font-semibold mb-2">
              <input
                type="checkbox"
                name="stayInformed"
                checked={formData.stayInformed}
                onChange={handleChange}
                className="mr-2"
              />
              STAY INFORMED! (optional)
            </label>
            <p className="text-gray-700">
              Please keep me up-to-date via email on the latest projects and
              updates from TestersHive. This is not required but highly
              recommended in order to receive info as it becomes available.
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I have read and accept the TestersHive Terms of Use and the
              TestersHive Guidelines
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="mr-2"
                required
              />
              I have read and accept the Privacy & Security Policy
            </label>
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
              type="button"
              onClick={handleBackClick}
            >
              &lt; Previous
            </button>

            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
              type="submit"
              onClick={handleClick}
            >
              Complete &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complete;
