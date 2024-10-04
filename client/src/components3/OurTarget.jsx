import React from "react";
import { aboutus } from "../constants";
import user4 from "../assets/profile-pictures/user4.jpg";
const OurTarget = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-36">
        <div className="">
          <div className="p-2 w-full lg:w-2/3 relative">
            <img src={user4} alt="" className=" rounded-md"/>
          </div>
          <p className="font-semibold text-2xl">Our Mission</p>
          <p className="text-sm max-w-lg break-words pt-2">
          Our community is the heart and soul of who we are. At TestersHive, our mission is to provide a safe, inclusive environment that allows members to “Learn, earn and connect.”
          </p>
        </div>

        <div className="w-full lg:w-1/2 text-lg p-10">
          <p className="pt-6">
            {aboutus.map((ans, index) => (
              <div key={index}>
                <div>
                  <p className="font-semibold text-sm pt-4">{ans.head}</p>
                  <p className="font-semibold">{ans.middle}</p>
                  <p className=" text-sm pt-2">{ans.leg}</p>
                </div>
              </div>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
export default OurTarget;
