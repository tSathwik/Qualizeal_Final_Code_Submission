import React from "react";
import gif1 from "../assets/profile-pictures/projects3.gif";
import Typewriter from "typewriter-effect";
const ProjectHead = () => {
  return (
    <>
      <div className="flex items-center justify-center font-semibold mt-10">
        <div className="w-[400px]">
          <h1 className="text-3xl">
            {
              <Typewriter
                options={{
                  strings:
                    "Keep your uTest profile updated for access to exclusive opportunities.",
                  autoStart: true,
                }}
              />
            }
          </h1>
        </div>
        <div className="w-[600px]">
          <img src={gif1} alt="" className="" />
        </div>
      </div>
      <div>
        <p className="px-16 pt-10 text-center text-xs">
          Please know, the Projects Board shows only a small fraction of the
          paid project opportunities uTest has to offer! Increase your chances
          at being matched with paid project opportunities by keeping your
          Tester Profile complete and up-to-date!
        </p>
      </div>
    </>
  );
};
export default ProjectHead;
