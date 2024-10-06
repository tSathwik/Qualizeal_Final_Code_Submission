import React, { useState } from 'react';

const SubscriptionInfo = () => {
    // State for subscription types and checkboxes
    const [entertainment, setEntertainment] = useState('Select');
    const [loyaltyPrograms, setLoyaltyPrograms] = useState('Select');
    const [carSharingService, setCarSharingService] = useState('Select');
    const [tvProvider, setTvProvider] = useState('Select');
    const [internetServiceProvider, setInternetServiceProvider] = useState(false);
    const [energyProvider, setEnergyProvider] = useState(false);

    return (
        <div className="p-8 bg-blue-50 min-h-screen">
            <div className="text-center text-4xl font-semibold mb-10 text-gray-800">
              <h1>Subscription Info</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl ">
                {/* Entertainment */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Entertainment</label>
                    <select
                        value={entertainment}
                        onChange={(e) => setEntertainment(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>Amazon Prime</option>
                        <option>Airtel</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setEntertainment('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Loyalty Programs */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Loyalty Programs</label>
                    <select
                        value={loyaltyPrograms}
                        onChange={(e) => setLoyaltyPrograms(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>AAA Membership</option>
                        <option>AAdvantage</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setLoyaltyPrograms('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Car Sharing Service */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Car Sharing Service</label>
                    <select
                        value={carSharingService}
                        onChange={(e) => setCarSharingService(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>99</option>
                        <option>Anytime</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setCarSharingService('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* TV Provider */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">TV Provider</label>
                    <select
                        value={tvProvider}
                        onChange={(e) => setTvProvider(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option>Select</option>
                        <option>AT&T</option>
                        <option>A1</option>
                    </select>
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            onChange={() => setTvProvider('Select')}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have any</label>
                    </div>
                </div>

                {/* Internet Service Provider */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Internet Service Provider</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={internetServiceProvider}
                            onChange={() => setInternetServiceProvider(!internetServiceProvider)}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have an Internet service provider</label>
                    </div>
                    <button className="mt-2 bg-gray-500 text-white py-1 px-4 rounded">Add</button>
                </div>

                {/* Energy Provider */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Energy Provider</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={energyProvider}
                            onChange={() => setEnergyProvider(!energyProvider)}
                            className="mr-2"
                        />
                        <label className="text-sm text-gray-500">I don't have an energy provider</label>
                    </div>
                    <button className="mt-2 bg-gray-500 text-white py-1 px-4 rounded">Add</button>
                </div>

                {/* Don't see your subscription? */}
                <div className="mt-6">
                    <p className="text-sm">Don't see your subscription?</p>
                    <button className="mt-2 text-blue-600 underline">Contact Support to request that it be added to the system</button>
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6">
                    <button className="bg-gray-300 text-black py-2 px-4 rounded-md mr-2">Cancel</button>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Save</button>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionInfo;
