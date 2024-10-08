// import React, { useState } from "react";
// import SignupImage from "../Signup/SignupImage";
// import { useNavigate } from "react-router-dom";

// const Personal = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userEmail: "",
//     dateOfBirth: "",
//   });

//   const [alertMessage, setAlertMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isFormValid()) {
//       alert("Please fill in all the details before proceeding.");
//       return;
//     }

//     try {
//       const response = await fetch(`${import.meta.env.VITE_REACT_DOMAIN}/signup/personal`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("Response from server:", result);

//       // Navigate to the next step if the form submission was successful
//       navigate("/address");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
//   const navigate = useNavigate();

//   const isFormValid = () => {
//     return (
//       formData.firstName &&
//       formData.lastName &&
//       formData.userEmail &&
//       formData.dateOfBirth
//     );
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Left Side - Image with Overlay Text */}
//       <SignupImage />

//       {/* Right Side - Stylish Form Container */}
//       <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl">
//         {alertMessage && (
//           <div className="mb-4 p-4 text-white bg-red-500 rounded-lg shadow-lg">
//             {alertMessage}
//           </div>
//         )}
//         <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
//           <h2 className="text-3xl font-extrabold mb-2">Step 1:</h2>
//           <h1 className="text-4xl font-serif mb-8">Tell Us About Yourself</h1>
//           <p className="text-base font-light mb-8">
//             Let's start setting up your account. We ask your age to ensure we
//             meet privacy laws and it also helps brands reach out to the exact
//             people they need to help them.
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
//                 htmlFor="firstName"
//               >
//                 First Name*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="w-full">
//               <label
//                 className="block text-gray-700 text-sm font-semibold mb-2"
//                 htmlFor="lastName"
//               >
//                 Last Name*
//               </label>
//               <input
//                 className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="userEmail"
//             >
//               Email*
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//               type="email"
//               id="userEmail"
//               name="userEmail"
//               value={formData.userEmail}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="dateOfBirth"
//             >
//               Date Of Birth*
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//               type="date"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex justify-end mt-auto">
//             <button
//               className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] mt-4 shadow-lg transition-transform duration-300 hover:scale-105"
//               type="submit"
//             >
//               Next &gt;
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Personal;
import React, { useState } from "react";
import SignupImage from "../Signup/SignupImage";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    dateOfBirth: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill in all the details before proceeding.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup/personal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response from server:", result);

      // Navigate to the next step if the form submission was successful
      navigate("/address");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.userEmail &&
      formData.dateOfBirth
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />

      {/* Right Side - Stylish Form Container */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl">
        {alertMessage && (
          <div className="mb-4 p-4 text-white bg-red-500 rounded-lg shadow-lg">
            {alertMessage}
          </div>
        )}
        <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
          <h2 className="text-3xl font-extrabold mb-2">Step 1:</h2>
          <h1 className="text-4xl font-serif mb-8">Tell Us About Yourself</h1>
          <p className="text-base font-light mb-8">
            Let's start setting up your account. We ask your age to ensure we
            meet privacy laws and it also helps brands reach out to the exact
            people they need to help them.
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
                htmlFor="firstName"
              >
                First Name*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="lastName"
              >
                Last Name*
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="userEmail"
            >
              Email*
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
              type="email"
              id="userEmail"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="dateOfBirth"
            >
              Date Of Birth*
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end mt-auto">
            <button
              className="bg-[#04befe] text-white py-4 px-10 rounded-3xl hover:bg-[#4481eb] focus:outline-none focus:bg-[#4481eb] mt-4 shadow-lg transition-transform duration-300 hover:scale-105"
              type="submit"
            >
              Next &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;
