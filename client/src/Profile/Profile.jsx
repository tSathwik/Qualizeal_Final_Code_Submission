import React, { useState } from 'react';
import Offcanvas from '../dashboard/Offcanvas';
import DashNav from '../dashboard/DashNav';
import PersonalInfo from './PersonalInfo';

const Profile = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('Personal');

    // Function to set the active tab on click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="ml-64 p-4 bg-gray-100">
                <DashNav val={"Profile"} />
            </div>
            <div className="ml-64 min-h-screen">
                <Offcanvas />
                <div className='p-3 bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl m-7'></div>
                <div className='text-center mt-5 text-3xl font-bold'>
                    <h1>Checkout your Profile here</h1>
                </div>
                <div className='flex justify-center my-5'>
                    <ul>
                        <div className='flex gap-7'>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Personal' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Personal')}
                            >
                                Personal
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Address' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Address')}
                            >
                                Address
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Devices' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Devices')}
                            >
                                Devices
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Payment Testing' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Payment Testing')}
                            >
                                Payment Testing
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Subscriptions' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Subscriptions')}
                            >
                                Subscriptions
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Interests' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Interests')}
                            >
                                Interests
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'Statistics' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('Statistics')}
                            >
                                Statistics
                            </li>
                        </div>
                    </ul>
                </div>
                <hr className='mb-3' />
                <PersonalInfo />
            </div>
        </>
    );
};

export default Profile;
