// import React, { useState } from "react";

// export default function EmailForm() {
//   const [formData, setFormData] = useState({
//     startingMessage: "",
//     projectTitle: "",
//     duties: "",
//     requirements: "",
//     benefits: "",
//     payouts: "",
//     device: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3000/sendProjectEmail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();
//       alert(result.message);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ maxWidth: "600px", margin: "0 auto" }}
//     >
//       <h2>Send Project Email</h2>
//       {[
//         "startingMessage",
//         "projectTitle",
//         "duties",
//         "requirements",
//         "benefits",
//         "payouts",
//         "device",
//       ].map((field) => (
//         <div key={field} style={{ marginBottom: "1em" }}>
//           <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
//           <textarea
//             name={field}
//             value={formData[field]}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", minHeight: "60px" }}
//           />
//         </div>
//       ))}
//       <button
//         type="submit"
//         style={{
//           padding: "10px 20px",
//           background: "#4285f4",
//           color: "#fff",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Send Emails
//       </button>
//     </form>
//   );
// }
import React from 'react'

const EmailForm = () => {
  return (
    <div>EmailForm</div>
  )
}

export default EmailForm
