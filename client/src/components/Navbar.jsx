import React, { useState } from "react";
import logo from "../assets/Workout.gif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex flex-wrap items-center bg-white px-6 py-2 shadow-md dark:bg-stone-950 dark:text-slate-100 lg:px-16 lg:py-0">
        <div className="flex flex-1 items-center justify-between">
          <a href="/" className="flex text-lg font-semibold">
            <img
              src={logo}
              width="60"
              height="60"
              className="p-2"
              alt="Fit Logo"
            />
            <div className="mt-3 text-2xl">Fitness</div>
          </a>
        </div>
        <label
          htmlFor="menu-toggle"
          className="block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current text-gray-900 dark:text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div
          className={`w-full lg:flex lg:w-auto lg:items-center ${isOpen ? "block" : "hidden"}`}
          id="menu"
        >
          <nav>
            <ul className="items-center gap-x-5 pt-4 text-center text-xl md:gap-x-4 lg:flex lg:pt-0  lg:text-lg">
              <li className="py-2 lg:py-0 ">
                <Link
                  className="p-4 hover:border-b-4 hover:border-lime-400 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-slate-950"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="py-2 lg:py-0 ">
                <a
                  className="p-4 hover:border-b-4 hover:border-lime-400 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-slate-950"
                  href="#about-us"
                >
                  About
                </a>
              </li>
              {/* <li className="py-2 lg:py-0 ">
                                <a
                                    className="p-4 hover:border-b-4 hover:border-lime-400 hover:bg-gray-100 dark:hover:text-slate-950 dark:hover:bg-gray-300"
                                    href="#"
                                >
                                    Sessions
                                </a>
                            </li> */}
              {/* <li className="py-2 lg:py-0 ">
                                <a
                                    className="p-4 hover:border-b-4 hover:border-lime-400 hover:bg-gray-100 dark:hover:text-slate-950 dark:hover:bg-gray-300"
                                    href="#trainer"
                                >
                                    Trainer
                                </a>
                            </li> */}
              <li className="py-2 lg:py-0 ">
                <a
                  className="p-4 hover:border-b-4 hover:border-lime-400 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-slate-950"
                  href="#plans"
                >
                  Plans
                </a>
              </li>
              <li className="py-2 lg:py-0 ">
                <a
                  className="p-4 hover:border-b-4 hover:border-lime-400 hover:bg-gray-100 dark:hover:bg-gray-300 dark:hover:text-slate-950"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-none">
                <Link
                  to="/auth/login"
                  className="text-md mt-4 inline-block rounded-full border border-lime-500 bg-lime-400 px-4 py-2 font-bold leading-none text-black hover:border-red-500 hover:bg-white hover:text-red-500 lg:mt-0"
                >
                  Book Appointment
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
