import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "./ContactForm";


const ContactUs = () => {


  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center justify-center bg-[#97e8f0] background">
        <div className="flex flex-col items-center mt-6 w-full justify-center h-[50vh]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide bungee-inline-regular max-w-2xl">
            Contact Us
          </h1>
          <p className="mt-6 text-md text-center text-neutral-500 max-w-xl ">
          We’d love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out to us. Our team is here to assist you and ensure your experience with us is smooth and enjoyable. Use the form below or get in touch via email or phone. We look forward to connecting with you!
          </p>
        </div>
      </div>
      <div className="flex justify-center -mt-20">
        <div className="p-2 w-full md:w-1/2 flex "></div>
      </div>
      <ContactForm/>
    </>
  );
};
export default ContactUs;
