import React from "react";
import { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";

function Intro() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const skills = [
    "Html",
    "css",
    "Javascript",
    "react",
    "nodejs",
    "express",
    "mongodb",
    "sql",
  ];
  return (
    <div>
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-5 py-10">
        <h1 className="text-white">Hi ,I am</h1>
        <h1 className="text-6xl sm:text-3xl font-semibold text-secondary">
          Kartik Ananda Patil
        </h1>
        <h1 className="text-6xl sm:text-3xl font-semibold text-white">
          Crafting web pages with precision and creativity.
        </h1>
        <p className="text-white w-2/3">
          Enthusiastic and innovative fresher web developer passionate about
          crafting user-friendly websites with a blend of creativity and
          functionality. Eager to learn and grow, I'm committed to pushing
          boundaries and transforming visions into digital realities
        </p>
        <button className="border-2 border-tetiary text-tetiary px-10 py-3 rounded">
          Get start
        </button>
      </div>


      <SectionTitle title="skills"/>
      <div className="py-5" data-aos="zoom-in-down">
      <h1 className="text-tetiary text-2xl">
          Here few technologies I have working with recently:
        </h1>
      <div className="flex flex-wrap gap-10 mt-5">
        {skills.map((skill, index) => (
          <div className="border border-tetiary py-4 px-10 bg-four rounded">
            <h1 className="text-black text-2xl md:font-bold">{skill}</h1>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Intro;
