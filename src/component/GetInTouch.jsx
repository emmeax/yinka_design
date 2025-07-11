import React from "react";
import { PhoneCall } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Frame from '../assets/Image/Frame 2087326832.png'
import Vector from '../assets/Image/Vector.png'

const GetInTouch = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-16  md:block hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className=" flex mb-6 gap-5">
          <h3 className="text-purple-400  font-regular text-5xl font-neue ">07/</h3>
          <h2 className="text-3xl md:text-5xl font-medium font-technor tracking-wide uppercase">Get In Touch</h2>
        </div>

        {/* Card */}
        <div className="md:bg-[#5D0ECC] bg-[#A22CFF] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between text-left p-28 relative">
          {/* Left Side */}
          <div className="flex-1">
            <h3 className="text-white text-3xl md:text-4xl font-neue font-bold mb-6 ">Let’s get In Touch</h3>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Cal.com Button */}
              <a
                href="https://cal.com/yourname" // Replace with your actual booking link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 font-neue font-medium rounded-md flex items-center gap-2 hover:bg-gray-900 transition"
              >
                Book a discovery call <PhoneCall size={16} />
              </a>

              {/* LinkedIn Button */}
<a
              href="#"
              className="border border-white text-xl text-white px-8 py-3 rounded-full font-neue font-medium flex items-center justify-center gap-2 hover:bg-white hover:text-[#5D0ECC] transition"
            >
              Connect with me <img src={Vector} className="bg-blue-500  " />
            </a>
            </div>
          </div>

          {/* Right Side Gradient */}
          <div className="">
            <img src={Frame} alt="" className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
