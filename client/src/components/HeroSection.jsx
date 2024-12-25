import wave from "../assets/wave.png";
import wave3 from "../assets/wave3.png";
import girl from "../assets/girl.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [loadingGetStarted, setLoadingGetStarted] = useState(false);
  const [loadingContactUs, setLoadingContactUs] = useState(false);

  const handleNavigation = (path, setLoading) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false); // stop loading once navigation is done
    }, 1000); // simulate a delay
  };

  return (
    <>
      <div className="hidden lg:block">
        <img src={wave3} alt="" className="wave2 " />
      </div>
      <div className="flex md:flex-row items-center flex-col justify-center">
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide bungee-inline-regular max-w-2xl">
            The Largest Community of Testers in the World
          </h1>
          <p className="mt-6 text-lg text-center text-neutral-500 max-w-xl ">
            Earn money & learn new skills while helping world-class companies
            deliver amazing digital experiences.
          </p>
          <div className="flex justify-center my-8">
            <button
              onClick={() =>
                handleNavigation("/personal", setLoadingGetStarted)
              }
              className="rounded-md bg-gradient-to-r from-black to-blue-950 shadow-lg hover:scale-105 hover:shadow-xl text-white px-6 py-3 flex items-center justify-center"
              disabled={loadingGetStarted}
            >
              {loadingGetStarted ? (
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-white"></div>
              ) : (
                "Get Started"
              )}
            </button>
            {/* <button
              onClick={() =>
                handleNavigation("/contactus", setLoadingContactUs)
              }
              className="mx-3 rounded-md border px-6 py-3 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              disabled={loadingContactUs}
            >
              {loadingContactUs ? (
                <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-black"></div>
              ) : (
                "Contact Us"
              )}
            </button> */}
<button
  onClick={() => {
    setLoadingContactUs(true);
    window.location.href = "https://qualizeal.com/contact/";
  }}
  className="mx-3 rounded-md border px-6 py-3 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
  disabled={loadingContactUs}
>
  {loadingContactUs ? (
    <div className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full border-t-transparent border-black"></div>
  ) : (
    "Contact Us"
  )}
</button>

          </div>
        </div>
        <div className="flex mt-10 justify-center al">
          <div>
            <img src={girl} alt="" className="lg:h-96 md:h-80 h-60" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={wave} alt="" className="wave3" />
      </div>
    </>
  );
};

export default HeroSection;
