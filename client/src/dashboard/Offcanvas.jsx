import React, { useState } from "react";
import DashFooter from "./DashFooter";
import { Link, NavLink } from "react-router-dom";
import { verticalNav } from "../constants";
import { IoIosArrowDown } from "react-icons/io";

import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrResources } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { GiCycle } from "react-icons/gi";

const Offcanvas = () => {
  const [show, setShow] = useState(false);

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen  bg-gray-800 text-white  p-6 flex flex-col z-50">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">TestersHive</h2>
        <p className="text-sm">harshith sai</p>
        <p className="text-sm">Tester ID: 4834869</p>
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
          {/* {show ? (
            <div className="text-xs flex flex-col pt-3 pb-3">
              {verticalNav.map((id, ans) => (
                <NavLink
                  to={id.to}
                  key={ans}
                  className={(e) =>
                    e.isActive ? "pt-1 underline-offset-1 show" : ""
                  }
                >
                  {id.heading}
                </NavLink>
              ))}
            </div>
          ) : (
            ""
          )} */}
          <li className="mb-2 mt-5">
            <NavLink
              to="/academy"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <GrResources size={18}></GrResources>
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
              to="/ProjectMatter"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              <div className="flex items-center gap-2">
                <GrProjects size={18}></GrProjects>
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
            <NavLink
              to="/SignOut"
              className={(e) => (e.isActive ? "border-1 block" : "")}
            >
              Sign Out
            </NavLink>
          </li>
        </ul>
      </nav>
      <DashFooter />
    </aside>
  );
};

export default Offcanvas;
