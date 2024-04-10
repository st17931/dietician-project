import { useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Users from "./Users";
import Requests from "./Requests";
import SingleUser from "./SingleUser";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

const Dashboard = (props) => {
  const [toggle, setToggle] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="flex">
      <header className="absolute w-full md:w-72 md:min-w-72 lg:relative">
        <Sidebar open={toggle} isAuthenticated={isAuthenticated} />
      </header>
      <main className="container h-full min-h-screen bg-slate-50 px-2">
        <button
          className="m-2 rounded-md p-2 shadow lg:hidden"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </button>

        {/* <Home/> */}
        {/* {props.children}
        {console.log(props.children)} */}
        {/* <Users /> */}
        {/* <Requests /> */}
        {/* <SingleUser /> */}
        {/* {props.children} */}


        <Outlet />
        
      </main>
    </div>
  );
};

export default Dashboard;
