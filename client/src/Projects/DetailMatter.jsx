import React from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const DetailMatter = () => {
  const location = useLocation();

  const project = location.state?.project;

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="px-20 pt-20 pb-20 bg-[#f3f4f5]">
      <div className="border-2 p-10 bg-white rounded-xl">
        <h1 className="text-3xl font-bold pb-4">{project.Heading}</h1>
        <p className="text-xl pb-2 font-semibold">{project.summary}</p>
        <p className="pb-4 leading-loose">{project.matter}</p>
        <p>
          <span className="font-semibold">Location:</span> {project.location}
        </p>
        <p>
          <span className="font-semibold">Start Date:</span>{" "}
          {format(new Date(project.start_date), "dd MMMM yyyy")}
        </p>
        <div className="py-8">
          <a
            href={project.apply_link}
            target="_blank"
            className=" px-4 py-2 bg-sky-500 text-white rounded-md"
          >
            Apply Link
          </a>
        </div>
        <div className="flex gap-3 py-5">
          <p>Follow Us</p>
          <a href={project.linkdin_link} target="_blank">
            <FaLinkedin size={25} />
          </a>
          <a href={project.twitter_link} target="_blank">
            <FaXTwitter size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailMatter;
