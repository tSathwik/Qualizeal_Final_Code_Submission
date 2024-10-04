import React from "react";
import video1 from "../assets/video1.mp4";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#97e8f0] background">
        <div className="flex flex-col items-center mt-6 w-full justify-center h-[50vh]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide bungee-inline-regular max-w-2xl">
            Projects Board
          </h1>
          <p className="mt-6 text-md text-center  max-w-xl ">
            Please view a small fraction of the available paid project
            opportunities TestersHive has to offer! Sign up today and fill out your
            tester profile to receive more projects.
          </p>
        </div>
      </div>
    </>
  );
};
export default Hero;
