import React, { useEffect, useState } from "react";
import { MdMessage } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";

const Notify = () => {
  //   const Notifications = {
  //     email: "bamlabhavanibai@gmail.com",
  //     heading: "Are you intrestend in doing this job",
  //     matter: "Please read the data below and accept we will meet you",
  //   };

  //   useEffect(() => {
  //     async function getData() {
  //       try {
  //         const response = await fetch(`http://localhost:3004/datainsert`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(Notifications),
  //         });
  //         const data = await response.json();
  //         console.log(data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //     getData();
  //   }, []);
  const email = localStorage.getItem("email");
  const [show, showData] = useState([]);
  useEffect(() => {
    async function display() {
      try {
        const response = await fetch(
          `http://localhost:3004/notifications/data/${email}`
        );
        const data = await response.json();
        showData(data);
        console.log(show);
      } catch (e) {
        console.log(e);
      }
    }
    display();
  }, []);
  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md px-12">
          {show.length > 0 ? (
            show.map((data, index) => (
              <div
                key={index}
                className={`flex items-start p-4 ${
                  index !== show.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-2">
                    <MdMessage className="text-blue-500 w-6 h-6" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {data.heading}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDistanceToNow(new Date(data.ontime), {
                      addSuffix: true,
                    })}
                  </p>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {data.matter}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="p-2 text-lg">No Notifications</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default Notify;
