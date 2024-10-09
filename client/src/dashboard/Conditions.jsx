import React from 'react'
import { privacyData } from "../constants";
const Guidlines = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6  ml-64">
            <div className="bg-white border-2 shadow-md p-10 rounded-lg w-full max-w-4xl">
                {/* <div className="border-2 p-10 rounded-lg"> */}
                    <p className="font-bold text-4xl">Terms of Use for TestersHive Testers</p>
                    <p className="font-semibold">Effective as may</p>
                    <p className="font-semibold">Updated</p>
                    {privacyData.map((data, index) => (
                        <div key={data.id}>
                            <p className="font-bold mt-4 mb-4">
                                {data.id + ". " + data.heading}
                            </p>
                            <p className="text-sm">{data.matter}</p>
                        </div>
                    ))}
                    <p className="mt-10 italic font-semibold">
                        This is late updated on so and so
                    </p>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Guidlines
