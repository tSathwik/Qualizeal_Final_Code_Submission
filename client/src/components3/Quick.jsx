import React from "react";
import { status } from "../constants";

const Quick = () => {
  return (
    <>

      <div className="border-2 mt-20 rounded-md">
        <p className="text-center pt-2 text-sm font-semibold">Stats</p>
        <div className="flex flex-wrap items-center lg:justify-around p-8 gap-3">
          {status.map((ans, index) => (
            <div
              key={index}
              className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-black"
            >
              <p className="font-bold text-2xl">{ans.subscribe}</p>
              <p>{ans.theory}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quick;
