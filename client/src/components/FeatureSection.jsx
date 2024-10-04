import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative border-neutral-800 min-h-[800px] mt-32">
      <div className="text-center">
        <span className="bg-[#FCFCFC] text-[#1EC5FA] rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-1xl sm:text-3xl lg:text-4xl mt-10 lg:mt-16 tracking-normal robo">
        We deliver top quality, precise timing, thorough testing, and efficient management in one seamless service
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 gap-10 justify-center items-center">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 shadow-md rounded-lg ">
            <div className="flex flex-col justify-center">
              <div className="flex mx-6 h-10 p-2 justify-center items-center rounded-lg w-10 text-lg mt-6" style={{background:feature.color,color:feature.iconcolor}}>
                {feature.icon}
              </div>
              <div className="pl-6">
                <h5 className="mt-1 text-xl font-semibold p-1">{feature.text}</h5>
                <p className="text-md p-1 mb-14 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
