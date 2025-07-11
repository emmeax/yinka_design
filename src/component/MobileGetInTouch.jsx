import React from "react";
import { PhoneCall } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Frame5 from '../assets/Image/Frame5.png';
import Vector from '../assets/Image/Vector.png'

const MobileGetInTouch = () => {
  return (
    <section className="w-full bg-black flex flex-col items-center justify-center  md:hidden">
      {/* Subheading outside card */}
      <div className="flex mb-6 gap-5 w-full max-w-2xl mt-20">
        <h3 className="text-purple-400 font-regular text-4xl font-neue">07/</h3>
        <h2 className="text-4xl font-medium font-technor tracking-wide uppercase">
          Get In Touch
        </h2>
      </div>

      {/* Purple Gradient Card */}
      <div className="bg-gradient-to-b from-[#A22CFF] to-[#5D0ECC] rounded-3xl w-full max-w-2xl py-36 px-6 text-center relative overflow-hidden">
        <div className="mb-64">
          <h2 className="text-white font-bold text-3xl font-neue leading-tight">
            Let’s get In <br /> Touch
          </h2>

          <div className="flex flex-col gap-4 items-center mt-6">
            <a
              href="#"
              className="bg-black text-white px-4  text-xl py-2 rounded-full font-neue font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition"
            >
              Book a discovery call <PhoneCall size={16} />
            </a>
            <a
              href="#"
              className="border border-white text-xl text-white px-8 py-3 rounded-full font-neue font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-[#5D0ECC] transition"
            >
              Connect with me <img src={Vector} className="bg-blue-500  " />
            </a>
          </div>
        </div>

        {/* White layered background */}
        <div className="absolute -bottom-52 left-[150%] transform -translate-x-1/2 w-[300%] h-[600px]">
          <img src={Frame5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MobileGetInTouch;
