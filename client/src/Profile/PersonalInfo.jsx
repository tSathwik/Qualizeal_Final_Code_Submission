// import React, { useState } from "react";
// import { useDataContext } from "../DataContext";
// import user1 from "../assets/profile-pictures/user1.jpg";
// import Avatar from "react-avatar";

// const PersonalInfo = () => {
//   const { userData, updatePersonalInfo } = useDataContext();
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     first_name: userData.first_name || "",
//     last_name: userData.last_name || "",
//     email: userData.email || "",
//     dob: userData.dob || "",
//     mobile_no: userData.mobile_no || "",
//   });

//   // Toggle edit mode and reset form if canceled
//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//     if (!isEditing) {
//       setFormData({
//         first_name: userData.first_name || "",
//         last_name: userData.last_name || "",
//         email: userData.email || "",
//         dob: userData.dob || "",
//         mobile_no: userData.mobile_no || "",
//       });
//     }
//   };

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Save changes
//   const handleSave = () => {
//     updatePersonalInfo(formData);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center py-12">
//       <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl">
//         {/* Header Section */}
//         <div className="bg-blue-600 text-white py-5 px-6 text-center">
//           <h1 className="text-2xl font-semibold">Personal Information</h1>
//         </div>

//         <div className="px-8 py-10">
//           {/* Profile Image and Edit Button */}
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center space-x-4">
//               {/* <img
//                 src={user1}
//                 alt="User Profile"
//                 className="w-20 h-20 rounded-full border-4 border-gray-300"
//               /> */}
//               <Avatar
//                 color={Avatar.getRandomColor("sitebase", ["blue"])}
//                 name={userData.first_name + userData.last_name}
//                 size="60"
//                 round
//               />
//               <div>
//                 <h2 className="text-lg font-medium text-gray-700">
//                   {userData.first_name} {userData.last_name}
//                 </h2>
//                 <p className="text-sm text-gray-500">{userData.email}</p>
//               </div>
//             </div>
//             <button
//               onClick={toggleEditMode}
//               className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
//             >
//               {isEditing ? "Cancel" : "Edit"}
//             </button>
//           </div>

//           {/* Form Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* First Name */}
//             <div className="mb-5">
//               <h2>First Name</h2>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                 />
//               ) : (
//                 <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
//                   {userData.first_name}
//                 </div>
//               )}
//             </div>

//             {/* Last Name */}
//             <div className="mb-5">
//               <h2>Last Name</h2>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                 />
//               ) : (
//                 <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
//                   {userData.last_name}
//                 </div>
//               )}
//             </div>

//             {/* Email */}
//             <div className="mb-5">
//               <h2>Email</h2>
//               {isEditing ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                 />
//               ) : (
//                 <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
//                   {userData.email}
//                 </div>
//               )}
//             </div>

//             {/* Date of Birth */}
//             <div className="mb-5">
//               <h2>Date of Birth</h2>
//               {isEditing ? (
//                 <input
//                   type="date"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                 />
//               ) : (
//                 <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
//                   {userData.dob
//                     ? new Date(userData.dob).toLocaleDateString()
//                     : "N/A"}
//                 </div>
//               )}
//             </div>

//             {/* Mobile Number */}
//             <div className="mb-5">
//               <h2>Mobile Number</h2>
//               {isEditing ? (
//                 <input
//                   type="number"
//                   name="mobile_no"
//                   value={formData.mobile_no}
//                   onChange={handleInputChange}
//                   className="border border-gray-300 rounded-md p-2 w-full"
//                 />
//               ) : (
//                 <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
//                   {userData.mobile_no}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Save Button */}
//           {isEditing && (
//             <div className="flex justify-end">
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 bg-green-500 text-white rounded-md"
//               >
//                 Save
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalInfo;

import React, { useState } from "react";
import { useDataContext } from "../DataContext";
import user1 from "../assets/profile-pictures/user1.jpg";
import Avatar from "react-avatar";

const PersonalInfo = () => {
  const { userData, updatePersonalInfo } = useDataContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: userData.first_name || "",
    last_name: userData.last_name || "",
    dob: userData.dob || "",
    mobile_no: userData.mobile_no || "",
  });

  // Toggle edit mode and reset form if canceled
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
        dob: userData.dob || "",
        mobile_no: userData.mobile_no || "",
      });
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save changes
  const handleSave = () => {
    updatePersonalInfo(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-5 px-6 text-center">
          <h1 className="text-2xl font-semibold">Personal Information</h1>
        </div>

        <div className="px-8 py-10">
          {/* Profile Image and Edit Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              {/* <img
                src={user1}
                alt="User Profile"
                className="w-20 h-20 rounded-full border-4 border-gray-300"
              /> */}
              <Avatar
                color={Avatar.getRandomColor("sitebase", ["blue"])}
                name={userData.first_name + userData.last_name}
                size="60"
                round
              />
              <div>
                <h2 className="text-lg font-medium text-gray-700">
                  {userData.first_name} {userData.last_name}
                </h2>
                <p className="text-sm text-gray-500">{userData.email}</p>
              </div>
            </div>
            <button
              onClick={toggleEditMode}
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Name */}
            <div className="mb-5">
              <h2>First Name</h2>
              {isEditing ? (
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              ) : (
                <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
                  {userData.first_name}
                </div>
              )}
            </div>

            {/* Last Name */}
            <div className="mb-5">
              <h2>Last Name</h2>
              {isEditing ? (
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              ) : (
                <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
                  {userData.last_name}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="mb-5">
              <h2>Email</h2>
              <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
                {userData.email}
              </div>
            </div>

            {/* Date of Birth */}
            <div className="mb-5">
              <h2>Date of Birth</h2>
              {isEditing ? (
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              ) : (
                <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
                  {userData.dob
                    ? new Date(userData.dob).toLocaleDateString()
                    : "N/A"}
                </div>
              )}
            </div>

            {/* Mobile Number */}
            <div className="mb-5">
              <h2>Mobile Number</h2>
              {isEditing ? (
                <input
                  type="number"
                  name="mobile_no"
                  value={formData.mobile_no}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              ) : (
                <div className="bg-gray-100 rounded-md px-4 py-3 text-gray-700">
                  {userData.mobile_no}
                </div>
              )}
            </div>

            
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
