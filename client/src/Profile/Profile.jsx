import React from 'react'
import Offcanvas from '../dashboard/Offcanvas'
import DashNav from '../dashboard/DashNav'
import PersonalInfo from './PersonalInfo'

const Profile = () => {
    return (
        <>
            <div className="ml-64 p-4 bg-gray-100">
                <DashNav val={"Profile"} />
            </div>
            <div className="ml-64 min-h-screen">
                <Offcanvas></Offcanvas>
                <div className='p-3 bg-gradient-to-r from-blue-900 to-blue-950 rounded-xl m-7'></div>
                <div className='text-center mt-5 text-3xl font-bold'>
                    <h1>Checkout your Profile here</h1>
                </div>
                <div className='flex justify-center my-5'>
                    <ul>
                        <div className='flex gap-7 '>
                            <li>Personal</li>
                            <li>Address</li>
                            <li>Devices</li>
                            <li>Payment Testing</li>
                            <li>Subscriptions</li>
                            <li>Interests</li>
                            <li>Statistics</li>
                        </div>
                    </ul>
                </div>
                <hr className='mb-3'/>
                <PersonalInfo/>
            </div>
        </>
    )

}

export default Profile
