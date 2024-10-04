import React, { useState } from "react";

const Help = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Help & Support</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            For any assistance, feel free to reach out to us at <strong>support@testershive.com</strong>. Our team is
            available 24/7 to assist you with any issues or inquiries.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div
              className="bg-white p-4 rounded-lg shadow-md"
              onClick={() => toggleFaq(1)}
            >
              <h3 className="text-lg font-medium text-gray-800 cursor-pointer">
                What is TestersHive?
              </h3>
              {faqOpen === 1 && (
                <p className="text-gray-600 mt-2">
                  TestersHive is a leading platform connecting skilled testers with companies needing quality assurance for
                  their software products. We provide opportunities for testers to work on various projects and earn money.
                </p>
              )}
            </div>
            <div
              className="bg-white p-4 rounded-lg shadow-md"
              onClick={() => toggleFaq(2)}
            >
              <h3 className="text-lg font-medium text-gray-800 cursor-pointer">
                How can I join TestersHive as a tester?
              </h3>
              {faqOpen === 2 && (
                <p className="text-gray-600 mt-2">
                  Joining TestersHive is simple. Click on the 'Sign Up' button on our homepage, fill in the required details, and
                  start your journey as a tester. Once registered, you'll have access to various testing projects.
                </p>
              )}
            </div>
            <div
              className="bg-white p-4 rounded-lg shadow-md"
              onClick={() => toggleFaq(3)}
            >
              <h3 className="text-lg font-medium text-gray-800 cursor-pointer">
                How do I get paid for my testing work?
              </h3>
              {faqOpen === 3 && (
                <p className="text-gray-600 mt-2">
                  Testers are paid via the payment method they choose during registration. Payments are processed once your
                  work is reviewed and approved by the project owner. We ensure timely payments for all completed work.
                </p>
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submit a Support Request</h2>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Issue</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows="5"
                placeholder="Describe your issue here"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              className="w-fit  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Help;
