import React from "react";
import bug from "../assets/bug.png";

const Readytotest = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-36 bg-[#005A87] lg:flex-row flex-col">
        <div className="p-2 lg:w-1/3 ">
          <img src={bug} alt="" />
        </div>
        <div className="lg:w-1/2 text-lg p-10 flex flex-col justify-center ">
          <p className="text-xl lg:text-4xl text-white">
            Ready to Start Testing?
          </p>
          <p className="pt-6 text-sm  text-white">
            Learn new skills, earn money for sharing your feedback, and connect
            with a global community of individuals passionate about digital
            quality.
          </p>
          <div className="mt-4">
            <button className="bg-white text-sm px-2 rounded-md py-2">
              Become a tester
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Readytotest;
