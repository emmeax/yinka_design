import React, { useState } from 'react';
import Vector1 from '../assets/Image/Vector1.png'
import Vector2 from '../assets/Image/Vector2.png'

const OtherProject = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      image: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184606/all%20folder/980dd90941d61c4621dddd90073b3f416be2f4ce_vs2nsn.jpg',
      alt: 'Investment App',
      // caption: 'Make investment smooth as breeze',
    },
    {
      image: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184599/all%20folder/6777d050caf0cc9bdaa60c54b2498900f54e598d_otgyjy.jpg',
      alt: 'Payment Platform',
      // caption: 'Make payment smooth as breeze',
    },
    {
      image: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184580/all%20folder/a48d54c848aab8e9403c36955f960ed01ee938a0_pnhspn.jpg',
      alt: 'Corporate Card Website',
      // caption: 'Corporate card that makes your life easier',
    }
  ];

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-black text-white ">
      <div className="max-w-7xl mx-auto">
        <div className='flex gap-3 md:hidden block mb-4'>
           <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187686/all%20folder/e4a6dce810ad7603d54f2b136f584ad098a74bdb_ewkq9k.png" className='h-10' alt="" />
           <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187692/all%20folder/db48a07deffac2ab8c10f1ffad9d1a6ac452d5b2_1_todasc.png" className='h-10' alt="" />
        </div>
        <h2 className="md:text-5xl text-3xl text-left font-technor font-medium mb-6">
          <span className="text-[#A22CFF] font-neue font-regular">03/</span>{' '}
          <span className="text-white">Other projects</span>
        </h2>
        <p className='text-3xl text-left  md:hidden block '>let{"'"}s Discuss &gt; </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => handleInteraction(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`transition-transform duration-300 ease-in-out cursor-pointer ${
                activeIndex === null
                  ? 'scale-100'
                  : activeIndex === index
                  ? 'scale-105 z-10'
                  : 'scale-90 opacity-50'
              }`}
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full rounded-md shadow-lg"
              />
              <p className="text-left mt-4 font-neue font-medium">{project.caption}</p>
            </div>
          ))}
        </div>

        {/* Navigation Dots and Arrows */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-8 rounded-full transition-opacity ${
                  activeIndex === index ? 'opacity-100 bg-white' : 'opacity-40 bg-white'
                }`}
              ></div>
            ))}
          </div>
          <div className="flex gap-4 text-white text-2xl">
            <button><img src={Vector1} alt="Vector" /></button>
            <button><img src={Vector2} alt="Vector" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProject;
