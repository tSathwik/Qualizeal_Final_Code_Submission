import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import MainContent from "./MainContent"; // Import MainContent component
import Offcanvas from "./Offcanvas";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming you store user authentication status in local storage or context
    const token = localStorage.getItem("token"); // Replace with your actual method to get the token

    if (!token) {
      console.log("User is not authenticated. Redirecting to login...");
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]); // Dependency array includes navigate

  return (
    <div className="ml-64 min-h-screen flex">
      <Offcanvas />
      <MainContent />
    </div>
  );
};

export default Dashboard;
