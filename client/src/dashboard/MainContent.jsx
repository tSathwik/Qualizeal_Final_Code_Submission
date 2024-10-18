import React, { useEffect, useState } from "react";
import DashNav from "./DashNav";
import AllData from "./AllData";
import MyActivity from "./MyActivity";
import { useNavigate } from "react-router-dom";
import fetchWithAuth from "../utils/fetchWithAuth"; 

const MainContent = () => {
    const navigate = useNavigate();
    const [projectsChecked, setProjectsChecked] = useState(false);
    const [data, setData] = useState(null); // State for fetched data

    useEffect(() => {
        const checkedStatus = localStorage.getItem("projectsChecked");
        setProjectsChecked(checkedStatus === "true");

        const fetchData = async () => {
            try {
                const response = await fetchWithAuth("/api/data-endpoint"); // Replace with your actual API endpoint
                if (response.ok) {
                    const result = await response.json();
                    setData(result); // Set the fetched data in state
                } else {
                    console.error("Error fetching data:", response.statusText);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, []);

    const handleClick = () => {
        navigate("/profile");
    };

    return (
        <div className="flex-1 bg-gray-100 p-6">
            <DashNav val={"DashBoard"} />
            <AllData data={data} /> {/* Pass fetched data as a prop if needed */}
            {/* Main Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* New Joiner Checklist */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">New Joiner Checklist</h2>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <input type="checkbox" checked disabled className="mr-2" />
                            Create your Account: Welcome to TestersHive!
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" checked disabled className="mr-2" />
                            Confirm your Email Address
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" disabled className="mr-2" />
                            Setup your Payment Method
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" disabled className="mr-2" />
                            Complete your Profile
                        </li>
                        <li className="flex items-center">
                            <input
                                type="checkbox"
                                checked={projectsChecked}
                                disabled
                                className="mr-2"
                            />
                            Scan the Projects Board
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" disabled className="mr-2" />
                            Take a course at the Academy
                        </li>
                    </ul>
                </div>

                {/* Profile Completion */}
                <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl w-full max-w-sm mx-auto">
                    <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">Profile Completion</h2>
                    <div className="flex flex-col items-center space-y-6">
                        <div className="w-32 h-32 relative">
                            <svg
                                className="w-full h-full transform -rotate-90"
                                viewBox="0 0 36 36"
                            >
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.9155"
                                    fill="none"
                                    stroke="#e6e6e6"
                                    strokeWidth="2.8"
                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.9155"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="2.8"
                                    strokeDasharray="29, 100"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                                        <stop offset="0%" style={{ stopColor: "#00abff", stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-lg font-semibold">
                                29%
                            </span>
                        </div>
                        <button
                            onClick={handleClick}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 mt-4 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-105"
                        >
                            Complete my profile
                        </button>
                    </div>
                </div>
            </div>
            <MyActivity />
        </div>
    );
};

export default MainContent;
