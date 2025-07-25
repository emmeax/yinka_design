import React from 'react';
import database from '../assets/Image/database.png';

const expertiseData = [
  {
    title: 'Autonomous Systems',
    description:
      'Experience with autonomous driving or robotics systems is highly valued for roles in the automotive and transportation sectors.',
  },
  {
    title: 'Generative AI',
    description:
      'Deep understanding of large language models and generative AI applications is increasingly required across multiple industries.',
  },
  {
    title: 'Manufacturing & Electronics',
    description:
      'Knowledge of manufacturing processes and electronics is valuable for AI product roles in industrial settings.',
  },
  {
    title: 'E-commerce & Retail',
    description:
      'Understanding of online retail platforms and consumer behavior is important for AI product roles in e-commerce.',
  },
  {
    title: 'Healthcare & Life Sciences',
    description:
      'Knowledge of healthcare regulations and clinical workflows is crucial for AI products in medical applications.',
  },
  {
    title: 'Financial Services',
    description:
      'Understanding of financial regulations and banking systems is important for AI products in fintech and financial services.',
  },
];

const mobileExpertiseData = [
  {
    title: (
      <>
        Autonomous <br /> Systems
      </>
    ),
    description: (
      <>
        Experience with autonomous <br />
        driving or robotics systems <br />
        is highly valued for roles in <br />
        the automotive and <br />
        transportation sectors.
      </>
    ),
  },
  {
    title: (
      <>
        Generative <br /> AI
      </>
    ),
    description: (
      <>
        Deep understanding of large <br />
        language models and generative <br />
        AI applications is increasingly <br />
        required across multiple <br />
        industries.
      </>
    ),
  },
  {
    title: (
      <>
        Manufacturing & <br /> Electronics
      </>
    ),
    description: (
      <>
        Knowledge of manufacturing <br />
        processes and electronics is <br />
        valuable for AI product <br />
        roles in industrial settings.
      </>
    ),
  },
  {
    title: (
      <>
        E-commerce &<br /> Retail
      </>
    ),
    description: (
      <>
        Understanding of online retail <br />
        platforms and consumer behavior <br />
        is important for AI product <br />
        roles in e-commerce.
      </>
    ),
  },
  {
    title: (
      <>
        Healthcare & Life Sciences
      </>
    ),
    description: (
      <>
        Knowledge of healthcare <br />
        regulations and clinical workflows <br />
        is crucial for AI products <br />
        in medical applications.
      </>
    ),
  },
  {
    title: (
      <>
        Financial Services
      </>
    ),
    description: (
      <>
        Understanding of financial <br />
        regulations and banking <br />
        systems is important for <br />
        AI products in fintech and <br />
        financial services.
      </>
    ),
  },
];

const DomainExpertise = () => {
  return (
    <div className="bg-black text-white w-full py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-left flex items-center gap-2">
          <img src={database} alt="Database Icon" className="h-8 w-8" />
          <span>Domain Expertise</span>
        </h2>
        <p className="text-gray-300 mb-12 text-lg text-left">
          Beyond general AI product management skills, domain-specific expertise is increasingly important:
        </p>

        {/* Desktop Section */}
        <div className="md:grid md:grid-cols-3 text-left gap-6 hidden md:grid">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`min-w-[250px] md:min-w-0 rounded-lg p-6 flex-shrink-0 transition-all duration-300 transform
                hover:scale-[1.03] hover:shadow-lg hover:border hover:border-purple-600
                ${index === 0
                  ? 'bg-gradient-to-r from-purple-800 to-black'
                  : 'bg-[#1a1a1a]'
                }`}
            >
              <h3 className="text-purple-400 text-xl font-semibold mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base whitespace-pre-line break-words leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Section */}
        <div className="flex md:hidden gap-6 overflow-x-auto scrollbar-hide">
          {mobileExpertiseData.map((item, index) => (
            <div
              key={index}
              className={`min-w-[250px] rounded-lg p-6 flex-shrink-0 transition-all duration-300 transform
                hover:scale-[1.03] hover:shadow-lg hover:border hover:border-purple-600
                ${index === 0
                  ? 'bg-gradient-to-r from-purple-800 to-black'
                  : 'bg-[#1a1a1a]'
                }`}
            >
              <h3 className="text-purple-400 text-xl font-semibold mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-300 text-base whitespace-pre-line break-words leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainExpertise;
