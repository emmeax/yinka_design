import React, { useState, useEffect } from 'react';
import Arrow from '../assets/Image/Arrow.png';
import Formeswork from '../assets/Image/Formeswork.png';
import Cube from '../assets/Image/Cube.png';

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); // hover effect

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    'All',
    'UI/UX Design',
    'Website Design',
    'Brand Design',
    'Pitch & Presentations',
    'Marketing',
  ];

  const allProjects = [
    {
      id: 1,
      category: 'UI/UX Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png',
        
      tags: ['Web Design', 'Finance'],
    },
    {
      id: 2,
      category: 'Website Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png',
      tags: ['Web Design', 'Saas'],
    },
    {
      id: 3,
      category: 'Brand Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png',
      tags: ['Brand Design', 'Brand Design'],
    },
    {
      id: 4,
      category: 'Pitch & Presentations',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png',
      tags: ['Pitch & Presentations', 'Brand Design'],
    },
    {
      id: 5,
      category: 'Marketing',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png',
      tags: ['Marketing', 'Marketing'],
    },
    {
      id: 6,
      category: 'Marketing',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png',
      tags: ['Web Design', 'Marketing'],
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="text-white w-full overflow-hidden md:py-20 py-10">
      <img src={Formeswork} alt="" className="absolute hidden md:block top-3/4 w-72 mt-52 z-0" />
      <img src={Cube} alt="" className="absolute hidden md:block -bottom-3/4 right-80 w-32" />

      <h2 className="text-3xl md:text-6xl font-technor font-bold text-left mb-10">
        <span className="text-purple-500">01/</span> COMPETENCIES & PROJECTS
      </h2>

      {/* Category Buttons */}
      <div className="relative z-10">
  <div className="flex md:gap-9 gap-4 overflow-x-auto scrollbar-hide mb-14 pb-2">
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => setSelectedCategory(category)}
        className={`md:px-8 px-6 py-2 ${
          category === 'All' ? 'rounded-2xl' : 'rounded-xl'
        } text-nowrap text-lg font-medium border transition-all duration-300 ${
          selectedCategory === category
            ? 'bg-white text-purple-600 border-purple-500'
            : 'border-purple-500 text-white hover:bg-purple-600 hover:text-white'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
  </div>

      {/* Horizontal Project Carousel */}
      <div className="flex gap-6 overflow-x-auto px-4 md:px-10 scrollbar-hide snap-x snap-mandatory">
        {(() => {
          const groups = [];
          const step = isMobile ? 1 : 2;
          for (let i = 0; i < filteredProjects.length; i += step) {
            groups.push(filteredProjects.slice(i, i + step));
          }

          return groups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`snap-start flex-shrink-0 ${
                isMobile ? 'w-[95vw]' : 'w-[95vw] flex flex-row gap-4'
              } h-auto`}
            >
              {group.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setActiveIndex(project.id)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`transition-all duration-300 ease-in-out cursor-pointer ${
                    activeIndex === null
                      ? 'scale-100'
                      : activeIndex === project.id
                      ? 'scale-105 z-10'
                      : 'scale-95 opacity-50'
                  } flex-1`}
                >
                  <img
                    src={project.desktopImage}
                    alt={project.category}
                    className="w-full max-h-[85vh] object-cover rounded-xl ml-10"
                  />
                  <div className="flex gap-2 flex-wrap mt-2 font-neue font-regular">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-3 rounded-xl ml-10 border border-white text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ));
        })()}
      </div>

      {/* CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 px-4 md:px-20 mt-16">
        <img src={Arrow} alt="Arrow" className="h-14 md:h-20 md:ml-4" />
        <div className="md:text-2xl font-technor font-regular text-left">
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
          <span className="tracking-widest text-3xl ml-7">
            IF YOU'D LIKE TO DISCUSS A PROJECT
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
