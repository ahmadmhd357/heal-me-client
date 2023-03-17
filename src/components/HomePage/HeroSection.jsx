import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      style={{ backgroundImage: "url(./background.png)" }}
      className="flex flex-col  sm:flex-row items-center pb-20 h-full sm:justify-around py-10 gap-10"
    >
      <div className="flex flex-col max-sm:m-auto justify-center  items-center ml-24">
        <h4 className="text-3xl font-medium">WE ARE HERE TO</h4>
        <h1 className="text-7xl font-bold mb-10">HELP</h1>
        <button
          onClick={() => navigate("/booking")}
          className="bg-cyan-500 hover:bg-cyan-400 py-2 px-3 rounded-lg font-medium"
        >
          Book an appointment
        </button>
      </div>
      <div className=" flex justify-center">
        <img src="./hero.svg" alt="hero" className="w-[75%]" />
      </div>
    </section>
  );
}

export default HeroSection;
