import React from 'react';
import Profilepics from '../assets/Image/Profilepics.png';
import Cube from '../assets/Image/Cube.png'


const Home = () => {
  return (
    <section className="section-spacing relative text-white  grid md:grid-cols-2 gap-8 overflow-hidden">
      {/* Left Background Shape */}
      <img
        src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746450325/all%20folder/632af7498246e4b33b327472_Formes-work.svg_1_qu24ok.png"
        alt="Background Shape"
        className="absolute left-0 md:block hidden top-10 w-80 opacity-70 pointer-events-none"
      />

      {/* Right Background Shape */}
      <img
      src={Cube}
        alt="Cube Shape"
        className="absolute right-64 top-60 md:block hidden w-32 md:w-40 opacity-70 pointer-events-none"
      />

      {/* Left Text Section */}
      <div className="relative z-10 ml-0 md:ml-20 text-left">
        <h1 className="text-4xl md:text-6xl font-technor font-medium leading-tight">
          <span className="md:block hidden">CREATIVE</span>
          <span className="md:block hidden">DIRECTOR & PM</span>
          <span className="md:hidden block">DIGITAL DESIGNER</span>
        </h1>

        <p className="mt-4 text-2xl font-technor font-medium md:block hidden">
          with 7+ years of experience
        </p>
        <p className="mt-4 text-2xl font-technor font-medium block md:hidden">
          4+ years of experience
        </p>

        <p className="mt-6 max-w-xl font-neue font-medium md:block hidden text-md">
          I specialize in taking Ideas and Visions from obscurity to execution with problem solving skills, Technology and Systems applied with out of the box thinking.
        </p>
        <p className="mt-6 max-w-xl font-neue font-medium md:hidden ">
          I deliver high quality design services across multiple fields, helping both individuals and brands bring their ideas to life.
        </p>

        <p className="mt-4 md:block hidden max-w-xl text-lg">
          My experience in Writing, Design, Marketing, Sales and Management allows me to lead cross-functional teams to achieving success.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="relative z-10 flex justify-center items-center md:ml-40 ">
        <img
          src={Profilepics}
          alt="Olayinka"
          className="rounded-lg md:w-48 w-80 h-auto object-cover md:mb-14"
        />
      </div>
    </section>
  );
};

export default Home;
