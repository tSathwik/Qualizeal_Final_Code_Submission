import React from "react";
import MainContent from "./MainContent"; // Import MainContent component
import Offcanvas from "./Offcanvas";

const Dashboard = () => {
  return (
    <div className="ml-64 min-h-screen flex">
      <Offcanvas />
      <MainContent />
    </div>
  );
};

export default Dashboard;
