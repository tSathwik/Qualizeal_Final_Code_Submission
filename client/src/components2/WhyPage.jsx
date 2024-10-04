import React from "react";
import Hero from "./Hero";
import Community from "./Community";
import Readytotest from "./Readytotest";

const Why = () => {
  return (
    <>
      <Hero></Hero>
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <Community></Community>
      </div>
      <Readytotest></Readytotest>
    </>
  );
};
export default Why;
