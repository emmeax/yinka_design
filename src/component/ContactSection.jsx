import React from 'react';
import { FaXTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section className="bg-black text-left text-white px-6 py-20 font-technor relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-5xl font-technor font-medium text-left">
            <span className="text-[#A22CFF] font-neue font-regular">04/</span>{' '}
            CONTACT ME
          </h2>

          <p className="text-lg font-technor md:ml-36">WANT TO DISCUSS A PROJECT?</p>

          <p className="font-neue font-medium md:ml-36">Feel free to reach me via email at</p>
          <a
            href="mailto:xd.olayinka@gmail.com"
            className="text-purple-400 hover:underline block font-neue font-medium md:ml-36"
          >
            xd.olayinka@gmail.com
          </a>

          <p className="font-neue font-medium md:ml-36">
            Or connect with me via phone call at{' '}
            <a
              href="tel:+2349099346124"
              className="text-purple-500 hover:underline"
            >
              +234 9099346124
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4 md:ml-36">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187692/all%20folder/db48a07deffac2ab8c10f1ffad9d1a6ac452d5b2_1_todasc.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187686/all%20folder/e4a6dce810ad7603d54f2b136f584ad098a74bdb_ewkq9k.png" alt="Dribbble" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Hand Image */}
        <div className="hidden md:block w-72">
          <img
            src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187121/all%20folder/a55875682dbb7360b4c1fe8ae6954d248bf94f09_mgqtvh.png"
            alt="Hand Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="mt-20 font-neue font-regular text-sm md:text-base flex flex-col md:flex-row md:space-x-96  md:justify-start items-start text-white font-light">
        <a href="#discuss" className="hover:text-purple-400">Let’s Discuss &gt;</a>
        <div className='flex gap-3'>
        <p className="flex items-center  hidden md:flex">Twitter</p>
        <p className="flex items-center gap-2 hidden md:flex">Dribbble</p>
        <p className="flex items-center gap-2 hidden md:flex">LinkedIn</p>
        </div>
        <span className="hidden md:inline">Digital Design</span>
      </div>
    </section>
  );
};

export default ContactSection;
