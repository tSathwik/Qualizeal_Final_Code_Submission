import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const SignupImage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative w-full md:w-1/3">
      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <img className="w-24 md:w-36" src={logo} alt="Logo" />
        </Link>
      </div>
      <img
        src="/src/assets/Designer.jpg"
        alt="Sample"
        className="object-cover w-full h-64 md:h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
          Welcome to the world's largest community of testers.
        </h2>
        <p className="text-sm md:text-lg text-center mb-4">
          Work with some of the most influential brands on the planet and earn
          money while doing it.
        </p>
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-red-400 to-red-600 py-2 md:py-4 px-6 md:px-10 shadow-lg hover:shadow-xl focus:shadow-xl focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-white rounded-3xl text-white transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignupImage;
