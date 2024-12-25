import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = formData.userEmail && formData.password;
    if (!isFormValid) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.email);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-0 relative">
      <ToastContainer />
      <div className="relative w-full lg:w-1/2 h-96 lg:h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04befe] to-[#4481eb] rounded-full h-[100%] lg:h-[100%] -translate-y-1/2 lg:-translate-y-1/4"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center lg:text-left lg:px-0 lg:left-20">
          <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            New USER?
          </h1>
          <p className="text-sm lg:text-base text-white mb-6">
            If not registered, then sign up.
          </p>
          <button
            className="text-white border-white border-2 py-2 px-6 lg:py-4 lg:px-10 rounded-full"
            onClick={() => navigate("/personal")}
          >
            SIGN UP
          </button>
          <img
            src="/src/assets/log.svg"
            alt="Illustration"
            className="mt-8 h-40 lg:h-64 mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-16 items-center lg:items-start relative z-10 mt-12 lg:mt-0 translate-x-10 lg:translate-x-20">
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 text-center lg:text-left mb-8">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="userEmail"
                className="block text-sm lg:text-base font-medium text-gray-700"
              >
                UserEmail
              </label>
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm lg:text-base font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-full bg-gray-200 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="w-full lg:w-28 px-4 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
