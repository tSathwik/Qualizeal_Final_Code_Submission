import React, { useEffect, useState } from "react";
import { LuListTodo } from "react-icons/lu";
import { FaClock } from "react-icons/fa";
import DetailTestCycle from "./DetailTestCycle";
import { format } from "date-fns";
import { FaRegCalendarAlt } from "react-icons/fa";
const Testcycle = () => {
  // const testcyles = {
  //   email: "vaarunsingghh@gmail.com",
  //   summary:
  //     "Please check the details wof correct order when changed to something let it be",
  //   descriptions:
  //     "Matter is a substance that has mass and takes up space, and is made up of particles that have specific sizes and masses. Matter can be described by its physical and chemical characteristics.Matter can also refer to a smart home standard that aims to make smart home devices more compatible with each other. The standard is supported by many companies, including Amazon, Apple, Google, and Samsung SmartThings.",
  //   startdate: "2024-10-02 12:01:11",
  //   enddate: "2024-10-05 12:01:11",
  // };
  // useEffect(() => {
  //   async function postthedata() {
  //     try {
  //       const response = await fetch(`http://localhost:3005/getDataAdmin`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(testcyles),
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   postthedata();
  // }, []);
  const [testcycledata, gettestcycledata] = useState([]);
  const [showdata, showdatamore] = useState(null);
  const email = "vaarunsingghh@gmail.com";
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `http://localhost:3005/gettestcycles/${email}`
        );
        const data = await response.json();
        gettestcycledata(data);
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  const datadisplay = (val) => {
    showdatamore(val);
    localStorage.setItem("selectedData", JSON.stringify(val));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">TO DO</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {testcycledata.map((data, id) => (
            <div
              key={id}
              className="hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
              onClick={() => datadisplay(data)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-grow pr-4">
                  <p className="text-lg font-medium text-gray-800 mb-2">
                    {data.summary}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <FaRegCalendarAlt className="text-gray-400" />
                    {format(new Date(data.startdate), "dd MMMM yyyy")}
                    <FaClock className="text-gray-400 ml-2" size={13} />
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-md">
                    Review
                  </span>
                  {data.stats === "active" ? (
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-800 rounded-md">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-red-400 rounded-md">
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showdata && (
        <DetailTestCycle val={showdata} ans={() => showdatamore(null)} />
      )}
    </div>
  );
};
export default Testcycle;
