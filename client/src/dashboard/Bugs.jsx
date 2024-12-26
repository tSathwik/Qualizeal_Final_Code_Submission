import React, { useState } from "react";

const Bugs = () => {
    const [isReporting, setIsReporting] = useState(false);
    const [formData, setFormData] = useState({
        projectId: "",
        bugDescription: "",
        stepsToReproduce: "",
        additionalDetails: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [bugs, setBugs] = useState([
        // Initial bugs can be added here
        { id: 1, projectId: "123", bugDescription: "Sample bug 1", stepsToReproduce: "Step 1", additionalDetails: "Details 1" },
        { id: 2, projectId: "456", bugDescription: "Sample bug 2", stepsToReproduce: "Step 2", additionalDetails: "Details 2" },
    ]);
    const [selectedBug, setSelectedBug] = useState(null);

    const toggleReportingMode = () => {
        setIsReporting(!isReporting);
        if (!isReporting) {
            setFormData({
                projectId: "",
                bugDescription: "",
                stepsToReproduce: "",
                additionalDetails: "",
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
        setIsSubmitting(true);
        try {
            // Simulate submission logic
            const newBug = { ...formData, id: bugs.length + 1 };
            setBugs([...bugs, newBug]);
            setIsReporting(false);
        } catch (error) {
            setErrorMessage("Failed to submit the bug report. Please try again.");
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
        setSelectedBug(bug);
    };

    const handleBackClick = () => {
        setSelectedBug(null);
    };

    return (
        <div className="min-h-screen w-full flex justify-center items-center py-0 m-4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full h-full">
                {/* Header Section */}
                <div className="bg-blue-600 text-white py-5 px-6 text-center">
                    <h1 className="text-2xl font-semibold">Report a Bug</h1>
                </div>

                <div className="px-8 py-10 h-full">
                    {/* Toggle Button */}
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={toggleReportingMode}
                            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
                        >
                            {isReporting ? "Cancel" : "Add Bug"}
                        </button>
                    </div>

                    {/* List of Bugs */}
                    {!isReporting && !selectedBug && (
                        <div>
                            {bugs.length === 0 ? (
                                <div className="text-center text-gray-500">No bugs reported.</div>
                            ) : (
                                <ul className="list-disc pl-5">
                                    {bugs.map((bug) => (
                                        <li key={bug.id} className="mb-2 bg-gray-100 p-4 rounded-lg cursor-pointer" onClick={() => handleBugClick(bug)}>
                                            <strong>Project ID:</strong> {bug.projectId} - <strong>Description:</strong> {bug.bugDescription}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Bug Details */}
                    {selectedBug && (
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4">Bug Details</h2>
                            <p><strong>Project ID:</strong> {selectedBug.projectId}</p>
                            <p><strong>Description:</strong> {selectedBug.bugDescription}</p>
                            <p><strong>Steps to Reproduce:</strong> {selectedBug.stepsToReproduce}</p>
                            <p><strong>Additional Details:</strong> {selectedBug.additionalDetails}</p>
                            <button
                                onClick={handleBackClick}
                                className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
                            >
                                Back
                            </button>
                        </div>
                    )}

                    {/* Form Section */}
                    {isReporting && (
                        <>
                            {renderInputField("Project ID", "projectId", false, true)}
                            {renderInputField("Bug Description", "bugDescription", true, true)}
                            {renderInputField("Steps to Reproduce", "stepsToReproduce", true)}
                            {renderInputField("Additional Details", "additionalDetails", true)}

                            {/* Error Message */}
                            {errorMessage && (
                                <div className="text-red-500 text-sm mt-4">{errorMessage}</div>
                            )}

                            {/* Submit Button */}
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