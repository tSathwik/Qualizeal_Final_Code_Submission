import React from 'react';
import { privacyData } from "../constants";

const Policy = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 transition-all duration-300 ease-in-out ml-64"> 
      <div className="bg-white border-2 shadow-md p-10 rounded-lg w-full max-w-4xl"> 
        <p className="font-bold text-2xl">Privacy Policy</p>
        <p className="font-semibold">Effective as may</p> 
        <p className="font-semibold">Updated</p> 
        {privacyData.map((data) => (
          <div key={data.id} className="mt-4">
            <p className="font-bold">
              {data.id}. {data.heading}
            </p>
            <p className="text-sm text-gray-700">{data.matter}</p>
          </div>
        ))}
        <p className="mt-10 italic font-semibold">This is late updated on so and so</p> 
      </div>
    </div>
  );
};

export default Policy;
