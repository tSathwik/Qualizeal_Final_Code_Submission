import React, { useState } from "react";

const InterestsInfo = () => {
  const [hobbies, setHobbies] = useState("Select");
  const [gambling, setGambling] = useState("Select");
  const [fitness, setFitness] = useState("Select");
  const [willing, setWilling] = useState(null);

  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Header Section */}
        <div className="bg-blue-600 text-white py-5 px-6 text-center">
          <h1 className="text-2xl font-semibold">Interests Info</h1>
        </div>

        <div className="px-8 py-10">
          {/* Hobbies */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Hobbies <span className="text-red-600">*</span>
            </label>
            <select
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              <option>Select</option>
              <option>Cricket</option>
              <option>Art</option>
            </select>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                onChange={() => setHobbies("Select")}
                className="mr-2"
              />
              <label className="text-sm text-gray-500">I don't have any</label>
            </div>
          </div>

          {/* Willing to Participate */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Are you willing to participate in testing related to monetized
              gambling or casino games? <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                checked={willing === true}
                onChange={() => setWilling(true)}
                className="mr-2"
              />
              <label className="text-sm text-gray-500 mr-4">Yes</label>

              <input
                type="radio"
                checked={willing === false}
                onChange={() => setWilling(false)}
                className="mr-2"
              />
              <label className="text-sm text-gray-500">No</label>
            </div>
          </div>

          {/* Gambling */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              With which Gambling or Fantasy Sports apps or sites do you have an
              existing account (if legal in your location)?{" "}
              <span className="text-red-600">*</span>
            </label>
            <select
              value={gambling}
              onChange={(e) => setGambling(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              <option>Select</option>
              <option>188 bet</option>
              <option>888 casino</option>
            </select>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                onChange={() => setGambling("Select")}
                className="mr-2"
              />
              <label className="text-sm text-gray-500">I don't have any</label>
            </div>
          </div>

          {/* Fitness */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Fitness Activities & Sports{" "}
              <span className="text-red-600">*</span>
            </label>
            <select
              value={fitness}
              onChange={(e) => setFitness(e.target.value)}
              className="mt-1 p-3 block w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              <option>Select</option>
              <option>Aerobics</option>
              <option>Archery</option>
            </select>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                onChange={() => setFitness("Select")}
                className="mr-2"
              />
              <label className="text-sm text-gray-500">I don't have any</label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6">
            <button className="bg-gray-300 text-black py-2 px-4 rounded-md mr-2">
              Cancel
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestsInfo;
