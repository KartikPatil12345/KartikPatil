import React from "react";
import SectionTitle from "../../components/SectionTitle";

import { courses } from "../../res/courses";

function Extracourse() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Courses" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-4 border-[#d739ec] w-1/3 sm:overflow-x-scroll sm:flex-row sm:w-full">
          {courses.map((course, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer">
              <h1
                className={`text-xl px-5
                    ${
                      selectedItemIndex === index
                        ? "text-tetiary border-tetiary border-l-4 -ml-1 bg-[#39bfcb44] py-2"
                        : "text-white"
                    }`}>
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-20 sm:flex-col">
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {courses[selectedItemIndex].title}
            </h1>

            <p className="text-white">
            {courses[selectedItemIndex].description}
          </p>
           
          </div>
          <div className="sm:mx-20">
            <img
              src={courses[selectedItemIndex].image}
              alt="err"
              className="h-60 w-60, sm:h-80 w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extracourse;
