import React from 'react';
import { FaXTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa6';
import BigStar from '../assets/Image/BigStar.png'; 
import Hand from "../assets/Image/Hand.png"

const ContactSection = () => {
  return (
    <section className="bg-black w-full text-left text-white py-16 px-10 font-technor relative overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="md:text-5xl text-3xl font-technor font-medium text-left ">
            CONTACT ME
          </h2>

          <p className="text-2xl font-technor md:ml-16">WANT TO DISCUSS A PROJECT?</p>

          <p className="font-neue text-2xl font-medium md:ml-16">Feel free to reach me via email at</p>
          <a
            href="mailto:xd.olayinka@gmail.com"
            className="text-purple-400 text-2xl hover:underline block font-neue font-medium md:ml-16"
          >
            xd.olayinka@gmail.com
          </a>

          <p className="font-neue text-lg font-medium md:ml-16">
            Or connect with me via phone call at{' '}
            <a
              href="tel:+2349099346124"
              className="text-purple-500 hover:underline"
            >
              +234 9099346124
            </a>
          </p>
        </div>

        {/* Right Hand Image — stays within section, not scrolling */}
        <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 z-0">
          <img src={Hand} alt="Pointing Hand" className="w-64" />
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="mt-20 px-6 md:px-12 font-neue hidden md:flex text-sm md:text-base justify-between items-center">
        <a href="#discuss" className="hover:text-purple-400 flex items-center gap-1">
          <p>Let’s</p>
          <p>Discuss</p>
          <p>&gt;</p>
        </a>
        <div className="text-sm">
          <p className="hidden md:inline">Twitter,</p>
          <p className="hidden md:inline ml-2">Dribbble,</p>
          <p className="hidden md:inline ml-5">LinkedIn</p>
        </div>
        <div className="flex gap-2">
          <span>Digital</span>
          <span>Design</span>
        </div>
      </div>

      {/* BigStar Image at Bottom Center */}
      <div className="absolute bottom-0 left-2/3 transform -translate-x-1/2 z-0">
        <img src={BigStar} alt="Star" className="w-44 h-20 mr-44" />
      </div>
    </section>
  );
};

export default ContactSection;
