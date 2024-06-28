import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  return (
    <div className="py-10">
      <SectionTitle title="say hello" />
      <div className="container flex gap-5 justify-center sm:flex-col sm:justify-center sm:mx-20">
      <div className="text-white gap-10">
        <div className="text-white">name:"kartik Ananda Patil"</div>
        <div className="text-white">Email:"kartikpatil6774@gmail.com"</div>
        <div className="text-white">gender:"Male"</div>
        <div className="text-white">Age-21</div>
        <div className="text-white">mobile:"8605126774"</div>
        <div className="text-white">County:"Indea"</div>
      </div>
      <div className="sm:justify-center">
        <img
          className="h-48 w-48, sm:h-80 w-80,sm:justify-center "
          src="https://img.freepik.com/premium-vector/man-gesture-say-hi-isolated-white_187851-402.jpg?w=740"
          alt=""
        />
      </div>
    </div>
      </div>
      
  );
}

export default Contact;
