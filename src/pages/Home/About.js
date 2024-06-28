import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex sm:flex-col w-full sm:w-full items-center">
        <div className="h-[60vh] w-1/2">
          <img
            className="h-[60vh] w-2/3, sm:h-80 w-80"
            src="https://www.2440media.com/sites/default/files/assets/images/blog/The%20Difference%20between%20Web%20Designer%2C%20Web%20Developer%2C%20and%20Web%20Programmer.jpg"
            alt="err"
          />
        </div>
        <div className="flex flex-col gap-3 w-1/2 sm:w-full">
          <p className="text-white">
            My name is Kartik Ananda Patil, I was born in Kolhapur but I leaving
            with my family in Pune. I have complted my graduation in Dr.D Y
            Patil ACS Collage pimpri Gaon pune, if I was in first year I learned
            some technical languages but after some time I know About web
            development So,I That my intrest in increased the I was creating
            lots of web pages by Html css js react and as wel as in backend
            nodejs express mongodb sql etc ..... I have completed 2 internship
            in online mode also and create one big project About tours and
            turism mangmnet System.....
          </p>
          <p className="text-white">
            As a developer, I bring a wealth of expertise and passion to every
            project I undertake. With a background rooted in Mern Stack
            development, I thrive on tackling complex challenges and crafting
            elegant solutions. Over the course of my career, I've had the
            privilege of contributing to a diverse range of projects, each one
            honing my skills and broadening my perspective. From project is
            tours and turism mangment System and also I have experince in
            internship in online mode, I've consistently delivered results that
            exceed expectations. My proficiency spans a wide array of
            technologies, including html,css,js,react,nodejs,express,mongodb,sql
            and I'm always eager to embrace new tools and methodologies. Outside
            of coding, I'm deeply involved in creating a web pages, and I'm
            committed to fostering collaboration and innovation within the tech
            community. With a strong foundation in Computer Science, coupled
            with a relentless drive for continuous improvement, I'm poised to
            make a meaningful impact wherever my journey takes me. Let's connect
            and create something amazing together.
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default About;
