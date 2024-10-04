import { CheckCircle2 } from "lucide-react";
import apple from "../assets/apple.png";
import team from "../assets/team.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Learn New{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Skills, Grow, and Connect.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-8">
        <div className="p-2 w-full lg:w-1/3 relative sm:w-2/3">
          <img src={apple} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2 text-lg pl-10">
          Is the home of the largest community of digital freelance software
          testers in the world - helping some of the most recognized and iconic
          brands provide quality digital experiences to their customers.
          <br></br>
          Whether it's improving their testing skills in our Academy, finding a
          testing project to earn money, or connecting with testing experts
          within our global community, has become the go-to destination for
          people who value digital quality, are passionate about user
          experience, and are curious about cutting-edge technology.
        </div>
      </div>
    </div>
  );
};

export default Workflow;
