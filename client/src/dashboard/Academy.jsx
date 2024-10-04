import React from "react";
import Offcanvas from "./Offcanvas";
import DashNav from "./DashNav";
import Cards from "./Cards";

const cardData = [
  { no: "1", title: "Introduction to uTest", desc: "Learn about TestersHive." },
  {
    no: "2",
    title: "uTest.com Navigation",
    desc: "This course teaches how to navigate inside uTest.com",
  },
  { no: "3", title: "uTest Mobile App", desc: "Learn about TestersHive." },
  { no: "4", title: "uTest Basics", desc: "uTest Basics." },
  { no: "5", title: "Testing Basics", desc: "Learn about TestersHive." },
  { no: "6", title: "AcademyBugs.com", desc: "Learn about TestersHive." },
  { no: "7", title: "uTest Cycle Process", desc: "Learn about TestersHive." },
  {
    no: "8",
    title: "Slots, Test Cases and Reviews",
    desc: "Learn about TestersHive.",
  },
  { no: "9", title: "Issue Reports", desc: "Learn about TestersHive." },
  { no: "10", title: "Screenshots", desc: "Learn about TestersHive." },
  { no: "11", title: "Screen Recordings", desc: "Learn about TestersHive." },
  { no: "12", title: "Browser Logs", desc: "Learn about TestersHive." },
  { no: "13", title: "Mobile Device Logs", desc: "Learn about TestersHive." },
  { no: "14", title: "Web Debugging Proxy", desc: "Learn about TestersHive." },
  {
    no: "15",
    title: "Personally Identifiable Information (PII)",
    desc: "Learn what is personally identifiable information and how to protect it.",
  },
  {
    no: "16",
    title: "Academy Tips and Tricks",
    desc: "Learn how to succeed at uTest and become a very good tester. After learning all the basics, it is highly recommended to review this track again.",
  },
  {
    no: "16",
    title: "Introduction to Testing",
    desc: "This course teaches how to participate in the practice test cycle called: Introduction to Testing.",
  },
  {
    no: "17",
    title: "Computer Testing",
    desc: "This course teaches how to participate in the practice test cycle called: Computer Testing.",
  },
  {
    no: "18",
    title: "Mobile Device Testing",
    desc: "This course teaches how to participate in the practice test cycle called: Mobile Device Testing.",
  },
  {
    no: "19",
    title: "Charles Proxy Testing",
    desc: "This course teaches how to participate in the practice test cycle called: Charles Proxy Testing.",
  },
  {
    no: "20",
    title: "Academy Challenge Testing",
    desc: "This course teaches how to participate in the practice test cycle called: Academy Challenge.",
  },
  {
    no: "21",
    title: "Payment Testing",
    desc: "This course provides info on what Payment Testing is, best practices and how to set up your profile for Payment Testing.",
  },
  {
    no: "22",
    title: "Amazon Alexa Testing",
    desc: "This course introduces you to Amazon Alexa, teaches the basics of how to use it and how to work with it.",
  },
  {
    no: "23",
    title: "API Testing",
    desc: "This course teaches the basics of HTTP protocol and using an API testing tool.",
  },
  {
    no: "24",
    title: "Usability Testing",
    desc: "This course teaches the basics of usability testing and how to succeed in usability test cycles.",
  },
  {
    no: "25",
    title: "Online Gambling Testing",
    desc: "Learn the basics of Online Gambling Testing.",
  },
  {
    no: "26",
    title: "Voice Testing",
    desc: "Learn the Voice Testing basics at uTest.",
  },
  {
    no: "27",
    title: "Localization Testing",
    desc: "Learn the Localization Testing basics at uTest.",
  },
  {
    no: "28",
    title: "Streaming Apps Testing",
    desc: "Learn the streaming and live streaming testing basics at uTest.",
  },
  {
    no: "29",
    title: "Connected TV Devices (CTV)",
    desc: "This course teaches you how to set up your CTV device, install builds, and how to collect logs from different CTV devices.",
  },
];

const Academy = () => {
  return (
    <div className="ml-64 min-h-screen flex">
      <Offcanvas />
      <div>
        <div className="p-4  flex-1 bg-gray-100">
          <DashNav />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-center mt-6">
            Welcome to the TesersHive Academy
          </h1>
        </div>
        <div className="gap-6 mt-7 text-center w-5/6 p-5">
          The Academy offers a range of courses to improve your skills as a
          tester. Learn new topics, get certified, and increase your tester rank
          to land the best-paying testing opportunities.
        </div>
        <div className="grid grid-cols-3 p-4 gap-6 justify-around mt-6 mb-6">
          {cardData.map((card) => (
            <Cards
              key={card.no}
              no={card.no}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;
