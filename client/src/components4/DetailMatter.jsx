import React from "react";

import { format } from "date-fns";
import { IoIosWarning } from "react-icons/io";

const DetailMatter = ({ data }) => {
  return (
    <div className="px-20 pt-20 pb-20 bg-[#f3f4f5]">
      <div className="border-2 p-10 bg-white rounded-xl">
        <h1 className="text-3xl font-bold pb-4">{data.Heading}</h1>
        <p className="text-xl pb-2 font-semibold">{data.summary}</p>
        <p className="pb-4 leading-loose">{data.matter}</p>
        <p>
          <span className="font-semibold">Location:</span> {data.location}
        </p>
        <p>
          <span className="font-semibold">Start Date:</span>{" "}
          {format(new Date(data.start_date), "dd MMMM yyyy")}
        </p>
        <div className="flex gap-2 items-center pt-9">
          <IoIosWarning color="yellow" size={25} />
          <p className="underline underline-offset-1">Sign in to Apply</p>
        </div>
      </div>
    </div>
  );
};

export default DetailMatter;
