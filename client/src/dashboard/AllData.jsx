import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
const AllData = () => {
  const [users, totalUsers] = useState(0);
  const [projects, totalProjects] = useState(0);
  const [testCycles, totalTestCycles] = useState(0);
  const [testcase, totaltestcases] = useState(0);
  useEffect(() => {
    async function data() {
      try {
        const response = await fetch("http://localhost:3008/totalUsers");
        const ans = await response.json();
        totalUsers(ans.length);
      } catch (e) {
        console.log(e);
      }
    }
    data();
  }, []);
  useEffect(() => {
    async function data() {
      try {
        const response = await fetch("http://localhost:3008/totalProjects");
        const ans = await response.json();
        totalProjects(ans.length);
      } catch (e) {
        console.log(e);
      }
    }
    data();
  }, []);

  const email = localStorage.getItem("email");
  useEffect(() => {
    async function data() {
      try {
        const response = await fetch(
          `http://localhost:3008/totalTestcycles/${email}`
        );
        const ans = await response.json();
        console.log(ans);
        totalTestCycles(ans);
      } catch (e) {
        console.log(e);
      }
    }
    data();
  }, []);
  useEffect(() => {
    async function data() {
      try {
        const response = await fetch(
          `http://localhost:3008/totalTestcases/${email}`
        );
        const ans = await response.json();
        totaltestcases(ans);
      } catch (e) {
        console.log(e);
      }
    }
    data();
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="grid grid-cols-4 gap-6">
          <div className="flex justify-around items-center bg-white rounded-xl h-32">
            <div>
              <div>
                <h2 className="text-md text-gray-700">Total Testers</h2>
              </div>
              <span>
                <h3 className="text-3xl font-semibold">{users}</h3>
              </span>
            </div>
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
              <FaUsers size={30} color="white" />
            </div>
          </div>
          <div className="flex justify-around items-center bg-white rounded-xl h-32">
            <div>
              <div>
                <h2 className="text-md text-gray-700">My TestCycles</h2>
              </div>
              <span>
                <h3 className="text-3xl font-semibold">{testCycles}</h3>
              </span>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#11b981] flex items-center justify-center">
              <GoGoal size={30} color="white" />
            </div>
          </div>
          <div className="flex justify-around items-center bg-white rounded-xl h-32">
            <div>
              <div>
                <h2 className="text-md text-gray-700">My TestCases</h2>
              </div>
              <span>
                <h3 className="text-3xl font-semibold">{testcase}</h3>
              </span>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#f79007] flex items-center justify-center">
              <MdOutlineFeaturedPlayList size={30} color="white" />
            </div>
          </div>
          <div className="flex justify-around  items-center bg-white rounded-xl h-32">
            <div>
              <div>
                <h2 className="text-md text-gray-700">Total Projects</h2>
              </div>
              <span>
                <h3 className="text-3xl font-semibold">{projects}</h3>
              </span>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#6366f1] flex items-center justify-center">
              <VscProject size={30} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllData;
