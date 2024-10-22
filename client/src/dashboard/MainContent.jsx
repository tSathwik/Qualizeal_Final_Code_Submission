// import React, { useEffect, useState } from "react";
// import DashNav from "./DashNav";
// import AllData from "./AllData";
// import MyActivity from "./MyActivity";
// import { useNavigate } from "react-router-dom";

// const MainContent = () => {
//   const navigate = useNavigate();

//   const [projectsChecked, setProjectsChecked] = useState(false);

//   useEffect(() => {
//     const checkedStatus = localStorage.getItem("projectsChecked");
//     setProjectsChecked(checkedStatus === "true");
//   }, []);

//   const handleClick = () => {
//     navigate("/profile");
//   };

//   return (
//     <div className="flex-1 bg-gray-100 p-6">
//       <DashNav val={"DashBoard"} />
//       <AllData />
//       {/* Main Sections */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* New Joiner Checklist */}
//         <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-lg font-semibold mb-4">New Joiner Checklist</h2>
//           <ul className="space-y-3">
//             <li className="flex items-center">
//               <input type="checkbox" checked disabled className="mr-2" />
//               Create your Account: Welcome to TestersHive!
//             </li>
//             <li className="flex items-center">
//               <input type="checkbox" checked disabled className="mr-2" />
//               Confirm your Email Address
//             </li>
//             <li className="flex items-center">
//               <input type="checkbox" disabled className="mr-2" />
//               Setup your Payment Method
//             </li>
//             <li className="flex items-center">
//               <input type="checkbox" disabled className="mr-2" />
//               Complete your Profile
//             </li>
//             <li className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={projectsChecked}
//                 disabled
//                 className="mr-2"
//               />
//               Scan the Projects Board
//             </li>
//             <li className="flex items-center">
//               <input type="checkbox" disabled className="mr-2" />
//               Take a course at the Academy
//             </li>
//           </ul>
//         </div>

//         {/* Profile Completion */}
//         <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl w-full max-w-sm mx-auto">
//           <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">
//             Profile Completion
//           </h2>
//           <div className="flex flex-col items-center space-y-6">
//             <div className="w-32 h-32 relative">
//               <svg
//                 className="w-full h-full transform -rotate-90"
//                 viewBox="0 0 36 36"
//               >
//                 <circle
//                   cx="18"
//                   cy="18"
//                   r="15.9155"
//                   fill="none"
//                   stroke="#e6e6e6"
//                   strokeWidth="2.8"
//                 />
//                 <circle
//                   cx="18"
//                   cy="18"
//                   r="15.9155"
//                   fill="none"
//                   stroke="url(#gradient)"
//                   strokeWidth="2.8"
//                   strokeDasharray="29, 100"
//                   strokeLinecap="round"
//                 />
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
//                     <stop
//                       offset="0%"
//                       style={{ stopColor: "#00abff", stopOpacity: 1 }}
//                     />
//                     <stop
//                       offset="100%"
//                       style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
//                     />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-lg font-semibold">
//                 29%
//               </span>
//             </div>
//             <button
//               onClick={handleClick}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 mt-4 rounded-lg shadow-md transition-all duration-300 transform hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:scale-105"
//             >
//               Complete my profile
//             </button>
//           </div>
//         </div>
//       </div>
//       <MyActivity />
//     </div>
//   );
// };

// export default MainContent;

import React, { useEffect, useState } from "react";
import DashNav from "./DashNav";
import AllData from "./AllData";
import MyActivity from "./MyActivity";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../DataContext";
import img from "../assets/qua1.jpg";

const MainContent = () => {
  const navigate = useNavigate();
  const { userData } = useDataContext(); // Get userData from the context
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // Calculate profile completion based on userData fields
  useEffect(() => {
    calculateCompletion();
  }, [userData]);

  const calculateCompletion = () => {
    // Define the fields you're checking for profile completion
    const fields = [
      userData.email,
      userData.first_name,
      userData.last_name,
      userData.city,
      userData.zip,
      userData.country,
      userData.computer,
      userData.version,
      userData.language,
      userData.mobile,
      userData.model,
      userData.os,
      userData.mobile_no,
    ];

    // Count how many fields are filled (not null or empty)
    const filledFields = fields.filter(
      (field) => field !== null && field !== undefined && field !== ""
    );

    console.log(filledFields);
    const percentage = Math.round((filledFields.length / fields.length) * 100);
    setCompletionPercentage(percentage);
  };

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <DashNav val={"DashBoard"} />
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="flex flex-col md:flex-row">
          <div>
            <img src={img} alt="Dashboard Hero" className="w-full" />
          </div>
          <div className=" p-6 flex flex-col justify-center bg-[#c2cfff]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to Qualizeal
            </h2>
            <p className="text-white mb-4">
              Empower your testing process with our cutting-edge platform. Track
              your progress, manage test cases, and collaborate with your team
              effortlessly.
            </p>
          </div>
        </div>
      </div>
      <AllData />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">New Joiner Checklist</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <input
                type="checkbox"
                checked={!!userData.email}
                disabled
                className="mr-2"
              />
              Confirm your Email Address
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                checked={!!userData.firstName && !!userData.lastName}
                disabled
                className="mr-2"
              />
              Complete your Name
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                checked={
                  !!userData.city && !!userData.country && !!userData.zip
                }
                disabled
                className="mr-2"
              />
              Setup your Address
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                checked={
                  !!userData.computer && !!userData.version && !!userData.os
                }
                disabled
                className="mr-2"
              />
              Complete Device Information
            </li>
            <li className="flex items-center">
              <input
                type="checkbox"
                checked={!!userData.mobile && !!userData.model}
                disabled
                className="mr-2"
              />
              Complete Mobile Details
            </li>
          </ul>
        </div>

        {/* Profile Completion Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl w-full max-w-sm mx-auto">
          <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">
            Profile Completion
          </h2>
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
                  strokeDasharray={`${completionPercentage}, 100`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#00abff", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#00d4ff", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-lg font-semibold">
                {completionPercentage}%
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
