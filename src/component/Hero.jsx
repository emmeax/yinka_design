import React, { useState, useRef } from 'react';
import Arrow from '../assets/Image/Arrow.png';
import Formeswork from '../assets/Image/Formeswork.png';
import Cube from '../assets/Image/Cube.png'

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
      desktopImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png',
      mobileImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194469/all%20folder/87f6ad7e9ee302f115a4d9a366e79e9d3946f80e_aacujs.jpg',
      tags: ['Web Design', 'Finance'],
    },
    {
      id: 2,
      category: 'Website Design',
      desktopImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444045/all%20folder/PromptGuardianlandingpage_mvklp8.png',
      mobileImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194223/all%20folder/1fa07a11a65585e233b656e10d18346592372056_vpuine.jpg',
      tags: ['Web Design', 'Saas'],
    },
    {
      id: 3,
      category: 'Brand Design',
      desktopImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444222/all%20folder/Globalink_1_ils7i8.png',
      mobileImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194167/all%20folder/5db8eeb917e0d59ffd4e6777f3f69d9a77dd3aad_q1fqxr.jpg',
      tags: ['Brand Design', 'Brand Design'],
    },
    {
      id: 4,
      category: 'Pitch & Presentations',
      desktopImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444044/all%20folder/Home_page_0_1_w2w6de.png',
      mobileImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194234/all%20folder/ada58f6806f6d975e6a1fc5cda15caa2b2fc1c29_foowja.jpg',
      tags: ['Pitch & Presentations', 'Brand Design'],
    },
    {
      id: 5,
      category: 'Marketing',
      desktopImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444222/all%20folder/Globalink_1_ils7i8.png',
      mobileImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194177/all%20folder/d114bba145cec54101690f9c0f77aceb22d673d3_d6jeix.jpg',
      tags: ['Marketing', 'Marketing'],
    },
    {
      id: 6,
      category: 'Marketing',
      desktopImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746444222/all%20folder/Globalink_1_ils7i8.png',
      mobileImage: 'https://res.cloudinary.com/ddjnrebkn/image/upload/v1746194257/all%20folder/5d40b76494779dad1aa52e290b3771f2b3a29af7_snpa9f.jpg',
      tags: ['Web Design', 'Marketing'],
    },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <div className="text-white w-full overflow-hidden md:py-28 py-10">


      {/* Background Shape – Top Right (Cube.png) */}
      <img src={Formeswork} alt="" className='absolute hidden  md:block top-3/4 w-72 mt-52' />
      <img src={Cube} alt="" className='absolute hidden md:block -bottom-3/4  right-80 w-32' />
      {/* Heading */}
      <h2 className="text-3xl md:text-6xl text- hidden md:block font-bold text-left mb-10">
        <span className="text-purple-500 font-technor font-medium font-neue">01/</span> COMPETENCIES & PROJECTS
      </h2>
      <h2 className="text-3xl md:hidden block font-technor font-medium md:text-6xl font-bold text-left mb-10">
        <span className="text-purple-500 font-neue">01/</span> SKILLSETS & <span className='ml-12'>PROJECTS</span> 
      </h2>

      {/* Category Filter Buttons */}
      <div className="flex md:gap-9 gap-4  overflow-x-auto scrollbar-hide mb-14 pb-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`md:px-8 px-6 py-2 ${
              category === 'All' ? 'rounded-2xl' : 'rounded-xl'
            } text-nowrap text-lg  font-medium border transition-all duration-300
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

      {/* Scrollable Projects */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`w-72 flex-shrink-0 snap-start rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out
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
            <div className="flex  justify-start gap-2 p-2 bg-black text-left ">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-4 py-2 mt-2 rounded-lg border border-white text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-16">
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
          <span className="tracking-widest text-3xl ml-7">IF YOU'D LIKE TO DISCUSS A PROJECT</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
