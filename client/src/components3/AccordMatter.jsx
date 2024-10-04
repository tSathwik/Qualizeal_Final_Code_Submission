import React, { useState } from "react";
import { Accord } from "../constants";
import { MdKeyboardArrowDown } from "react-icons/md";

function AccordMatter() {
  const [selected, setSelected] = useState(null);

  function handleSingle(getId) {
    setSelected(getId === selected ? null : getId);
  }

  return (
    <>
      <div className="pt-20">
        <div className="grid justify-center bg-[#0b4867] py-10 items-center h-auto px-10">
          <p className="text-center text-white text-2xl font-semibold p-8">
            Frequently Asked Questions
          </p>
          {Accord.length > 0 ? (
            Accord.map((items, index) => (
              <div className="bg-[#0b4867] text-white py-4" key={index}>
                <div className="py-1">
                  <div
                    className="flex justify-between cursor-pointer items-center gap-5"
                    onClick={() => handleSingle(items.id)}
                  >
                    <p className="md:text-xl tracking-wide text-sm">
                      {items.Question}
                    </p>
                    <span>
                      <MdKeyboardArrowDown
                        size={30}
                        className={
                          selected === items.id
                            ? "rotate-180 transition-all duration-300"
                            : "rotate-0 transition-all duration-300"
                        }
                      />
                    </span>
                  </div>
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      selected === items.id
                        ? "opacity-100 translate-y-5 max-h-full"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {selected === items.id ? (
                      <p className="py-3 w-full md:w-[550px] text-gray-300 text-sm">
                        {items.Answer}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default AccordMatter;
