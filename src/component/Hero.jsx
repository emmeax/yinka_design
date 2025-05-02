import React, { useState } from 'react';

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

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
        'https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1746126744/all%20folder/7c2c7b527311c17358c310f9cb3307ee29810780_jrwoif.jpg',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194469/all%20folder/87f6ad7e9ee302f115a4d9a366e79e9d3946f80e_aacujs.jpg',
    },
    {
      id: 2,
      category: 'Website Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1746126736/all%20folder/CHEDARR_01_1_1_fv80xw.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194223/all%20folder/1fa07a11a65585e233b656e10d18346592372056_vpuine.jpg',
    },
    {
      id: 3,
      category: 'Brand Design',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1746126734/all%20folder/a56284c2c262f36be147b1a5507a045e0f13e043_frc9zz.jpg',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194167/all%20folder/5db8eeb917e0d59ffd4e6777f3f69d9a77dd3aad_q1fqxr.jpg',
    },
    {
      id: 4,
      category: 'Pitch & Presentations',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1746126736/all%20folder/CHEDARR_01_1_1_fv80xw.png',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194234/all%20folder/ada58f6806f6d975e6a1fc5cda15caa2b2fc1c29_foowja.jpg',
    },
    {
      id: 5,
      category: 'Marketing',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1746126729/all%20folder/15c947d70c70bbd35ee6cd185e7f99e002a2b7b0_mvwv7n.jpg',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194177/all%20folder/d114bba145cec54101690f9c0f77aceb22d673d3_d6jeix.jpg',
    },
    {
      id: 6,
      category: 'Marketing',
      desktopImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1746126729/all%20folder/75a3d3479236ab3cb526da1b41d2b32e1a5f1eca_rotis7.jpg',
      mobileImage:
        'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194257/all%20folder/5d40b76494779dad1aa52e290b3771f2b3a29af7_snpa9f.jpg',
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="p-4">
      {/* Responsive Section Header */}
      <h2 className="mt-3 text-white text-2xl md:text-5xl font-bold mb-6 text-left">
        <span className="block md:hidden">SKILLSETS & <br />PROJECTS</span>
        <span className="hidden md:block">COMPETENCIES & PROJECTS</span>
      </h2>

      {/* Category Buttons - hidden on mobile */}
      <div className="hidden md:flex flex-wrap gap-4 justify-start mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-xl font-medium transition-all border
              ${
                selectedCategory === category
                  ? 'bg-white text-purple-500 border-purple-500'
                  : 'border-purple-500 text-white hover:bg-purple-500 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project List with horizontal scroll and hidden scrollbar */}
      <div className="flex flex-col md:flex-row gap-4 mt-20 md:overflow-x-auto scrollbar-hide md:scroll-smooth md:snap-x md:snap-mandatory">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`min-w-[280px] flex-shrink-0 overflow-hidden shadow-lg transform transition duration-300 ease-in-out snap-start ${
              hoveredId === null
                ? 'scale-100'
                : hoveredId === project.id
                ? 'scale-105 z-10'
                : 'scale-90 opacity-50'
            }`}
          >
            {/* Desktop Image */}
            <img
              src={project.desktopImage}
              alt={project.category}
              className="w-full h-48 object-cover hidden md:block"
            />

            {/* Mobile Image with overlay */}
            <div className="relative block md:hidden">
              <img
                src={project.mobileImage}
                alt={project.category}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
                {project.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
