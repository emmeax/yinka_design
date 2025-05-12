import React from 'react';
import { FaXTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa6';
import BigStar from '../assets/Image/BigStar.png'; 


const ContactSection = () => {
  return (
    <section className="bg-black mr-20 text-left text-white py-16 font-technor relative overflow-hidden">
      {/* Background Star Image */}
      <img
        src={BigStar}
        alt="Decorative Star"
        className="absolute right-96 md:block hidden top-12 w-64 opacity-80 pointer-events-none z-0"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="md:text-5xl text-3xl font-technor font-medium text-left ">
            <span className="text-[#A22CFF] font-neue font-regular">04/</span>{' '}
            CONTACT ME
          </h2>

          <p className="text-2xl font-technor md:ml-24">WANT TO DISCUSS A PROJECT?</p>

          <p className="font-neue text-2xl font-medium md:ml-24">Feel free to reach me via email at</p>
          <a
            href="mailto:xd.olayinka@gmail.com"
            className="text-purple-400 text-2xl hover:underline block font-neue font-medium md:ml-24"
          >
            xd.olayinka@gmail.com
          </a>

          <p className="font-neue text-lg font-medium md:ml-24">
            Or connect with me via phone call at{' '}
            <a
              href="tel:+2349099346124"
              className="text-purple-500  hover:underline"
            >
              +234 9099346124
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 md:ml-24">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187692/all%20folder/db48a07deffac2ab8c10f1ffad9d1a6ac452d5b2_1_todasc.png"
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187686/all%20folder/e4a6dce810ad7603d54f2b136f584ad098a74bdb_ewkq9k.png"
                alt="Dribbble"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>

        {/* Right Hand Image */}
        <div className="hidden -right-20 md:block w-72 relative z-10">
          <img
            src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187121/all%20folder/a55875682dbb7360b4c1fe8ae6954d248bf94f09_mgqtvh.png"
            alt="Hand Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="mt-20 font-neue font-regular text-sm md:text-base flex flex-col md:flex-row md:space-x-96 md:justify-start items-start text-white font-light relative z-10">
        <a href="#discuss" className="hover:text-purple-400">Let’s Discuss &gt;</a>
        <div className='flex gap-3'>
          <p className="flex items-center hidden md:flex">Twitter, Dribbble</p>
          <p className="flex items-center gap-2 hidden md:flex"></p>
          <p className="flex items-center gap-2 hidden md:flex">LinkedIn</p>
        </div>
        <span className="hidden md:inline">Digital Design</span>
      </div>
    </section>
  );
};

export default ContactSection;
