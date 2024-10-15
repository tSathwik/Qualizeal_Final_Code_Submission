import React from "react";
import DashNav from "../dashboard/DashNav";
import Offcanvas from "../dashboard/Offcanvas";

const AcademyPage = () => {
  const faqs = [
    {
      question: "Welcome to TestersHive",
      answer: "Hello and welcome to TestersHive, a global community that helps testers improve the quality of products from companies around the world.",
    },
    {
      question: "TestersHive Vision",
      answer: "Our vision is to offer opportunities for testers to learn, earn, and connect with others in the testing community.",
    },
    {
      question: "TestersHive Academy",
      answer: "The TestersHive Academy provides foundational courses that teach the importance of testing and how to become a tester.",
    },
    {
      question: "Thank You",
      answer: "Thank you for joining the TestersHive community. We hope you enjoy learning and connecting with us.",
    },
  ];

  return (
    <>
    <div className="ml-64 p-4 bg-gray-100">
      <DashNav val={"Projects Board"} />
    </div>
    <div className="ml-64 min-h-screen">
    <Offcanvas/>
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
    
      <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
        <h1 className="text-2xl font-bold mb-4">Welcome to TestersHive Academy</h1>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/aA_ljUXUD4c"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mb-6 rounded-lg"
        ></iframe>

       
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-md shadow">
              <h2 className="font-semibold text-lg">{faq.question}</h2>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
    </div>
  </>
  );
};

export default AcademyPage;
