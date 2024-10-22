// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SignupImage from "../Signup/SignupImage";
// const Otp = () => {
//   const [formData, setFormData] = useState({
//     otp: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${import.meta.env.VITE_REACT_DOMAIN}/verify-otp`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       console.log("Response from server:", result);
//       if (result.status === "success") {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Left Side - Image with Overlay Text */}
//       <SignupImage />
//       {/* Right Side - Stylish Form Container */}
//       <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl ">
//         <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
//           <h2 className="text-3xl font-extrabold mb-2">Step 5:</h2>
//           <h1 className="text-4xl font-serif mb-8">Email Verification</h1>
//           {/* <p className="text-base font-light mb-8">
//             Let's start setting up your account. We ask your age to ensure we meet privacy laws and it also helps brands
//             reach out to the exact people they need to help them.
//           </p> */}
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="p-6 bg-white rounded-xl shadow-md mt-8"
//         >
//           <div className="flex flex-col gap-4 mb-4">
//             <div className="mb-4">
//               <h1>
//                 An OTP (One-Time Password) is crucial for enhancing security by
//                 providing a temporary, unique code that users must enter during
//                 authentication. This helps prevent unauthorized access by
//                 ensuring that even if a password is compromised, the account
//                 remains protected.
//               </h1>
//             </div>
//           </div>

//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="otp"
//             >
//               Enter OTP*
//             </label>
//             <input
//               className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
//               type="text"
//               id="otp"
//               name="otp"
//               value={formData.otp}
//               onChange={handleChange}
//               required
//             />
//             <button
//               className="bg-blue-500 text-white py-4 px-10 rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4"
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

// export default Otp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupImage from "../Signup/SignupImage";
const Otp = () => {
  const [formData, setFormData] = useState({
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response from server:", result);
      if (result.status === "success") {
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("email", result.email);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Side - Image with Overlay Text */}
      <SignupImage />
      {/* Right Side - Stylish Form Container */}
      <div className="flex-1 p-8 flex flex-col justify-center bg-white relative rounded-lg shadow-lg md:shadow-2xl ">
        <div className="p-2 rounded-xl bg-gradient-to-r from-[#04befe] to-[#4481eb] text-white">
          <h2 className="text-3xl font-extrabold mb-2">Step 5:</h2>
          <h1 className="text-4xl font-serif mb-8">Email Verification</h1>
          {/* <p className="text-base font-light mb-8">
            Let's start setting up your account. We ask your age to ensure we meet privacy laws and it also helps brands
            reach out to the exact people they need to help them.
          </p> */}
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white rounded-xl shadow-md mt-8"
        >
          <div className="flex flex-col gap-4 mb-4">
            <div className="mb-4">
              <h1>
                An OTP (One-Time Password) is crucial for enhancing security by
                providing a temporary, unique code that users must enter during
                authentication. This helps prevent unauthorized access by
                ensuring that even if a password is compromised, the account
                remains protected.
              </h1>
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="otp"
            >
              Enter OTP*
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg border-b-4 text-gray-800 focus:outline-none focus:border-[#04befe] shadow-sm transition-transform duration-300 hover:scale-105"
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
            />
            <button
              className="bg-blue-500 text-white py-4 px-10 rounded-3xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-4"
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

export default Otp;
