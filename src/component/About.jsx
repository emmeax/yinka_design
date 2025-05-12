import React from 'react';
import Arrow from '../assets/Image/Arrow.png';
import BgCurve from '../assets/Image/div.png'; // ← make sure the path is correct
import BgDiagonal from '../assets/Image/div1.png'; // ← make sure the path is correct

const About = () => {
  return (
    <div className="relative bg-black text-white w-full md:px-6 py-20  overflow-hidden">
      {/* Background Elements */}
      <img
  src={BgCurve}
  alt="Background Curve"
  className="absolute bottom-52 left-10  z-0 md:w-48 md:block hidden pointer-events-none"
/>
<img
  src={BgDiagonal}
  alt="Background Diagonal Line"
  className="absolute bottom-52 right-10 z-0 md:w-48 md:block hidden pointer-events-none"
/>

      {/* Content */}
      <section className="relative z-10">
        <h2 className="md:text-5xl text-4xl font-technor font-medium text-left mb-6">
          <span className="text-[#A22CFF] font-neue font-regular">02/</span>{' '}
          <span className="text-white">ABOUT ME</span>
        </h2>

        <h3 className="font-bold text-white text-lg font-technor mb-2 md:ml-36 text-left">
          Olayinka D. Adeyefa
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed text-left font-neue font-medium max-w-3xl md:ml-36">
          Asides having worked on various projects ranging from Websites to Brand Identity projects to Pitch Decks and more, 
          My Design versatility are not the extent of my abilities. <br />
          I have experience as a Creative director and Project/Product Manager delivering over a dozen projects successfully in the last year alone, 
          which means I can comfortably work with Multiple other Developers and other members of a Project Delivery team/Sprint.
        </p>
      </section>

      <section className="relative z-10 font-neue font-regular max-w-3xl md:ml-36 text-left">
        <p className="text-2xl mb-4">
          I can comfortably contribute to projects with my knowledge and provable experience in the following fields:
        </p>
        <ul className="list-disc space-y-2 ml-6 text-2xl">
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

      <div className="relative z-10 mt-10 md:mt-2 md:flex items-center w-full h-32 gap-4 ">
        <img src={Arrow} alt="Arrow" className="md:h-20 h-14 mb-5" />
        <div className="text-3xl font-technor font-regular md:text-center text-left">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-purple-400 md:ml-16 ">(&lt; CLICK HERE)</span>
          </button>{' '}
          <span className="tracking-widest font-technor ml-7"> TO GET IN TOUCH</span>
        </div>
      </div>
    </div>
  );
};

export default About;
