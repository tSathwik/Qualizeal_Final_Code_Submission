import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Pricing = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-wrap justify-center items-center mt-8">
        <div className="w-full lg:w-1/2 text-lg bg-[#FCFCFC] p-10 rounded-lg relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-[#1ec5fa] before:rounded-r-sm before:rounded-br-sm">
          <p className="baloo-bhai-2 text-3xl text-[#1EC5FA] lg:text-4xl ">
            How testing Works?
          </p>
          <p className="text-[#1EC5FA] pt-6 text-sm ">
            When you join TestersHive, you are unlocking a new world of freelancing
            opportunities. Learn how we match you with paid testing projects
            from our clients.
          </p>
        </div>
        <div className="p-2 w-full lg:w-1/2 relative">
          <video
            src={video1}
            autoPlay
            loop
            muted
            className="rounded-2xl"
          ></video>
        </div>
      </div>

      <div className="flex flex-wrap-reverse justify-center items-center mt-24">
        <div className="p-2 w-full lg:w-1/2 relative">
          <video
            src={video2}
            autoPlay
            loop
            muted
            className="rounded-2xl"
          ></video>
        </div>

        <div className="w-full lg:w-1/2 text-lg bg-[#FCFCFC] p-10 rounded-lg relative pl-6 before:content-[''] before:absolute before:right-0 before:top-0 before:bottom-0 before:w-2 before:bg-[#1ec5fa] before:rounded-r-sm before:rounded-br-sm">
          <p className="baloo-bhai-2 text-3xl text-[#1EC5FA] lg:text-4xl ">
            Earn Money Testing for the Brands You Love
          </p>
          <p className="text-[#1EC5FA] pt-6  text-sm">
            When companies like Uber need to ensure a new feature is ready
            before rolling it out globally, they utilize TestersHiveers to validate
            that it works, looks, and performs as expected. Our clients count on
            the feedback of TestersHiveers to ensure that their products live up to
            the high expectations of their customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
