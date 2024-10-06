import React, { useState } from 'react';
import Offcanvas from '../dashboard/Offcanvas';
import DashNav from '../dashboard/DashNav';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo'; // Import AddressInfo component
import DevicesInfo from './DevicesInfo'; // Import DevicesInfo component
import PaymentTestingInfo from './PaymentTestingInfo'; // Import PaymentTestingInfo component
import SubscriptionInfo from './SubscriptionInfo'; // Import SubscriptionInfo component
import InterestsInfo from './InterestsInfo'; // Import InterestsInfo component
import StatisticsInfo from './StatisticsInfo'; // Import StatisticsInfo component

const Profile = () => {
    // State to manage the active tab
    const [activeTab, setActiveTab] = useState('Personal');

    // Function to set the active tab on click
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // Conditionally render the content based on activeTab
    const renderContent = () => {
        switch (activeTab) {
            case 'Personal':
                return <PersonalInfo />;
            case 'Address':
                return <AddressInfo />;
            case 'Devices':
                return <DevicesInfo />;
            case 'Payment Testing':
                return <PaymentTestingInfo />;
            case 'SubscriptionInfo':
                return <SubscriptionInfo />;
            case 'InterestsInfo':
                return <InterestsInfo />;
            case 'StatisticsInfo':
                return <StatisticsInfo />;
            default:
                return <PersonalInfo />;
        }
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
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'SubscriptionInfo' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('SubscriptionInfo')}
                            >
                                SubscriptionInfo
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'InterestsInfo' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('InterestsInfo')}
                            >
                                InterestsInfo
                            </li>
                            <li
                                className={`cursor-pointer transition-all duration-300 ${activeTab === 'StatisticsInfo' ? 'underline text-blue-500' : 'hover:text-blue-300'}`}
                                onClick={() => handleTabClick('StatisticsInfo')}
                            >
                                StatisticsInfo
                            </li>
                        </div>
                    </ul>
                </div>
                <hr className='mb-3' />
                {/* Render the appropriate component based on the active tab */}
                <div className="p-4">
                    {renderContent()}
                </div>
            </div>
        </>
    );
};

export default Profile;
