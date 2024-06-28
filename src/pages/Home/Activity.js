import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../res/projects";

function Activity() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Projets" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-4 border-[#d739ec] w-1/3 sm:overflow-x-scroll sm:flex-row sm:w-full">
          {projects.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-20 sm:flex-col sm:mx-20">
            <img src={projects[selectedItemIndex].image} alt="" className="h-48 w-48, sm:h-80 w-80" />
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {projects[selectedItemIndex].title}
          </h1>

          <p className="text-white">
            {projects[selectedItemIndex].description}
          </p>

          <h1 className="text-white ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              natus fugit assumenda voluptates cupiditate quam autem, velit
              quod, fuga tenetur tempora tempore ea vitae incidunt modi neque
              mollitia pariatur distinctio?
            </p>
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
