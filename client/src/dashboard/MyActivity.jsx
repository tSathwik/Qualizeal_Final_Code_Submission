import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { FaCircle } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyActivity = () => {
  const [testcycles, PendingTestCycles] = useState(0);
  const [Atestcycles, ActiveTestCycles] = useState(0);
  const [PtestCases, PassedTestcases] = useState(0);
  const [Ftestcases, FailedTestcases] = useState(0);
  const [Itestcases, InprogressTestcases] = useState(0);

  const email = localStorage.getItem("email");
  useEffect(() => {
    async function getTestCasesData() {
      try {
        const response = await fetch(
          `http://localhost:3008/getPendingTestCycles/${email}`
        );
        const data = await response.json();
        PendingTestCycles(data.pending);
        ActiveTestCycles(data.active);
      } catch (e) {
        console.log(e);
      }
    }
    getTestCasesData();
  }, []);
  useEffect(() => {
    async function getTestCasesData() {
      try {
        const response = await fetch(
          `http://localhost:3008/testcasedetails/${email}`
        );
        const data = await response.json();
        PassedTestcases(data);
      } catch (e) {
        console.log(e);
      }
    }
    getTestCasesData();
  }, []);
  useEffect(() => {
    async function getTestCasesData() {
      try {
        const response = await fetch(
          `http://localhost:3008/testcasedetailsIn/${email}`
        );
        const data = await response.json();
        InprogressTestcases(data);
      } catch (e) {
        console.log(e);
      }
    }
    getTestCasesData();
  }, []);
  useEffect(() => {
    async function getTestCasesData() {
      try {
        const response = await fetch(
          `http://localhost:3008/testcasedetailsFail/${email}`
        );
        const data = await response.json();
        FailedTestcases(data);
      } catch (e) {
        console.log(e);
      }
    }
    getTestCasesData();
  }, []);
  const data = [
    { label: "Pending TestCycles", value: testcycles, color: "#002B49" },
    { label: "Active TestCycles", value: Atestcycles, color: "#0067A0" },
    { label: "Passed TestCases", value: PtestCases, color: "#53D9D9" },
    { label: "Failed TestCases", value: Ftestcases, color: "#FF6B6B" },
    { label: "In Progress TestCases", value: Itestcases, color: "#FFA600" },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce(
              (acc, data) => acc + data,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ${percentage}% (${value})`;
          },
        },
      },
    },
  };

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="pt-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">My Activity</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 h-64 md:h-80">
            {testcycles ||
            Atestcycles ||
            PtestCases ||
            Ftestcases ||
            Itestcases ? (
              <Doughnut data={chartData} options={options} />
            ) : (
              <p className="text-center mt-32">No Activities till now</p>
            )}
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <ul className="space-y-3">
              {data.length > 0 ? (
                data.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCircle
                        className="mr-2"
                        style={{ color: item.color }}
                      />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </li>
                ))
              ) : (
                <p>No Activities till now</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActivity;
