// // import React, { useState } from "react";

// // const Bugs = () => {
// //     const [isReporting, setIsReporting] = useState(false);
// //     const [formData, setFormData] = useState({
// //         projectId: "",
// //         bugDescription: "",
// //         stepsToReproduce: "",
// //         additionalDetails: "",
// //     });
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [errorMessage, setErrorMessage] = useState("");
// //     const [bugs, setBugs] = useState([
// //         // Initial bugs can be added here
// //         { id: 1, projectId: "123", bugDescription: "Sample bug 1", stepsToReproduce: "Step 1", additionalDetails: "Details 1" },
// //         { id: 2, projectId: "456", bugDescription: "Sample bug 2", stepsToReproduce: "Step 2", additionalDetails: "Details 2" },
// //     ]);
// //     const [selectedBug, setSelectedBug] = useState(null);

// //     const toggleReportingMode = () => {
// //         setIsReporting(!isReporting);
// //         if (!isReporting) {
// //             setFormData({
// //                 projectId: "",
// //                 bugDescription: "",
// //                 stepsToReproduce: "",
// //                 additionalDetails: "",
// //             });
// //             setErrorMessage("");
// //         }
// //     };

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({ ...formData, [name]: value });
// //     };

// //     const handleSubmit = async () => {
// //         if (!validateForm()) {
// //             return;
// //         }
// //         setIsSubmitting(true);
// //         try {
// //             // Simulate submission logic
// //             const newBug = { ...formData, id: bugs.length + 1 };
// //             setBugs([...bugs, newBug]);
// //             setIsReporting(false);
// //         } catch (error) {
// //             setErrorMessage("Failed to submit the bug report. Please try again.");
// //         }
// //         setIsSubmitting(false);
// //     };

// //     const validateForm = () => {
// //         if (!formData.projectId || !formData.bugDescription) {
// //             setErrorMessage("Please fill in all required fields.");
// //             return false;
// //         }
// //         setErrorMessage("");
// //         return true;
// //     };

// //     const renderInputField = (label, name, isTextarea = false, required = false) => (
// //         <div className="mb-6">
// //             <label htmlFor={name} className="block text-sm font-medium text-gray-700">
// //                 {label}
// //                 {required && <span className="text-red-500">*</span>}
// //             </label>
// //             {isTextarea ? (
// //                 <textarea
// //                     name={name}
// //                     value={formData[name]}
// //                     onChange={handleInputChange}
// //                     className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
// //                     rows="4"
// //                     required={required}
// //                 />
// //             ) : (
// //                 <input
// //                     type="text"
// //                     name={name}
// //                     value={formData[name]}
// //                     onChange={handleInputChange}
// //                     className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
// //                     required={required}
// //                 />
// //             )}
// //         </div>
// //     );

// //     const handleBugClick = (bug) => {
// //         setSelectedBug(bug);
// //     };

// //     const handleBackClick = () => {
// //         setSelectedBug(null);
// //     };

// //     return (
// //         <div className="min-h-screen w-full flex justify-center items-center py-0 m-4">
// //             <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full h-full">
// //                 <div className="bg-blue-600 text-white py-5 px-6 text-center">
// //                     <h1 className="text-2xl font-semibold">Report a Bug</h1>
// //                 </div>

// //                 <div className="px-8 py-10 h-full">
// //                     <div className="flex justify-end mb-8">
// //                         <button
// //                             onClick={toggleReportingMode}
// //                             className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
// //                         >
// //                             {isReporting ? "Cancel" : "Add Bug"}
// //                         </button>
// //                     </div>
// //                     {!isReporting && !selectedBug && (
// //                         <div>
// //                             {bugs.length === 0 ? (
// //                                 <div className="text-center text-gray-500">No bugs reported.</div>
// //                             ) : (
// //                                 <ul className="list-disc pl-5">
// //                                     {bugs.map((bug) => (
// //                                         <li key={bug.id} className="mb-2 bg-gray-100 p-4 rounded-lg cursor-pointer" onClick={() => handleBugClick(bug)}>
// //                                             <strong>Project ID:</strong> {bug.projectId} - <strong>Description:</strong> {bug.bugDescription}
// //                                         </li>
// //                                     ))}
// //                                 </ul>
// //                             )}
// //                         </div>
// //                     )}
// //                     {selectedBug && (
// //                         <div className="bg-gray-100 p-4 rounded-lg">
// //                             <h2 className="text-xl font-semibold mb-4">Bug Details</h2>
// //                             <p><strong>Project ID:</strong> {selectedBug.projectId}</p>
// //                             <p><strong>Description:</strong> {selectedBug.bugDescription}</p>
// //                             <p><strong>Steps to Reproduce:</strong> {selectedBug.stepsToReproduce}</p>
// //                             <p><strong>Additional Details:</strong> {selectedBug.additionalDetails}</p>
// //                             <button
// //                                 onClick={handleBackClick}
// //                                 className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
// //                             >
// //                                 Back
// //                             </button>
// //                         </div>
// //                     )}
// //                     {isReporting && (
// //                         <>
// //                             {renderInputField("Project ID", "projectId", false, true)}
// //                             {renderInputField("Bug Description", "bugDescription", true, true)}
// //                             {renderInputField("Steps to Reproduce", "stepsToReproduce", true)}
// //                             {renderInputField("Additional Details", "additionalDetails", true)}

// //                             {errorMessage && (
// //                                 <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
// //                             )}

// //                             <div className="mt-8 flex justify-end">
// //                                 <button
// //                                     onClick={handleSubmit}
// //                                     disabled={isSubmitting}
// //                                     className={`px-6 py-3 rounded-lg text-white font-medium transition duration-200 ${
// //                                         isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
// //                                     }`}
// //                                 >
// //                                     {isSubmitting ? "Submitting..." : "Submit"}
// //                                 </button>
// //                             </div>
// //                         </>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Bugs;



// // import React, { useState, useEffect } from "react";

// // const Bugs = () => {
// //   const [bugs, setBugs] = useState([]);
// //   const [formData, setFormData] = useState({
// //     projectId: "",
// //     bugDescription: "",
// //     stepsToReproduce: "",
// //     additionalDetails: "",
// //   });
// //   const [isReporting, setIsReporting] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState("");

// //   useEffect(() => {
// //     const fetchBugs = async () => {
// //       try {
// //         const response = await fetch("http://localhost:3000/bugs");
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch bugs");
// //         }
// //         const data = await response.json();
// //         setBugs(data);
// //       } catch (error) {
// //         console.error("Error fetching bugs:", error);
// //       }
// //     };

// //     fetchBugs();
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const validateForm = () => {
// //     if (!formData.projectId || !formData.bugDescription) {
// //       setErrorMessage("Project ID and Bug Description are required.");
// //       return false;
// //     }
// //     setErrorMessage("");
// //     return true;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;

// //     setIsSubmitting(true);
//     // try {
//     //   const response = await fetch("http://localhost:3000/bugs", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(formData),
//     //   });

//     //   if (!response.ok) {
//     //     throw new Error("Failed to submit bug");
//     //   }

//     //   const newBug = await response.json();
//     //   setBugs((prev) => [...prev, { ...formData, id: newBug.id }]);
//     //   setFormData({ projectId: "", bugDescription: "", stepsToReproduce: "", additionalDetails: "" });
//     //   setIsReporting(false);
//     // } catch (error) {
//     //   setErrorMessage("Failed to submit the bug report. Please try again.");
//     //   console.error("Error submitting bug:", error);
//     // }
//     // setIsSubmitting(false);
// //   };

// //   return (
// //     <div className="min-h-screen w-full flex justify-center items-center py-8">
// //       <div className="bg-white shadow-xl rounded-lg overflow-hidden w-4/5 h-auto p-6">
// //         <h1 className="text-2xl font-bold mb-6">Bug Tracker</h1>

// //         {isReporting ? (
// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //               <label htmlFor="projectId" className="block font-medium mb-1">Project ID</label>
// //               <input
// //                 type="text"
// //                 id="projectId"
// //                 name="projectId"
// //                 value={formData.projectId}
// //                 onChange={handleChange}
// //                 className="w-full border rounded px-3 py-2"
// //                 required
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="bugDescription" className="block font-medium mb-1">Bug Description</label>
// //               <textarea
// //                 id="bugDescription"
// //                 name="bugDescription"
// //                 value={formData.bugDescription}
// //                 onChange={handleChange}
// //                 className="w-full border rounded px-3 py-2"
// //                 required
// //               ></textarea>
// //             </div>
// //             <div>
// //               <label htmlFor="stepsToReproduce" className="block font-medium mb-1">Steps to Reproduce</label>
// //               <textarea
// //                 id="stepsToReproduce"
// //                 name="stepsToReproduce"
// //                 value={formData.stepsToReproduce}
// //                 onChange={handleChange}
// //                 className="w-full border rounded px-3 py-2"
// //               ></textarea>
// //             </div>
// //             <div>
// //               <label htmlFor="additionalDetails" className="block font-medium mb-1">Additional Details</label>
// //               <textarea
// //                 id="additionalDetails"
// //                 name="additionalDetails"
// //                 value={formData.additionalDetails}
// //                 onChange={handleChange}
// //                 className="w-full border rounded px-3 py-2"
// //               ></textarea>
// //             </div>
// //             {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
// //             <div className="flex justify-end space-x-4">
// //               <button
// //                 type="button"
// //                 onClick={() => setIsReporting(false)}
// //                 className="px-4 py-2 bg-gray-500 text-white rounded"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-4 py-2 bg-blue-600 text-white rounded"
// //                 disabled={isSubmitting}
// //               >
// //                 {isSubmitting ? "Submitting..." : "Submit"}
// //               </button>
// //             </div>
// //           </form>
// //         ) : (
// //           <button
// //             onClick={() => setIsReporting(true)}
// //             className="px-4 py-2 bg-green-600 text-white rounded mb-4"
// //           >
// //             Report a Bug
// //           </button>
// //         )}

// //         <h2 className="text-xl font-bold mt-6">Reported Bugs</h2>
// //         <ul className="divide-y divide-gray-200 mt-4">
// //           {bugs.map((bug) => (
// //             <li key={bug.id} className="py-4">
// //               <p><strong>Project ID:</strong> {bug.projectId}</p>
// //               <p><strong>Description:</strong> {bug.bugDescription}</p>
// //               {bug.stepsToReproduce && <p><strong>Steps:</strong> {bug.stepsToReproduce}</p>}
// //               {bug.additionalDetails && <p><strong>Details:</strong> {bug.additionalDetails}</p>}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Bugs;



// import { useState, useEffect } from "react";

// const Bugs = () => {
//     const userId = localStorage.getItem("userId");
//     console.log(userId);
//     const [isReporting, setIsReporting] = useState(false);
//     const [formData, setFormData] = useState({
//         projectId: "",
//         bugDescription: "",
//         stepsToReproduce: "",
//         additionalDetails: "",
//         url: "", // Added url field
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [bugs, setBugs] = useState([]);
//     const [selectedBug, setSelectedBug] = useState(null);

//     useEffect(() => {
//         const fetchBugs = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3000/bugs/${userId}`);
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch bugs");
//                 }
//                 const data = await response.json();
//                 setBugs(data);
//             } catch (error) {
//                 console.error("Error fetching bugs:", error);
//             }
//         };

//         fetchBugs();
//     }, [userId]);

//     const toggleReportingMode = () => {
//         setIsReporting(!isReporting);
//         if (!isReporting) {
//             setFormData({
//                 projectId: "",
//                 bugDescription: "",
//                 stepsToReproduce: "",
//                 additionalDetails: "",
//                 url: "",
//             });
//             setErrorMessage("");
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async () => {
//         if (!validateForm()) {
//             return;
//         }

//         // Normalize steps to be an array
//         const normalizedSteps = formData.stepsToReproduce.split("\n").map((step) => step.trim());
//         const payload = { ...formData, stepsToReproduce: normalizedSteps };

//         try {
//             const response = await fetch(`http://localhost:3000/bugs/${userId}`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to submit bug");
//             }

//             const newBug = await response.json();
//             setBugs((prev) => [...prev, { ...payload, id: newBug.id }]);
//             setFormData({
//                 projectId: "",
//                 bugDescription: "",
//                 stepsToReproduce: "",
//                 additionalDetails: "",
//                 url: "",
//             });
//             setIsReporting(false);
//         } catch (error) {
//             setErrorMessage("Failed to submit the bug report. Please try again.");
//             console.error("Error submitting bug:", error);
//         }
//         setIsSubmitting(false);
//     };

//     const validateForm = () => {
//         if (!formData.projectId || !formData.bugDescription) {
//             setErrorMessage("Please fill in all required fields.");
//             return false;
//         }
//         setErrorMessage("");
//         return true;
//     };

//     const renderInputField = (label, name, isTextarea = false, required = false) => (
//         <div className="mb-6">
//             <label htmlFor={name} className="block text-sm font-medium text-gray-700">
//                 {label}
//                 {required && <span className="text-red-500">*</span>}
//             </label>
//             {isTextarea ? (
//                 <textarea
//                     name={name}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                     className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                     rows="4"
//                     required={required}
//                 />
//             ) : (
//                 <input
//                     type="text"
//                     name={name}
//                     value={formData[name]}
//                     onChange={handleInputChange}
//                     className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                     required={required}
//                 />
//             )}
//         </div>
//     );

//     const handleBugClick = (bug) => {
//         const formattedBug = {
//             ...bug,
//             stepsToReproduce: Array.isArray(bug.stepsToReproduce)
//                 ? bug.stepsToReproduce
//                 : bug.stepsToReproduce.split("\n").map((step) => step.trim()),
//         };
//         setSelectedBug(formattedBug);
//     };

//     const handleBackClick = () => {
//         setSelectedBug(null);
//     };

//     return (
//         <div className="min-h-screen w-full flex justify-center items-center py-0 m-4">
//             <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full h-full">
//                 <div className="bg-blue-600 text-white py-5 px-6 text-center">
//                     <h1 className="text-2xl font-semibold">Report a Bug</h1>
//                 </div>

//                 <div className="px-8 py-10 h-full">
//                     <div className="flex justify-end mb-8">
//                         <button
//                             onClick={toggleReportingMode}
//                             className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
//                         >
//                             {isReporting ? "Cancel" : "Add Bug"}
//                         </button>
//                     </div>
//                     {!isReporting && !selectedBug && (
//                         <div>
//                             {bugs.length === 0 ? (
//                                 <div className="text-center text-gray-500">No bugs reported.</div>
//                             ) : (
//                                 <ul className="pl-5 list-none">
//                                     {bugs.map((bug) => (
//                                         <li
//                                             key={bug.id}
//                                             className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                                             onClick={() => handleBugClick(bug)}
//                                         >
//                                             <div className="text-gray-700 mt-2">
//                                                 <strong>Project ID : </strong> {bug.projectId}
//                                             </div>
//                                             <div className="text-gray-600 mt-2">
//                                                 <strong>Description :</strong> {bug.bugDescription}
//                                             </div>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                     )}
//                     {selectedBug && (
//                         <div className="bg-gray-100 p-4 rounded-lg">
//                             <h2 className="text-xl mb-4">Bug Details</h2>
//                             <p><strong>Project ID: </strong> {selectedBug.projectId}</p>
//                             <p><strong>Description: </strong> {selectedBug.bugDescription}</p>
//                             <p><strong>Steps to Reproduce: </strong></p>
//                             <div className="pl-5">
//                                 {selectedBug.stepsToReproduce.map((step, index) => (
//                                     <p key={index}>{step}</p>
//                                 ))}
//                             </div>
//                             <p><strong>Additional Details: </strong> {selectedBug.additionalDetails}</p>
//                             <p><strong>URL: </strong> {selectedBug.url}</p>
//                             <button
//                                 onClick={handleBackClick}
//                                 className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
//                             >
//                                 Back
//                             </button>
//                         </div>
//                     )}
//                     {isReporting && (
//                         <>
//                             {renderInputField("Project ID", "projectId", false, true)}
//                             {renderInputField("Bug Description", "bugDescription", true, true)}
//                             {renderInputField("Steps to Reproduce", "stepsToReproduce", true)}
//                             {renderInputField("Additional Details", "additionalDetails", true)}
//                             {renderInputField("URL", "url", false)}

//                             {errorMessage && (
//                                 <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
//                             )}

//                             <div className="mt-8 flex justify-end">
//                                 <button
//                                     onClick={handleSubmit}
//                                     disabled={isSubmitting}
//                                     className={`px-6 py-3 rounded-lg text-white font-medium transition duration-200 ${
//                                         isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
//                                     }`}
//                                 >
//                                     {isSubmitting ? "Submitting..." : "Submit"}
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bugs;
import { useState, useEffect } from "react";

const Bugs = () => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    const [isReporting, setIsReporting] = useState(false);
    const [formData, setFormData] = useState({
        projectId: "",
        bugDescription: "",
        stepsToReproduce: "",  // This is still a string here for input purposes
        additionalDetails: "",
        url: "", // Added url field
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [bugs, setBugs] = useState([]);
    const [selectedBug, setSelectedBug] = useState(null);

    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const response = await fetch(`http://localhost:3000/bugs/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch bugs");
                }
                const data = await response.json();
                setBugs(data);
            } catch (error) {
                console.error("Error fetching bugs:", error);
            }
        };

        fetchBugs();
    }, [userId]);

    const toggleReportingMode = () => {
        setIsReporting(!isReporting);
        if (!isReporting) {
            setFormData({
                projectId: "",
                bugDescription: "",
                stepsToReproduce: "",
                additionalDetails: "",
                url: "",
            });
            setErrorMessage("");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        // Normalize steps to be an array
        const normalizedSteps = formData.stepsToReproduce.split("\n").map((step) => step.trim()).filter(Boolean);
        const payload = { ...formData, stepsToReproduce: normalizedSteps };

        try {
            const response = await fetch(`http://localhost:3000/bugs/${userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit bug");
            }

            const newBug = await response.json();
            setBugs((prev) => [...prev, { ...payload, id: newBug.id }]);
            setFormData({
                id: "",
                projectId: "",
                bugDescription: "",
                stepsToReproduce: "",
                additionalDetails: "",
                url: "",
            });
            setIsReporting(false);
        } catch (error) {
            setErrorMessage("Failed to submit the bug report. Please try again.");
            console.error("Error submitting bug:", error);
        }
        setIsSubmitting(false);
    };

    const validateForm = () => {
        if (!formData.projectId || !formData.bugDescription) {
            setErrorMessage("Please fill in all required fields.");
            return false;
        }
        setErrorMessage("");
        return true;
    };

    const renderInputField = (label, name, isTextarea = false, required = false) => (
        <div className="mb-6">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
                {required && <span className="text-red-500">*</span>}
            </label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    rows="4"
                    required={required}
                />
            ) : (
                <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleInputChange}
                    className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                    required={required}
                />
            )}
        </div>
    );

    const handleBugClick = (bug) => {
        const formattedBug = {
            ...bug,
            stepsToReproduce: Array.isArray(bug.stepsToReproduce)
                ? bug.stepsToReproduce
                : bug.stepsToReproduce.split("\n").map((step) => step.trim()),
        };
        setSelectedBug(formattedBug);
    };

    const handleBackClick = () => {
        setSelectedBug(null);
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center py-0 m-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full h-full">
                <div className="bg-blue-600 text-white py-5 px-6 text-center">
                    <h1 className="text-2xl font-semibold">Report a Bug</h1>
                </div>

                <div className="px-8 py-10 h-full">
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={toggleReportingMode}
                            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
                        >
                            {isReporting ? "Cancel" : "Add Bug"}
                        </button>
                    </div>
                    {!isReporting && !selectedBug && (
                        <div>
                            {bugs.length === 0 ? (
                                <div className="text-center text-gray-500">No bugs reported.</div>
                            ) : (
                                <ul className="pl-5 list-none">
                                    {bugs.map((bug) => (
                                        <li
                                            key={bug.id}
                                            className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                                            onClick={() => handleBugClick(bug)}
                                        >
                                            <div className="text-gray-700 mt-2">
                                                <strong>Bug ID : </strong> {bug.id}
                                            </div>
                                            <div className="text-gray-700 mt-2">
                                                <strong>Project ID : </strong> {bug.projectId}
                                            </div>
                                            <div className="text-gray-600 mt-2">
                                                <strong>Description :</strong> {bug.bugDescription}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                    {selectedBug && (
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-xl mb-4">Bug Details</h2>
                            <p><strong>Bug ID: </strong> {selectedBug.id}</p>
                            <p><strong>Project ID: </strong> {selectedBug.projectId}</p>
                            <p><strong>Description: </strong> {selectedBug.bugDescription}</p>
                            <p><strong>Steps to Reproduce: </strong></p>
                            <div className="pl-5">
                                {selectedBug.stepsToReproduce.map((step, index) => (
                                    <p key={index}>{step}</p>
                                ))}
                            </div>
                            <p><strong>Additional Details: </strong> {selectedBug.additionalDetails}</p>
                            <p><strong>URL: </strong> {selectedBug.url}</p>
                            <button
                                onClick={handleBackClick}
                                className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
                            >
                                Back
                            </button>
                        </div>
                    )}
                    {isReporting && (
                        <>
                            {renderInputField("Project ID", "projectId", false, true)}
                            {renderInputField("Bug Description", "bugDescription", true, true)}
                            {renderInputField("Steps to Reproduce", "stepsToReproduce", true)}
                            {renderInputField("Additional Details", "additionalDetails", true)}
                            {renderInputField("URL", "url", false)}

                            {errorMessage && (
                                <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
                            )}

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`px-6 py-3 rounded-lg text-white font-medium transition duration-200 ${
                                        isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-500"
                                    }`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Bugs;

// import { useState, useEffect } from "react";

// const Bugs = () => {
//     const userId = localStorage.getItem("userId");
//     const [isReporting, setIsReporting] = useState(false);
//     const [formData, setFormData] = useState({
//         projectId: "",
//         bugDescription: "",
//         stepsToReproduce: "",
//         additionalDetails: "",
//         url: "",
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [bugs, setBugs] = useState([]);
//     const [selectedBug, setSelectedBug] = useState(null);
//     const [searchText, setSearchText] = useState("");
//     const [searchField, setSearchField] = useState({
//         bugId: true,
//         projectId: true,
//         bugDescription: false,
//     });

//     useEffect(() => {
//         const fetchBugs = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3000/bugs/${userId}`);
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch bugs");
//                 }
//                 const data = await response.json();
//                 setBugs(data);
//             } catch (error) {
//                 console.error("Error fetching bugs:", error);
//             }
//         };

//         fetchBugs();
//     }, [userId]);

//     const toggleReportingMode = () => {
//         setIsReporting(!isReporting);
//         if (!isReporting) {
//             setFormData({
//                 projectId: "",
//                 bugDescription: "",
//                 stepsToReproduce: "",
//                 additionalDetails: "",
//                 url: "",
//             });
//             setErrorMessage("");
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async () => {
//         if (!validateForm()) {
//             return;
//         }

//         const normalizedSteps = formData.stepsToReproduce.split("\n").map((step) => step.trim()).filter(Boolean);
//         const payload = { ...formData, stepsToReproduce: normalizedSteps };

//         try {
//             const response = await fetch(`http://localhost:3000/bugs/${userId}`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to submit bug");
//             }

//             const newBug = await response.json();
//             setBugs((prev) => [...prev, { ...payload, id: newBug.id }]);
//             setFormData({
//                 id: "",
//                 projectId: "",
//                 bugDescription: "",
//                 stepsToReproduce: "",
//                 additionalDetails: "",
//                 url: "",
//             });
//             setIsReporting(false);
//         } catch (error) {
//             setErrorMessage("Failed to submit the bug report. Please try again.");
//             console.error("Error submitting bug:", error);
//         }
//         setIsSubmitting(false);
//     };

//     const validateForm = () => {
//         if (!formData.projectId || !formData.bugDescription) {
//             setErrorMessage("Please fill in all required fields.");
//             return false;
//         }
//         setErrorMessage("");
//         return true;
//     };

//     const handleBugClick = (bug) => {
//         const formattedBug = {
//             ...bug,
//             stepsToReproduce: Array.isArray(bug.stepsToReproduce)
//                 ? bug.stepsToReproduce
//                 : bug.stepsToReproduce.split("\n").map((step) => step.trim()),
//         };
//         setSelectedBug(formattedBug);
//     };

//     const handleBackClick = () => {
//         setSelectedBug(null);
//     };

//     const handleSearchChange = (e) => {
//         setSearchText(e.target.value);
//     };

//     const handleCheckboxChange = (e) => {
//         const { name, checked } = e.target;
//         setSearchField((prev) => ({ ...prev, [name]: checked }));
//     };

//     const filteredBugs = bugs.filter((bug) => {
//         const lowerSearchText = searchText.toLowerCase();
//         return (
//             (searchField.bugId && bug.id.toString().toLowerCase().includes(lowerSearchText)) ||
//             (searchField.projectId && bug.projectId.toLowerCase().includes(lowerSearchText)) ||
//             (searchField.bugDescription && bug.bugDescription.toLowerCase().includes(lowerSearchText))
//         );
//     });

//     return (
//         <div className="min-h-screen w-full flex justify-center items-center py-0 m-4">
//             <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full h-full">
//                 <div className="bg-blue-600 text-white py-5 px-6 text-center">
//                     <h1 className="text-2xl font-semibold">Report a Bug</h1>
//                 </div>

//                 <div className="px-8 py-10 h-full">
//                     <div className="mb-8">
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             value={searchText}
//                             onChange={handleSearchChange}
//                             className="p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
//                         />
//                         <div className="mt-4 flex gap-4">
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     name="bugId"
//                                     checked={searchField.bugId}
//                                     onChange={handleCheckboxChange}
//                                 />{" "}
//                                 Bug ID
//                             </label>
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     name="projectId"
//                                     checked={searchField.projectId}
//                                     onChange={handleCheckboxChange}
//                                 />{" "}
//                                 Project ID
//                             </label>
//                             <label>
//                                 <input
//                                     type="checkbox"
//                                     name="bugDescription"
//                                     checked={searchField.bugDescription}
//                                     onChange={handleCheckboxChange}
//                                 />{" "}
//                                 Bug Description
//                             </label>
//                         </div>
//                     </div>

//                     {!isReporting && !selectedBug && (
//                         <div>
//                             {filteredBugs.length === 0 ? (
//                                 <div className="text-center text-gray-500">No bugs found.</div>
//                             ) : (
//                                 <ul className="pl-5 list-none">
//                                     {filteredBugs.map((bug) => (
//                                         <li
//                                             key={bug.id}
//                                             className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
//                                             onClick={() => handleBugClick(bug)}
//                                         >
//                                             <div className="text-gray-700 mt-2">
//                                                 <strong>Bug ID : </strong> {bug.id}
//                                             </div>
//                                             <div className="text-gray-700 mt-2">
//                                                 <strong>Project ID : </strong> {bug.projectId}
//                                             </div>
//                                             <div className="text-gray-600 mt-2">
//                                                 <strong>Description :</strong> {bug.bugDescription}
//                                             </div>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                     )}

//                     {/* Report Bug Button */}
//                     {!isReporting && !selectedBug && (
//                         <div className="text-center">
//                             <button
//                                 onClick={toggleReportingMode}
//                                 className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
//                             >
//                                 Add Bug
//                             </button>
//                         </div>
//                     )}

//                     {/* Report Bug Form */}
//                     {isReporting && (
//                         <div className="mt-6">
//                             <h3 className="text-xl font-semibold mb-4">Bug Reporting Form</h3>
//                             {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

//                             <div className="space-y-4">
//                                 <div>
//                                     <label htmlFor="projectId" className="block text-sm font-medium">
//                                         Project ID
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="projectId"
//                                         name="projectId"
//                                         value={formData.projectId}
//                                         onChange={handleInputChange}
//                                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="bugDescription" className="block text-sm font-medium">
//                                         Bug Description
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="bugDescription"
//                                         name="bugDescription"
//                                         value={formData.bugDescription}
//                                         onChange={handleInputChange}
//                                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="stepsToReproduce" className="block text-sm font-medium">
//                                         Steps to Reproduce
//                                     </label>
//                                     <textarea
//                                         id="stepsToReproduce"
//                                         name="stepsToReproduce"
//                                         value={formData.stepsToReproduce}
//                                         onChange={handleInputChange}
//                                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                                     ></textarea>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="additionalDetails" className="block text-sm font-medium">
//                                         Additional Details
//                                     </label>
//                                     <textarea
//                                         id="additionalDetails"
//                                         name="additionalDetails"
//                                         value={formData.additionalDetails}
//                                         onChange={handleInputChange}
//                                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                                     ></textarea>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="url" className="block text-sm font-medium">
//                                         URL (if applicable)
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="url"
//                                         name="url"
//                                         value={formData.url}
//                                         onChange={handleInputChange}
//                                         className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                                     />
//                                 </div>

//                                 <div className="text-center mt-6">
//                                     <button
//                                         onClick={handleSubmit}
//                                         className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
//                                     >
//                                         {isSubmitting ? "Submitting..." : "Submit Bug"}
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Selected Bug Details */}
//                     {selectedBug && (
//                         <div className="mt-6">
//                             <button
//                                 onClick={handleBackClick}
//                                 className="text-blue-500 hover:underline"
//                             >
//                                 Back to Bugs List
//                             </button>
//                             <div className="mt-4">
//                                 <h3 className="text-xl font-semibold mb-4">Bug Details</h3>
//                                 <p><strong>Bug ID:</strong> {selectedBug.id}</p>
//                                 <p><strong>Project ID:</strong> {selectedBug.projectId}</p>
//                                 <p><strong>Description:</strong> {selectedBug.bugDescription}</p>
//                                 <p><strong>Steps to Reproduce:</strong></p>
//                                 <ul>
//                                     {selectedBug.stepsToReproduce.map((step, index) => (
//                                         <li key={index}>{step}</li>
//                                     ))}
//                                 </ul>
//                                 <p><strong>Additional Details:</strong> {selectedBug.additionalDetails}</p>
//                                 <p><strong>URL:</strong> {selectedBug.url}</p>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Bugs;

