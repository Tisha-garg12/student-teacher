import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const isRootRoute = location.pathname === "/";

  const userData =
    localStorage.getItem("Student Name") ||
    localStorage.getItem("Teacher Name") ||
    localStorage.getItem("Admin Name");

  const changeHandler = () => {
    localStorage.removeItem("Student Name");
    localStorage.removeItem("Teacher Name");
    localStorage.removeItem("Admin Name");
    toast.success("Logout Successfully");
    navigate("/");
  };

  const { theme, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  return (
    <>
      <nav className="dark:bg-slate-950 bg-gray-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link
            className="text-white text-xl font-bold"
            to="/"
            onClick={() => {
              if (userData) {
                toast.success("Welcome to TeachHub");
              }
            }}
          >
            TeachHub
          </Link>

          <div className="flex items-center w-auto">
            {userData && (
              <span className="text-white text-lg mr-4">
                Welcome, {userData}!
              </span>
            )}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full bg-primary-200 text-white hover:bg-primary-300 focus:outline-none"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            {userData && (
              <button
                className="text-white text-2xl ml-4"
                type="button"
                onClick={changeHandler}
              >
                <IoIosLogOut />
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
