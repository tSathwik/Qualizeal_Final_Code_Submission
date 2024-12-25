import React, { useEffect } from "react";
import MainContent from "./MainContent"; // Import MainContent component
import Offcanvas from "./Offcanvas";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../DataContext";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Assuming you store user authentication status in local storage or context
//     const token = localStorage.getItem("token"); // Replace with your actual method to get the token

//     if (!token) {
//       console.log("User is not authenticated. Redirecting to login...");
//       navigate("/login"); // Redirect to login if not authenticated
//     }
//   }, [navigate]); // Dependency array includes navigate

//   return (
//     <div className="ml-64 min-h-screen flex">
//       <Offcanvas />
//       <MainContent />
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.js

const Dashboard = () => {
  const navigate = useNavigate();
  const { updateUserId } = useDataContext();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("User is not authenticated. Redirecting to login...");
      navigate("/login");
    } else {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        // Update the userId in DataContext to trigger data refetch
        updateUserId(storedUserId);
      }
    }
  }, [navigate, updateUserId]);

  return (
    <div className="ml-64 min-h-screen flex">
      <Offcanvas />
      <MainContent />
    </div>
  );
};

export default Dashboard;
