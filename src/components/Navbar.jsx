import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Backdrop from "../components/Backdrop";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logout, isShowLogin, isShowRegister, toggleLogin, toggleRegister } = useAuth();
  
  const handleLoginClick = () => {
    toggleLogin();
  };
  
  const handleRegisterClick = () => {
    toggleRegister();
  };
  <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>;
  return (
    <>
      <nav class="bg-white border-gray-200 py-2.5">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" class="flex items-center">
            <img
              src="https://www.svgrepo.com/show/317398/travel.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <NavLink to="/">
              <span class="self-center text-xl whitespace-nowrap" style={{fontWeight: "900", fontSize: "1.5rem", color: "#0d4da4"}}>
                Thomas<span style={{color: "#eed300"}}>Cook</span>
              </span>
            </NavLink>
          </a>
          <div class="flex items-center lg:order-2">
            <div class="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>
            {user ? (
              <>
              <button
                class="text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                onClick={() => logout()}
                style={{fontWeight: "700"}}
              >
                Logout
              </button>
              </>
            ) : (
              <>
                <button
                  class="text-white bg-blue-600 hover:bg-blue-800 transition duration-300 ease-in-out focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  onClick={() => handleLoginClick()}
                  style={{ marginRight: "7px", fontWeight: "700" }}
                >
                  Log In
                </button>
                <button
                  class="text-white bg-blue-600 hover:bg-blue-800 transition duration-300 ease-in-out focus:ring-4 focus:ring-black-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
                  onClick={() => handleRegisterClick()}
                  style={{fontWeight: "700"}}
                >
                  Register
                </button>
              </>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="true"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/packages"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Packages
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/hotels"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Hotels
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/flights"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Flights
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/cruises"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Cruise
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  style={{fontWeight: "700"}}
                  className="block py-2 pl-3 pr-4 text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {isShowLogin && <Login></Login>}
        {isShowRegister && <Register></Register>}
        {isShowLogin && <Backdrop showModal={toggleLogin}></Backdrop>}
        {isShowRegister && (
          <Backdrop showModal={toggleRegister}></Backdrop>
        )}
      </nav>
    </>
  );
};

export default Navbar;
