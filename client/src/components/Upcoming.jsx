import React from "react";
import MarqueeText from "./MarqueeText";
import Photo1 from "../assets/Photo1.png";
import Photo2 from "../assets/Photo2.png";
import Photo3 from "../assets/Photo3.png";

const Upcoming = () => {
  return (
    // <div className=' bg-gradient-to-t from-lime-200 from-10% via-lime-500 via-30% to-emerald-500 to-90%'>
    <div className=" bg-gray-100 dark:bg-slate-900">
      <div className="mx-20 flex flex-wrap items-center justify-between gap-4 bg-none p-10">
        <div className="flex flex-col">
          <h1 className="text-md font-bold text-pink-500">
            Our Fitness Trainings
          </h1>
          <h2 className="text-4xl text-gray-600 dark:text-gray-200">
            Upcoming Classes
          </h2>
        </div>
        <button className="rounded bg-black px-4 py-2 font-bold text-white hover:bg-gray-800">
          More
        </button>
      </div>
      <div className="flex flex-wrap justify-center bg-none px-3">
        <div className="flex max-w-7xl flex-wrap justify-center">
          <div className="w-full p-4 transition delay-150 duration-300  ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse hover:bg-none sm:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-white/60 shadow-lg dark:bg-slate-950">
              <img
                src={Photo1}
                alt="Card"
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Card Title
                </h3>
                <p className="mb-4 text-gray-700 dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Numquam, voluptatem.
                </p>
                <a href="#" className="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse hover:bg-none sm:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-white/60 shadow-lg dark:bg-slate-950">
              <img
                src={Photo2}
                alt="Card"
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Card Title
                </h3>
                <p className="mb-4 text-gray-700 dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, ratione.
                </p>
                <a href="#" className="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full p-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:animate-pulse hover:bg-none sm:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-white/60 shadow-lg dark:bg-slate-950">
              <img
                src={Photo3}
                alt="Card"
                className="h-60 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Card Title
                </h3>
                <p className="mb-4 text-gray-700 dark:text-slate-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad,
                  dignissimos.
                </p>
                <a href="#" className="text-blue-500">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeText />
    </div>
  );
};

export default Upcoming;
