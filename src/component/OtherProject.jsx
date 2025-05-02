import React, { useState } from 'react';

const OtherProject = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      image: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184606/all%20folder/980dd90941d61c4621dddd90073b3f416be2f4ce_vs2nsn.jpg',
      alt: 'Investment App',
      caption: 'Make investment smooth as breeze',
    },
    {
      image: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184599/all%20folder/6777d050caf0cc9bdaa60c54b2498900f54e598d_otgyjy.jpg',
      alt: 'Payment Platform',
      caption: 'Make payment smooth as breeze',
    },
    {
      image: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746184580/all%20folder/a48d54c848aab8e9403c36955f960ed01ee938a0_pnhspn.jpg',
      alt: 'Corporate Card Website',
      caption: 'Corporate card that makes your life easier',
    }
  ];

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl text-left md:text-2xl font-semibold text-purple-500 mb-2">
          <span className="text-white">Other projects</span>
        </h2>

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
              <p className="text-center mt-4">{project.caption}</p>
            </div>
          ))}
        </div>

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
          <div className="flex gap-4 text-white">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProject;
