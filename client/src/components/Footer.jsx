import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-20 bg-[rgb(60,64,66)] p-6 text-white flex justify-between flex-wrap">
      <div className="flex gap-3 text-[12px]">
        <NavLink
          to="/Privacy"
          className={(e) => {
            return e.isActive ? "under" : "";
          }}
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="/Terms"
          className={(e) => {
            return e.isActive ? "under" : "";
          }}
        >
          Terms & Conditions
        </NavLink>
        <NavLink
          to="/Guide"
          className={(e) => {
            return e.isActive ? "under" : "";
          }}
        >
          Guidelines
        </NavLink>
        <NavLink
          to="/help"
          className={(e) => {
            return e.isActive ? "under" : "";
          }}
        >
          Help & Support
        </NavLink>
      </div>
      <div>
        <p className="text-[12px]">©2023 Yourcompany</p>
      </div>
    </footer>
  );
};

export default Footer;
