import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Destructure form data
      const { email, password } = formData;

      // Validate form fields
      if (!email || !password) {
        toast.error("Email and password are required for login");
        return;
      }

      // Send POST request to backend for login
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // Include credentials (cookies) in the request
      });

      const data = await response.json();

      // Handle user not registered or wrong cred
      if (!response.ok) {
        toast.error(data.message);
      }

      if (response.ok) {
        // Handle success response and store token in cookie redirect to multi-stack form
        document.cookie = `token=${data.token}; path=/`; // Store token in a cookie named "token"
        toast.success(
          data.message,
          setTimeout(() => {
            navigate("/UserDetailForm");
          }, 3000),
        );
      } else {
        // Handle error response and display error message using toast.error()
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
      // Handle network errors or other exceptions
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <section className="relative">
      <ToastContainer />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-20 sm:p-10">
        <div className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:justify-center lg:px-8 lg:py-16 xl:justify-center">
          <Slide>
            <div className=" min-w-fit rounded-lg bg-slate-200/50 px-10 py-10 backdrop-blur-sm">
              {/* {We can add a logo here} */}
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 ">
                Don&apos;t have an account?{" "}
                <Link
                  to="/auth/signup"
                  title="create free account"
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              <form
                onSubmit={handleSubmit}
                action="#"
                method="POST"
                className="mt-8 sm:w-[500px]"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <a
                        href="#"
                        title="Forgot password"
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="flex h-10 w-full rounded-md border-gray-300 bg-slate-200 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-indigo-800 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-800"
                    >
                      Login to Dashboard
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Slide>
          <Link
            to="/"
            className="mt-5 rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-white hover:border-transparent hover:bg-blue-500 hover:text-white"
          >
            Go to Home Page
          </Link>
        </div>
      </div>
      <div className="relative h-svh translate-x-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-slate-950 opacity-30"></div>
        <img
          src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-full w-full object-cover lg:object-left-top"
        />
      </div>
    </section>
  );
}

export default Login;
