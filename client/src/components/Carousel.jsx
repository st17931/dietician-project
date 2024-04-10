import { useState } from "react";
import Image2 from "../assets/bg-1.jpg";
import Image3 from "../assets/bg-2.jpg";
import Image4 from "../assets/bg-3.jpg";
import Image5 from "../assets/bg-4.jpg";
import Image1 from "../assets/bg-5.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative flex h-screen items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transform transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
        <div className="flex flex-row items-center justify-center">
          <div className="absolute flex flex-col items-center justify-center rounded bg-black/30 p-16 text-white backdrop-blur-sm sm:p-20">
            <div className="flex-col p-6">
              <h1 className="mb-4 text-3xl font-bold text-white md:text-6xl">
                Keep Your Body
              </h1>
              <h1 className="mb-8 text-3xl  font-bold text-white md:text-6xl">
                Fit and Strong
              </h1>
              <div className="flex flex-row space-x-4">
                {/* <button className="bg-none hover:bg-none hover:underline hover:decoration-wavy hover:decoration-blue-500 hover:outline-dashed hover:rounded-full text-white font-bold px-8 py-6 mr-4 text-xl">Learn More</button> */}
                <button className="w-full bg-none px-4 py-2 font-bold text-blue-500 hover:rounded-full hover:bg-none hover:text-white hover:underline hover:decoration-blue-500 hover:decoration-wavy hover:outline-dashed sm:text-2xl md:px-4">
                  Learn More
                </button>
                <button className="w-full rounded-full bg-lime-400 px-4 py-2 font-bold text-black hover:bg-green-600 sm:text-2xl md:px-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-gray-800 bg-opacity-50 p-2 text-white"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 transform space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={index === currentSlide ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
