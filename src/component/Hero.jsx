import React, { useState, useRef } from 'react';

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);
  const scrollRef = useRef(null);

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
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194469/all%20folder/87f6ad7e9ee302f115a4d9a366e79e9d3946f80e_aacujs.jpg',
    },
    {
      id: 2,
      category: 'Website Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194223/all%20folder/1fa07a11a65585e233b656e10d18346592372056_vpuine.jpg',
    },
    {
      id: 3,
      category: 'Brand Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444222/all%20folder/Globalink_1_ils7i8.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194167/all%20folder/5db8eeb917e0d59ffd4e6777f3f69d9a77dd3aad_q1fqxr.jpg',
    },
    {
      id: 4,
      category: 'Pitch & Presentations',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194234/all%20folder/ada58f6806f6d975e6a1fc5cda15caa2b2fc1c29_foowja.jpg',
    },
    {
      id: 5,
      category: 'Marketing',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444222/all%20folder/Globalink_1_ils7i8.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194177/all%20folder/d114bba145cec54101690f9c0f77aceb22d673d3_d6jeix.jpg',
    },
    {
      id: 6,
      category: 'Marketing',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444222/all%20folder/Globalink_1_ils7i8.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194257/all%20folder/5d40b76494779dad1aa52e290b3771f2b3a29af7_snpa9f.jpg',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className=" text-white px-0 md:px-4 py-10">
      <h2 className="text-white text-3xl md:text-6xl text-left font-bold mb-10">
        <span className="text-purple-500 font-neue">01/</span> COMPETENCIES & PROJECTS
      </h2>

      <div className="flex flex-wrap text-left md:gap-8 mb-10 md:flex hidden">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium border transition-all duration-300
              ${
                selectedCategory === category
                  ? 'bg-white text-purple-600 border-purple-500'
                  : 'border-purple-500 text-white hover:bg-purple-600 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div ref={scrollRef} className="flex gap-6 md:overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`w-72 flex-shrink-0 transition-transform duration-300 ease-in-out
              ${
                hoveredId === null
                  ? 'scale-100'
                  : hoveredId === project.id
                  ? 'scale-105 z-10'
                  : 'scale-95 opacity-40'
              }`}
          >
            <img
              src={project.desktopImage}
              alt={project.category}
              className="w-full h-48 md:h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
