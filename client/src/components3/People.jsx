import React, { useEffect, useState } from "react";
import { member } from "../constants";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBack } from "react-icons/io5";
import BioGraph from "./BioGraph";
import { useNavigate, Link } from "react-router-dom";

const People = () => {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  let firstArray = 2;

  function forward() {
    if (current + firstArray < member.length) {
      setCurrent(current + firstArray);
    }
  }
  function back() {
    if (current - firstArray >= 0) {
      setCurrent(current - firstArray);
    }
  }

  let membersVisible = member.slice(current, current + firstArray);
  function ans(val) {
    setData(member[val]);
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-36">
        <div className="">
          <div className="p-2 w-full lg:w-2/3 relative">
            {/* <img src={user4} alt="" className=" rounded-md" /> */}
          </div>
          <p className="font-semibold text-2xl">Our Team</p>
          <p className="text-sm max-w-lg break-words pt-2">
            Meet the TestersHive Community Management team. Our goal is to help
            connect our community members to testing opportunities, resources,
            and with one another.
          </p>
          <div className="lg:block hidden">
            <div className="flex mt-6 gap-6">
              <IoChevronBack size={30} onClick={back} />
              <IoIosArrowForward size={30} onClick={forward} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 overflow-x-scroll flex gap-2 example lg:mt-0 mt-10 justify-center cursor-pointer">
          {membersVisible.map((people, index) => (
            <Link key={people.id} onClick={() => ans(people.id)} to="/BioGraph">
              <div className="hover:underline underline-offset-2">
                <div className="w-48">
                  <img src={people.img} alt="" />
                </div>
                <p className="text-[12px] cursor-pointer ">{people.fullname}</p>
                <p className="text-[12px] cursor-pointer ">
                  {people.professional}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* {<BioGraph details={peopleData}></BioGraph>} */}
    </>
  );
};
// const PeopleBio=()=>{
//   return()
// }
export default People;
