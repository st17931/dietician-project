import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import UserProgress from "./pages/UserProgress.jsx";
import UserDetailForm from "./pages/UserDetailForm.jsx";
import AdminPanel from "./pages/Dashboard/Admin/AdminPanel.jsx";
import UserTicket from "./pages/Dashboard/Admin/UserTicket.jsx";
import Dashboard from "./pages/Dashboard/Admin/Dashboard.jsx";
import FitnessCoach from "./pages/Dashboard/User/FitnessCoach.jsx";
import Users from "./pages/Dashboard/Admin/Users.jsx";
import AdminHome from "./pages/Dashboard/Admin/Home.jsx";
import Requests from "./pages/Dashboard/Admin/Requests.jsx";
import SingleUser from "./pages/Dashboard/Admin/SingleUser.jsx";
import { useSelector } from "react-redux";

const App = () => {

  const isAdmin = useSelector((state)=> state.loginDetail.isAdmin)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />  
          <Route path="/UserDetailForm" element={<UserDetailForm />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/UserProgress" element={<UserProgress />} />
          <Route path="/super" element={<AdminPanel />} />
          <Route path="/super/ut" element={<UserTicket />} />
          {isAdmin && <Route path="/dashboard/admin" element={<Dashboard />} >
            <Route path="home" element={<AdminHome/>} />
            <Route path="users" element={<Users/>}/>
            <Route path="users/:id" element={<SingleUser/>} />
            <Route path="requests" element={<Requests/>} />
          </Route>}
          
          <Route path="/fitness" element={<FitnessCoach />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
