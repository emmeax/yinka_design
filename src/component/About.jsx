import React from 'react';
import Arrow from '../assets/Image/Arrow.png';
import BgCurve from '../assets/Image/div.png';        // Arch shape
import BgDiagonal from '../assets/Image/div1.png';     // Diagonal line
import aboutshape from '../assets/Image/aboutshape.png'
import DomainExpertise from './DomainExpertise';
import Skills from './Skills';

const About = () => {
  return (
    <div className="relative bg-black text-white w-full  overflow-hidden">
      {/* Background Elements */}
      <img
        src={BgCurve}
        alt="Background Curve Left"
        className="absolute mt-48 top-80 hidden  md:block left-2 z-0 w-52 md:block hidden pointer-events-none"
      />
      <img
        src={BgDiagonal}
        alt="Background Diagonal Right"
        className="absolute top-96 mt-24 hidden  md:block right-0 z-0 w-52 md:block hidden pointer-events-none"
      />
      <img
        src={aboutshape}
        alt="Background Center (mirrored or duplicated)"
        className="absolute top-28 left-44 hidden  md:block transform -translate-x-1/2 z-0 w-48 md:block hidden pointer-events-none"
      />

      {/* Content */}
      <section className="relative z-10">
        <h2 className="md:text-5xl text-4xl font-technor font-medium text-left mb-6">
          <span className="text-[#A22CFF] font-neue font-regular">02/</span>{' '}
          <span className="text-white">ABOUT ME</span>
        </h2>

        <h3 className="font-bold text-white text-3xl text-xl font-technor mb-5 md:ml-36 text-left">
          Olayinka D. Adeyefa
        </h3>
        <p className="text-lg text-slate-300 leading-relaxed text-left mb-12 font-neue font-medium max-w-3xl md:ml-36">
          Asides having worked on various projects ranging from Websites to Brand Identity projects to Pitch Decks and more, 
          My Design versatility are not the extent of my abilities. <br />
          I have experience as a Creative director and Project/Product Manager delivering over a dozen projects successfully in the last year alone, 
          which means I can comfortably work with Multiple other Developers and other members of a Project Delivery team/Sprint.
        </p>
      </section>

      <section className="relative z-10 font-neue font-regular max-w-3xl md:ml-36 text-left">
        <p className="text-2xl mt-7">
          I can comfortably contribute to projects with my knowledge and provable experience in the following fields:
        </p>
        <ul className="list-disc space-y-2 ml-10 text-2xl">
          <li>UI/UX DESIGN</li>
          <li>GRAPHICS DESIGN</li>
          <li>BRAND DESIGN</li>
          <li>WRITING</li>
          <li>MARKETING</li>
        </ul>
        <p className="text-2xl mt-2">and CYBER SECURITY</p>
        <p className="text-lg mt-4">
          My uncanny ability to bring creative thinking and excellent execution to project might just be available for your project (NO GUARANTEE’S though),
        </p>
      </section>

      <DomainExpertise />
      <Skills />

      {/* CTA */}
       <div className="flex flex-col md:flex-row items-start md:items-center gap-4  mb-14">
              <img src={Arrow} alt="Arrow" className="h-14  md:h-20 md:ml-4" />
              <div className=" md:text-2xl font-technor font-regular text-left">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="text-purple-400 text-3xl md:ml-20">(&lt; CLICK HERE)</span>
                </button>
                <span className="tracking-widest text-3xl ml-7">TO GET IN TOUCH </span>
              </div>
            </div>
    </div>
  );
};

export default About;
