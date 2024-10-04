import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Import spinner icon
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000);
  };

  const handleLinkClick = (path) => {
    setLoading(true);
    navigate(path);
    setLoading(false);
  };

  return (
    <>
      <div className="bg-black flex justify-center">
        {display && (
          <div className="flex items-center">
            <header className="text-center bg-black text-white pt-2 pb-2 text-sm">
              🏆 Ensuring Excellence with Cutting-Edge Software 🔎
            </header>
          </div>
        )}
      </div>
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b ">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img className="w-36 mr-2" src={logo} alt="Logo" />
              </Link>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-8 font-medium text-[#787878] tracking-normal ">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className={(e) => (e.isActive ? "activelink" : "")}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center space-x-6 items-center">
              <button
                onClick={() => handleNavigation("/login")}
                className="py-2 px-3 border rounded-lg "
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation("/personal")}
                className=" py-2 px-3 rounded-lg bg-gradient-to-r from-black to-blue-950  text-white font-medium"
              >
                Get Started
              </button>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-slate-400 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <NavLink
                      to={item.href}
                      className={(e) => (e.isActive ? "" : "")}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="py-2 px-3 border rounded-md  hover:scale-105 hover:shadow-xl focus:outline-dashed"
                  onClick={() => handleNavigation("/login")}
                >
                  Login
                </a>
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-black to-blue-950 shadow-lg hover:shadow-xl focus:outline-dashed text-white font-medium"
                  onClick={() => handleNavigation("/personal")}
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>

        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-30">
            <AiOutlineLoading3Quarters className="text-white text-5xl animate-spin" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
