import React, { useState } from 'react';

const InterestsInfo = () => {
    const [hobbies, setHobbies] = useState('Select');
    const [gambling, setGambling] = useState('Select');
    const [fitness, setFitness] = useState('Select');
    const [willing, setWilling] = useState(null); 

    return (
        <div className="p-8 bg-blue-50 min-h-screen">
            <div className="text-center text-4xl font-semibold mb-10 text-gray-800">
                <h1>Interests Info</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl ">

                {/* Hobbies */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Hobbies <span className='text-red-600'>*</span>
                    </label>
                    <select
                        value={hobbies}
                        onChange={(e) => setHobbies(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>Cricket</option>
                        <option>Art</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setHobbies('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Willing to participate */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Are you willing to participate in testing related to monetized gambling or casino games? <span className='text-red-600'>*</span>
                    </label>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            checked={willing === true}
                            onChange={() => setWilling(true)}
                            className="mr-2"
                        />
                        <label className=" font-medium text-gray-500 mr-4">Yes</label>
                        
                        <input
                            type="radio"
                            checked={willing === false}
                            onChange={() => setWilling(false)}
                            className="mr-2"
                        />
                        <label className="font-medium text-gray-500">No</label>
                    </div>
                </div>

                {/* Gambling */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                        With which Gambling or Fantasy Sports apps or sites do you have an existing account (if legal in your location)? <span className='text-red-600'>*</span>
                    </label>
                    <select
                        value={gambling}
                        onChange={(e) => setGambling(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>188 bet</option>
                        <option>888 casino</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setGambling('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Fitness */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">
                        Fitness Activities & Sports <span className='text-red-600'>*</span>
                    </label>
                    <select
                        value={fitness}
                        onChange={(e) => setFitness(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>Aerobics</option>
                        <option>Archery</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setFitness('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterestsInfo;
