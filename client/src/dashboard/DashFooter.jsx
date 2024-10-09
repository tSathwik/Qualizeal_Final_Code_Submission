import React from 'react';
import { Link, NavLink } from "react-router-dom";

const DashFooter = () => {
  return (
    <footer className="mt-auto text-xs text-gray-500">
      <ul className="space-y-2">
        <li > 
          <div className="hover:text-white">
            <NavLink to="/Guide"> TestersHive Guidelines </NavLink> 
          </div>
        </li>
        <li>
        <div className="hover:text-white">
            <NavLink to="/Terms"> Terms & Conditions </NavLink> 
          </div>
        </li>
        <li>
        <div className="hover:text-white">
            <NavLink to="/Policy"> Privacy Policy </NavLink> 
          </div>
        </li>
        <li>
        <div className="hover:text-white">
            <NavLink to=""> Cookie Settings </NavLink> 
          </div>
        </li>
      </ul>
      <p className="text-xs mt-4 text-gray-500">© TestersHive</p>
    </footer>
  );
};

export default DashFooter;
