import React, { useEffect } from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Activity from "./Activity";
import Extracourse from "./Extracourse";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import Leftsider from "./Leftsider";
import Aos from "aos";
import "aos/dist/aos.css";

function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <div className="" data-aos="fade-right">
        <Intro  />
        </div>
        <div className="" data-aos="flip-up">
        <Experiences />
        </div>

        <div className="" data-aos="flip-down">
        <Activity />
        </div>
      
      <div className="" data-aos="fade-left">
      <Extracourse />
      </div>
       
       <div className="" data-aos="zoom-in-up">
        <About />
        </div>
        
        <div className="" data-aos="flip-right">
        <Contact />
        </div>
        
      </div>
      <Footer />
      <Leftsider />
    </div>
  );
}

export default Index;
