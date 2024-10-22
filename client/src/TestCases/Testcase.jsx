import React, { useEffect, useState } from "react";
import Testcasedetail from "./Testcasedetail";
import { format } from "date-fns";
const Testcase = () => {
  const [values, setValues] = useState(null);
  // useEffect(() => {
  //   const storeData = localStorage.getItem("selectedData");
  //   if (storeData) {
  //     setnewdata(JSON.parse(storeData));
  //   }
  //   setLoad(false);
  // }, []);

  // const testcases = {
  //   testcycle_id: 9,
  //   title: "SignUp working or not check",
  //   summary:
  //     "Make sure this work fine and does not get details and also to make sure to run everything is fine or not.",
  //   expected_result: "Done doing it and run the process",
  //   assigned_to: "ddharanibai2000@gmail.com",
  // };
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await fetch("http://localhost:3006/testcases", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(testcases),
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   getData();
  // }, []);
  const [total, setTotal] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(() => {
    async function gettestcasedata() {
      try {
        const response = await fetch(
          `http://localhost:3006/testcase/info/${email}`
        );
        const data = await response.json();
        setTotal(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    gettestcasedata();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 ">
        <div className="overflow-x-auto bg-white shadow-md rounded-lg ">
          <table className="min-w-full divide-y divide-gray-200 relative">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  TestCase Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Assigned to
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Priority
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created At
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Result
                </th>
              </tr>
            </thead>

            {total.length > 0 ? (
              total.map((data, _) => (
                <tbody
                  className="bg-white divide-y divide-gray-200 cursor-pointer hover:bg-[#cccdce]"
                  key={data.id}
                >
                  <tr onClick={() => setValues(data)}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {data.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {data.assigned_to}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.priority == "low" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {data.priority}
                        </span>
                      ) : data.priority == "medium" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {data.priority}
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {data.priority}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {format(new Date(data.created_at), "dd MMMM yyyy")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {data.stats == "Pass" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {data.stats}
                        </span>
                      ) : data.stats == "Fail" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {data.stats}
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {data.stats}
                        </span>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))
            ) : (
              <p>No TestCycles are Avaliable</p>
            )}
          </table>
        </div>
      </div>
      {values && (
        <Testcasedetail
          pass={values}
          onClose={() => setValues(null)}
        ></Testcasedetail>
      )}
    </>
  );
};
export default Testcase;
