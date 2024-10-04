import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";

const ContactForm = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-16 bg-gray-100">
            {/* Left Side with Contact Details */}
            <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-16 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">We'd love to hear from you! Please fill out the form below or reach out to us using the contact information provided.</p>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        <IoIosArrowForward className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700">info@example.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <IoChevronBack className="w-6 h-6 text-blue-500" />
                        <p className="text-gray-700">123 Main Street, Anytown, USA</p>
                    </div>
                </div>
            </div>

            {/* Right Side with Contact Form */}
            <div className="flex flex-col w-full lg:w-1/2 p-8 lg:p-16 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
