import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { format } from "date-fns";

const Testcasedetail = ({ pass, onClose }) => {
  const [Priority, setPriority] = useState("medium");
  const [Stats, setStats] = useState("In progress");
  const [Actual, setActual] = useState("");
  const [Issue, setIssue] = useState("");

  const handlePriority = (e) => {
    setPriority(e.target.value);
  };
  const handleStatus = (e) => {
    setStats(e.target.value);
  };
  const handleActualResult = (e) => {
    setActual(e.target.value);
  };
  const handleIssues = (e) => {
    setIssue(e.target.value);
  };
  const dataSent = {
    actual_result: Actual,
    stats: Stats,
    priority: Priority,
    issues: Issue,
    id: pass.id,
  };
  console.log("Priority:" + Priority);
  console.log("Status:" + Stats);
  console.log("Actual:" + Actual);
  console.log("issues: " + Issue);

  async function changedata() {
    try {
      const response = await fetch(
        "http://localhost:3006/patch/testcasechange",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataSent),
        }
      );
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="fixed inset-0 w-full h-full bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80%] overflow-y-auto scr ml-44">
        <div className="border-b px-6 py-4 flex items-center justify-between fixed">
          <h2 className="text-xl font-semibold text-gray-800">
            Test Case Details
          </h2>
          <MdOutlineCancel
            size={25}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Test Case ID</p>
              <p className="mt-1 text-sm text-gray-900">{pass.id}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Assigned To</p>
              <p className="mt-1 text-sm text-gray-900">{pass.assigned_to}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">TestCycle Id</p>
            <p className="mt-1 text-sm text-gray-900">{pass.testcycle_id}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Title</p>
            <p className="mt-1 text-sm text-gray-900">{pass.title}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Summary</p>
            <p className="mt-1 text-sm text-gray-900">{pass.summary}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Expected Result</p>
            <p className="mt-1 text-sm text-gray-900">{pass.expected_result}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Created At</p>
              <p className="mt-1 text-sm text-gray-900">
                {format(new Date(pass.created_at), "dd MMMM yyyy")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Updated At</p>
              <p className="mt-1 text-sm text-gray-900">
                {pass.updated_at
                  ? format(new Date(pass.updated_at), "dd MMMM yyyy")
                  : "-"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                onChange={handleStatus}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="In progress">In progress</option>
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="priority"
                className="block text-sm font-medium text-gray-700"
              >
                Priority
              </label>
              <select
                id="priority"
                name="priority"
                onChange={handlePriority}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="actualresult"
              className="block text-sm font-medium text-gray-700"
            >
              Actual Result
            </label>
            {pass.actual_result ? (
              <p>{pass.actual_result}</p>
            ) : (
              <textarea
                id="actualresult"
                name="actual result"
                rows="1"
                onChange={handleActualResult}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2 border-2"
              ></textarea>
            )}
          </div>
          <div>
            <label
              htmlFor="issues"
              className="block text-sm font-medium text-gray-700"
            >
              Issues
            </label>

            {pass.issues ? (
              <p>{pass.issues}</p>
            ) : (
              <textarea
                id="issues"
                name="issues"
                rows="3"
                onChange={handleIssues}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2 border-2"
              ></textarea>
            )}
          </div>
        </div>
        <div className="bg-gray-50 px-6 py-4 flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
            onClick={changedata}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default Testcasedetail;
