import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <Marquee className="text-lite mt-12 bg-black text-6xl font-bold uppercase text-white dark:bg-lime-400 dark:text-black">
      <div className="m-0 p-5">
        <p>
          Your{" "}
          <a className="underline decoration-pink-500 decoration-wavy">
            Fitness
          </a>{" "}
          Journey Starts Here. Train Hard,{" "}
          <a className="underline decoration-pink-500 decoration-wavy">
            Live Easy
          </a>
          . Your Health, My Mission. Together, We
          <a className="underline decoration-pink-500 decoration-wavy">
            {" "}
            Conquer
          </a>
        </p>
      </div>
    </Marquee>
  );
};

export default MarqueeText;
