import React from "react";


const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#97e8f0] background">
        <div className="flex flex-col items-center mt-6 w-full justify-center h-[50vh]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide bungee-inline-regular max-w-2xl">
            About Us
          </h1>
          <p className="mt-6 text-md text-center text-neutral-500 max-w-xl ">
            TestersHive is home to a growing family of freelance software testers who
            want to develop new skills, earn extra money, and make a real impact
            on the digital products of their favorite brands.
          </p>
        </div>
      </div>
      <div className="flex justify-center -mt-20">
        <div className="p-2 w-full md:w-1/2 flex "></div>
      </div>
    </>
  );
};
export default Hero;
