// import React, { useState } from "react";
// import SignupImage from "../Signup/SignupImage";
// import { useNavigate } from "react-router-dom";

// const Devices = () => {
//   const [formData, setFormData] = useState({
//     computer: "",
//     version: "",
//     language: "",
//     mobile: "",
//     model: "",
//     os: "",
//   });

//   const [alertMessage, setAlertMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const navigate = useNavigate();

//   const isFormValid = () => {
//     return (
//       formData.computer &&
//       formData.version &&
//       formData.language &&
//       formData.mobile &&
//       formData.model &&
//       formData.os
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${import.meta.env.VITE_REACT_DOMAIN}/signup/devices`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("HTTP error!");
//       }

//       // Navigate to the next page only after a successful request
//       navigate("/Complete");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while submitting your information.");
//     }
//   };

//   const handleBackClick = () => {
//     navigate("/address");
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Left Side - Image with Overlay Text */}
//       <SignupImage />
//       {/* Right Side - Stylish Form Container */}
//       <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl">
//         {/* Alert Message */}
//         {alertMessage && (
//           <div className="mb-4 p-4 text-white bg-red-500 rounded-lg shadow-lg">
//             {alertMessage}
//           </div>
//         )}
//         <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
//           <h2 className="text-3xl font-extrabold mb-2">Step 3:</h2>
//           <h1 className="text-4xl font-serif mb-8">
//             Tell Us About Your Devices
//           </h1>
//           <p className="text-base font-light mb-8">
//             When you participate in TestersHive projects, you need to have at
//             least one device that you perform the test on. Please list a device
//             (the more devices you have, the more invitations to projects you
//             receive).
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="p-6 bg-white rounded-xl shadow-md mt-8"
//         >
//           <div className="flex flex-col gap-4 mb-4">
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="computer"
//               >
//                 Your Computer*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="computer"
//                 name="computer"
//                 value={formData.computer}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="version"
//               >
//                 Version*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="version"
//                 name="version"
//                 value={formData.version}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="language"
//               >
//                 Language*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="language"
//                 name="language"
//                 value={formData.language}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-4 mb-4">
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="mobile"
//               >
//                 Your Mobile*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="model"
//               >
//                 Model*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="model"
//                 name="model"
//                 value={formData.model}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="os"
//               >
//                 OS*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="os"
//                 name="os"
//                 value={formData.os}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="flex justify-between mt-4">
//             <button
//               className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
//               type="button"
//               onClick={handleBackClick}
//             >
//               &lt; Previous
//             </button>
//             <button
//               className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
//               type="submit"
//               // onClick={handleNextClick}
//             >
//               Next &gt;
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Devices;
import React, { useState } from "react";
import SignupImage from "../Signup/SignupImage";
import { useNavigate } from "react-router-dom";

const Devices = () => {
  const [formData, setFormData] = useState({
    computer: "",
    version: "",
    language: "",
    mobile: "",
    model: "",
    os: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      formData.computer &&
      formData.version &&
      formData.language &&
      formData.mobile &&
      formData.model &&
      formData.os
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/signup/devices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("HTTP error!");
      }

      // Navigate to the next page only after a successful request
      navigate("/Complete");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting your information.");
    }
  };

  const handleBackClick = () => {
    navigate("/address");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />
      {/* Right Side - Stylish Form Container */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl">
        {/* Alert Message */}
        {alertMessage && (
          <div className="mb-4 p-4 text-white bg-red-500 rounded-lg shadow-lg">
            {alertMessage}
          </div>
        )}
        <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
          <h2 className="text-3xl font-extrabold mb-2">Step 3:</h2>
          <h1 className="text-4xl font-serif mb-8">
            Tell Us About Your Devices
          </h1>
          <p className="text-base font-light mb-8">
            When you participate in TestersHive projects, you need to have at
            least one device that you perform the test on. Please list a device
            (the more devices you have, the more invitations to projects you
            receive).
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-xl shadow-md mt-8"
        >
          <div className="flex flex-col gap-4 mb-4">
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="computer"
              >
                Your Computer*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="computer"
                name="computer"
                value={formData.computer}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="version"
              >
                Version*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="version"
                name="version"
                value={formData.version}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="language"
              >
                Language*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="mobile"
              >
                Your Mobile*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="model"
              >
                Model*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="os"
              >
                OS*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="os"
                name="os"
                value={formData.os}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
              type="button"
              onClick={handleBackClick}
            >
              &lt; Previous
            </button>
            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] shadow-lg transition-transform duration-300 hover:scale-105"
              type="submit"
              // onClick={handleNextClick}
            >
              Next &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Devices;
