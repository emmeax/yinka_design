import React from 'react';
import { FaXTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa6';
const ContactSection = () => {
  return (
    <section className="bg-black text-left text-white px-6 py-16 md:px-20 font-technor relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-3xl md:text-4xl tracking-wider">
            <span className="text-purple-500 font-technor font-medium"></span> CONTACT ME
          </h2>

          <p className="text-lg font-technor font-regular text-white">
            WANT TO DISCUSS A PROJECT?
          </p>

          <p className='font-neue font-medium'>Feel free to reach me via email at</p>
          <a
            href="mailto:xd.olayinka@gmail.com"
            className="text-purple-400 hover:underline block font-neue font-medium"
          >
            xd.olayinka@gmail.com
          </a>

          <p className='font-neue font-medium'>
            Or connect with me via phone call at{' '}
            <a
              href="tel:+2349099346124"
              className="text-purple-500 hover:underline font-neue font-medium"
            >
              +234 9099346124
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187692/all%20folder/db48a07deffac2ab8c10f1ffad9d1a6ac452d5b2_1_todasc.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187686/all%20folder/e4a6dce810ad7603d54f2b136f584ad098a74bdb_ewkq9k.png" alt="Dribbble" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block md:w-1/3"> 
  <img
    src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187121/all%20folder/a55875682dbb7360b4c1fe8ae6954d248bf94f09_mgqtvh.png"
    alt="Hand Illustration"
    className="w-full h-auto"
  />
</div>
      </div>
      <div className="mt-16 text-left md:text-center font-neue font-regular text-sm md:text-base flex flex-col md:flex-row gap-3 md:justify-center items-start md:items-center text-white font-light">
  <a href="#discuss" className="hover:text-purple-400">
    Let’s Discuss &gt;
  </a>

  <span className="hidden md:flex items-center gap-2">
    <FaXTwitter className="text-purple-400" />
    Twitter
  </span>

  <span className="hidden md:flex items-center gap-2">
    <FaDribbble className="text-purple-400" />
    Dribbble
  </span>

  <span className="hidden md:flex items-center gap-2">
    <FaLinkedin className="text-purple-400" />
    LinkedIn
  </span>

  <span className="hidden md:inline">Digital Design</span>
</div>

     
    </section>
  );
};

export default ContactSection;
