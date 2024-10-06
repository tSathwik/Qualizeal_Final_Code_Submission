import React from 'react'

const AddressInfo = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-start items-center py-10">
      <div className="text-center text-4xl font-semibold mb-10 text-gray-800">
        <h1>Address Info</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
       {/* <img 
          src={user1} 
          alt="User Profile" 
          className="w-48 h-48 rounded-full mb-5 md:mb-0 md:mr-10 shadow-lg" 
        />*/}
        <div className="mx-5 bg-white rounded-xl shadow-lg p-6 w-full md:w-80">
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">City</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">Hyderabad</div>
          </div>
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Zip or postal code</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">500049</div>
          </div>
          <div className="mb-5">
            <h2 className="font-semibold text-lg text-gray-700">Country</h2>
            <div className="bg-gray-100 rounded-md px-4 py-3 text-xl">India</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressInfo
