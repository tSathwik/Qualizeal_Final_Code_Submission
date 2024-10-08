import React from 'react'

const StatisticsInfo = () => {
  return (
    <div className="min-h-screen p-10 bg-blue-50">

    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold">Testing History</h1>
      <p className="text-lg mt-2">Overview</p>
    </div>

    
    <div className="flex justify-around gap-10">
    
      <div className="bg-white shadow-md p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-5">RIGHT NOW ON UTEST</h2>
        <div className="mb-3">
          <p>Testers</p>
          <p className="text-2xl font-bold">2,070,664</p>
        </div>
        <div className="mb-3">
          <p>Test Cycles</p>
          <p className="text-2xl font-bold">472,215</p>
        </div>
        <div className="mb-3">
          <p>Products</p>
          <p className="text-2xl font-bold">34,319</p>
        </div>
      </div>

      <div className="bg-white shadow-md p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-5">RATING</h2>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="mr-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                Fn
              </span>
              Functional
            </span>
            <span className="bg-gray-300 rounded-full p-2">U</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="mr-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                Ux
              </span>
              Usability
            </span>
            <span className="bg-gray-300 rounded-full p-2">U</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="mr-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                Ld
              </span>
              Load
            </span>
            <span className="bg-gray-300 rounded-full p-2">U</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="mr-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                Sc
              </span>
              Security
            </span>
            <span className="bg-gray-300 rounded-full p-2">U</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="mr-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                Ln
              </span>
              Localization
            </span>
            <span className="bg-gray-300 rounded-full p-2">U</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center">
              <span className="mr-2 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                Ac
              </span>
              Accessibility
            </span>
            <span className="bg-gray-300 rounded-full p-2">U</span>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-md p-5 rounded-lg">
        <h2 className="text-xl font-bold mb-5">MY ACTIVITY</h2>
        <div className="mb-3">
          <p>Test Cycles</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="mb-3">
          <p>Issues</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="mb-3">
          <p>Test Cases</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="mb-3">
          <p>Products</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="mb-3">
          <p>Favorites</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StatisticsInfo
