import React, { useState } from "react";
import Offcanvas from "../dashboard/Offcanvas";
import DashNav from "../dashboard/DashNav";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import DevicesInfo from "./DevicesInfo";
import PaymentTestingInfo from "./PaymentTestingInfo";
import SubscriptionInfo from "./SubscriptionInfo";
import InterestsInfo from "./InterestsInfo";
import StatisticsInfo from "./StatisticsInfo";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Personal":
        return <PersonalInfo />;
      case "Address":
        return <AddressInfo />;
      case "Devices":
        return <DevicesInfo />;

      case "SubscriptionInfo":
        return <SubscriptionInfo />;
      case "InterestsInfo":
        return <InterestsInfo />;
    }
  };

  return (
    <>
      <div className="ml-64 p-4 ">
        <DashNav val={""} />
      </div>
      <div className="ml-64 min-h-screen">
        <Offcanvas />

        <div className="flex justify-center my-5">
          <ul className="flex space-x-8 bg-white rounded-lg  p-2">
            {[
              "Personal",
              "Address",
              "Devices",
              "SubscriptionInfo",
              "InterestsInfo",
              ,
            ].map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer transition-all duration-300 py-2 px-4 rounded-lg ${
                  activeTab === tab
                    ? "bg-blue-500 text-white font-semibold"
                    : "text-blue-500 hover:bg-blue-100 hover:text-blue-700"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">{renderContent()}</div>
      </div>
    </>
  );
};

export default Profile;
