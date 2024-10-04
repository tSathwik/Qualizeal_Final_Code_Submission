import React from "react";
import Hero from "./HeroAboutUs";
import OurTarget from "./OurTarget";
import Quick from "./Quick";
import AccordMatter from "./AccordMatter";
import People from "./People";
const Details = () => {
  return (
    <>
      <Hero></Hero>
      <div className="max-w-7xl mx-auto pt-20 px-20">
        <OurTarget></OurTarget>
        <Quick></Quick>
        <People></People>
      </div>
      <AccordMatter />
    </>
  );
};
export default Details;
