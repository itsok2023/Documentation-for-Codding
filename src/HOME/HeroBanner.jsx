import { useState } from "react";
import laptopImage from "../assets/laptop.png"; // Replace with your actual image path

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 3);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);

  return (
    <section className=" relative bg-stone-300 text-white py-40 px-10 flex items-center justify-center mt-15">
      {/* Left Button */}
      {/* <button 
        onClick={prevSlide} 
        className="absolute left-5 bg-gray-800 p-3 rounded-full hover:bg-gray-700"
      >
        {"<"}
      </button> */}

      {/* Content */}
      <div className="max-w-5xl text-center">
        <h1 className="text-5xl text-stone-700 font-bold max-md:text-4xl pb-5">DOCUMENTATION</h1>
        <p className="mt-4 text-gray-500 max-md:text-1xl max-md:w-80 mx-auto ">
          The ultimate docs for coders — start your project in seconds.
        </p>
        <button className="mt-6 bg-blue-900 hover:bg-blue-600 transition duration-200 px-6 py-2 rounded font-semibold" >
          <a href="/getting">Explore Docs</a>
        </button>
      </div>

      {/* Laptop Image */}
      <div className="absolute top-1/2 right-50 transform -translate-y-1/2 w-56 max-xl:hidden">
        <img src={laptopImage} alt="Laptop" className="w-full"/>
      </div>

      {/* Right Button
      <button 
        onClick={nextSlide} 
        className="absolute right-5 bg-gray-800 p-3 rounded-full hover:bg-gray-700"
      >
        {">"}
      </button> */}
    </section>
  );
}

