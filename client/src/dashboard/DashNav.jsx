import React, { useState, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";

const DashNav = ({ val }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{val}</h1>
      <div className="flex items-center space-x-4">
        <div className="flex flex-row-reverse">
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          <NavLink
            to={"/Notify"}
            className={(e) =>
              e.isActive ? "p-2 rounded-full bg-gray-200" : ""
            }
          >
            <FaBell className="text-xl" />
          </NavLink>
        </div>
        <Avatar
          color={Avatar.getRandomColor("sitebase", ["blue"])}
          name={localStorage.getItem("email")}
          size="35"
          round
        />
      </div>
    </div>
  );
};

export default DashNav;
