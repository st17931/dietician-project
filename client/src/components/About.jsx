import React from "react";
import Image2 from "../assets/Image2.png";
import Google from "../assets/google.png";
// import CardMarquee from './CardMarquee'

const About = () => {
  return (
    <div className="bg-gray-50" id="about-us">
      {/* <div className="flex flex-row justify-between items-center bg-gray-100 p-10 mx-20">
                <div className="flex flex-col">
                    <h1 className="text-md text-pink-500 font-bold">About</h1>
                    <h2 className="text-4xl text-gray-600">Respect Your Body,
                        It’s the Only One You Get
                    </h2>
                    <h4 className='text-sm text-gray-600'>It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        point of using Lorem Ipsum is
                    </h4>
                </div>
            </div> */}
      <div className="flex min-h-80 flex-col items-center justify-center bg-gray-100  dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-12 grid w-fit grid-cols-1 gap-8 md:mx-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-md font-bold text-pink-500">About</h2>
              <h2 className="text-4xl text-gray-600 dark:text-gray-200">
                Respect Your Body, It’s the Only One You Get
              </h2>
              <h4 className="text-sm text-gray-600 dark:text-gray-300">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                point of using Lorem Ipsum is
              </h4>
              <div className="flex flex-col justify-between">
                <div className="m-2 w-full rounded-lg bg-white p-6 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-none dark:bg-slate-950">
                  <div className="relative flex flex-wrap items-center justify-between sm:space-x-4">
                    <div className="lg:max-w-[320px]">
                      <p className="text-2xl font-medium text-teal-400">
                        Motivation
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        It is a long established fact that a reader will be
                        distracted{" "}
                      </p>
                    </div>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Profile 1"
                      className="sm:h-30 mt-4 rounded sm:mt-0 sm:w-40 "
                    />
                  </div>
                </div>
                <div className="m-2 w-full rounded-lg bg-black p-6 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-none dark:bg-slate-200">
                  <div className="flex flex-wrap items-center justify-between sm:space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Profile 1"
                      className="sm:h-30 mb-4 -skew-y-6 rounded sm:mb-0 sm:w-40"
                    />
                    <div className="lg:max-w-[320px]">
                      <p className="text-2xl font-medium text-teal-400">
                        Inspire
                      </p>
                      <p className="text-gray-200 dark:text-gray-900">
                        will be distracted by readable content using Lorem Ipsum{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="m-2 w-full rounded-lg bg-white p-6 shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-none dark:bg-slate-950">
                  <div className="flex flex-wrap items-center justify-between sm:space-x-4">
                    <div className="md:max-w-[400px] lg:max-w-[320px]">
                      <p className="text-2xl font-medium text-teal-400">
                        Discipline
                      </p>
                      <p className="text-wrap  text-gray-700 dark:text-gray-300">
                        set orderliness, efficiency, punctuality, organization,
                        and focus on tasks{" "}
                      </p>
                    </div>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1674440623627-8258b3698047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Profile 1"
                      className="sm:h-30 mt-4 skew-y-6 rounded sm:mt-0 sm:w-40"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:mt-20 lg:block">
              <img src={Image2} alt="Image" className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="container mx-auto bg-purple-700/30 px-4 py-8">
          <div className="m-10 flex flex-col justify-center gap-4 md:flex-row md:flex-wrap md:gap-20">
            <div className="flex rounded-full bg-white p-4 text-white shadow-lg hover:animate-bounce dark:bg-slate-900">
              <h1 className="rounded-full bg-black px-5 py-3 text-4xl font-bold">
                1
              </h1>
              <p className="p-5 font-bold text-black dark:text-slate-200">
                Motivation
              </p>
            </div>
            <div className="flex rounded-full bg-white p-4 text-white shadow-lg hover:animate-bounce dark:bg-slate-900">
              <h1 className="rounded-full bg-black px-5 py-3 text-4xl font-bold">
                2
              </h1>
              <p className="p-5 font-bold text-black dark:text-slate-200">
                Inspire
              </p>
            </div>
            <div className="flex rounded-full bg-white p-4 text-white shadow-lg hover:animate-bounce dark:bg-slate-900">
              <h1 className="rounded-full bg-black px-5 py-3 text-4xl font-bold">
                3
              </h1>
              <p className="p-5 font-bold text-black dark:text-slate-200">
                Discipline
              </p>
            </div>
            <div className="flex rounded-full bg-white p-4 text-white shadow-lg hover:animate-bounce dark:bg-slate-900">
              <div className="rounded-full bg-black p-3 text-4xl font-bold">
                <img
                  src={Google}
                  alt="Profile 1"
                  className="h-10 w-10 rounded"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="p-2 font-bold text-black dark:text-slate-200">
                  Review on Google
                </span>
                <span className="p-1 text-white">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>
        </div>

        {/* <CardMarquee /> */}
      </div>
    </div>
  );
};

export default About;
