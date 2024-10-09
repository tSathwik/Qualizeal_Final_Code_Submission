import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { format, set } from "date-fns";
import Testcase from "../TestCases/Testcase";

const DetailTestCycle = ({ val, ans }) => {
  const email = "vaarunsingghh@gmail.com";
  async function changeData() {
    try {
      const response = await fetch(
        `http://localhost:3005/changestats/${email}/${val.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(val);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ml-10"
        onClick={ans}
      >
        <div
          className="relative top-20 mx-auto my-20 p-5 border w-full max-w-3xl shadow-lg rounded-md bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b pb-3">
            <h3 className="text-xl font-semibold text-gray-900">
              Detail TestCycle
            </h3>
            <button onClick={ans} className="text-gray-400 hover:text-gray-500">
              <MdCancel size={24} />
            </button>
          </div>

          <div className="mt-4">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500">Summary</h4>
              <p className="mt-1 text-sm text-gray-900">{val.summary}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500">Description</h4>
              <p className="mt-1 text-sm text-gray-900">{val.descriptions}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500">
                  Start Date
                </h4>
                <p className="mt-1 text-sm text-gray-900">
                  {format(new Date(val.startdate), "dd MMMM yyyy")}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">End Date</h4>
                <p className="mt-1 text-sm text-gray-900">
                  {format(new Date(val.enddate), "dd MMMM yyyy")}
                </p>
              </div>
            </div>

            <button
              onClick={changeData}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Activate Status
            </button>
          </div>
        </div>
      </div>
      <div className="hidden">
        <Testcase ans={val}></Testcase>
      </div>
    </>
  );
};
export default DetailTestCycle;
