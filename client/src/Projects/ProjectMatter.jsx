import React, { useEffect, useState } from "react";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { format } from "date-fns";
import DetailMatter from "./DetailMatter";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";
import { PiNotepad } from "react-icons/pi";

const ProjectMatter = () => {
  const [Matter, showMatter] = useState([]);
  const [sended, sendData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((result) => result.json())
      .then((data) => showMatter(data))
      .catch((e) => console.log(e));
  }, []);
  function changeData(val) {
    sendData(val);
  }
  return (
    <>
      <div className="px-20 pt-20 pb-20">
        {Matter.length > 0 ? (
          Matter.map((ans, id) => (
            <div key={id} className="pt-5" onClick={() => changeData(ans)}>
              <div className="p-10 bg-[#f5f6f7] hover:shadow-xl transition-all duration-300 w-[90%] mx-auto">
                <div className="flex items-center gap-3 pb-2 justify-between">
                  <div className="flex items-center gap-2">
                    <PiNotepad />
                    <h1 className="text-md">Suggested</h1>
                  </div>
                  <GoLinkExternal />
                </div>
                <div className="py-2">
                  <Link
                    className="text-2xl pb-2 font-semibold cursor-pointer hover:underline underline-offset-2 "
                    to={`/DetailMatter/${ans.project_id}`}
                    state={{ project: ans }}
                  >
                    {ans.heading}
                  </Link>
                </div>
                <div>
                  <p className="text-sm pb-2">{ans.summary}</p>
                </div>
                <p className="pb-1 pt-1 flex items-center gap-2">
                  <span>
                    <RiCalendarTodoFill size={18} color="#838e95" />
                  </span>
                  {format(new Date(ans.start_date), "dd MMMM yyyy")}
                </p>
                <div className="flex gap-2 items-center pb-1 pt-1 ">
                  <FaLocationDot color="#838e95" />
                  <p>{ans.location}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Sorry Not Found</p>
        )}
      </div>
    </>
  );
};
export default ProjectMatter;
