import React from "react";

function Leftsider() {
  return (
    <div className="fixed left-1 bottom-0 px-10 sm:static sm:bg-black">
      <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="https://www.instagram.com/kartik_patil_7/" class="ri-instagram-line text-gray-600 text-xl"></a>
      <a href="https://mail.google.com/" class="ri-mail-line text-gray-600 text-xl"></a>
        <a class="ri-linkedin-box-fill text-gray-600 text-xl" href="https://www.linkedin.com/in/kartik-patil-a3a9b1284/"></a>
        <i class="ri-github-fill text-gray-600 text-xl"></i>
      </div>
      <div className="w-[2px] h-32 bg-[#34b1be] sm:hidden"></div>
      </div>
    </div>
  );
}

export default Leftsider;
