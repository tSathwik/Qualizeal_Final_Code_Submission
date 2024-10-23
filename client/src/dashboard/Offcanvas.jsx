import React, { useState } from "react";
import DashFooter from "./DashFooter";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrResources, GrProjects } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import { GoCodeSquare } from "react-icons/go";
import { FaUsers } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDataContext } from "../DataContext";

const Offcanvas = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const { userData, resetUserData } = useDataContext();

  const fullname = `${userData.first_name} ${userData.last_name}`;

  const handleSignOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.clear();
    console.log("User signed out");
    navigate("/");
  };

  const handleProjectClick = () => {
    localStorage.setItem("projectsChecked", "true");
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white p-6 flex flex-col z-50">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">TestersHive</h2>
        <p className="text-sm">{fullname || "Guest User"}</p>
        <p className="text-sm">Tester ID: {userData.userId || "123456"}</p>
        <p className="mt-2 text-xs text-gray-400">UNRATED</p>
      </div>

      <nav className="block py-2 rounded">
        <ul>
          <li className="mb-2">
            <NavLink
              to="/dashboard"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <AiFillHome size={18} />
                <span>Home</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 mt-5">
            <NavLink
              to="/Profile"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <CgProfile size={18} />
                <span>Tester Profile</span>
              </div>
            </NavLink>
          </li>
          {/*
          <li className="mb-2 mt-5">
            <NavLink
              to="/CommunityProfile"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <FaUsers size={18} />
                <span>Community Profile</span>
              </div>
            </NavLink>
          </li>*/}
          <li className="mb-2 mt-5">
            <NavLink
              to="/academy"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <GrResources size={18} />
                <span>Academy</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 mt-5">
            <NavLink
              to="/Testcycle"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <GiCycle size={18} />
                <span>Test Cycle</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 mt-5">
            <NavLink
              to="/Testcase"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <GoCodeSquare size={18} />
                <span>Test Cases</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 mt-5">
            <NavLink
              to="/ProjectMatter"
              className={(e) => (e.isActive ? "border-1 block" : "")}
              onClick={handleProjectClick}
            >
              <div className="flex items-center gap-2">
                <GrProjects size={18} />
                <span>Projects</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 mt-5">
            <NavLink
              to="/Payment"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <MdPayment size={18} />
                <span>Payments</span>
              </div>
            </NavLink>
          </li>
          <li className="mb-2 mt-5">
            <button
              onClick={handleSignOut}
              className="text-left w-full flex items-center gap-2"
            >
              <FiLogOut size={18} />
              <span>Sign Out</span>
            </button>
          </li>
        </ul>
      </nav>
      <DashFooter />
    </aside>
  );
};

export default Offcanvas;
