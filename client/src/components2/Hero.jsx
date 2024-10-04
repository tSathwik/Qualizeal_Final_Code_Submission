import React from "react";
import video1 from "../assets/video1.mp4";
import background from "../assets/background.avif";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#97e8f0] background">
        <div className="flex flex-col items-center mt-6 w-full justify-center h-[50vh]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide bungee-inline-regular max-w-2xl">
            Why Testerhive
          </h1>
          <p className="mt-6 text-md text-center  max-w-xl ">
            TestersHiveers get to experience and test new technology before the
            general public. Be the first to test the latest.
          </p>
        </div>
      </div>
      <div className="flex justify-center -mt-20">
      <div className="p-2 w-full md:w-1/2 flex ">
        <video src={video1} autoPlay loop muted className="rounded-2xl"></video>
      </div>
      </div>
    </>
  );
};
export default Hero;
