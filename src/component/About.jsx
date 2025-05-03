import React from 'react'

const About = () => {
  return (
    <div className=" px-8 py-12 space-y-16">
    <div className="text-2xl font-technor font-regular text-center">
      <button><span className="text-purple-400">(&lt; CLICK HERE)</span></button>{' '}
      <span className="tracking-widest">IF YOU'D LIKE TO DISCUSS A PROJECT</span>
    </div>

    <section>
      <h2 className="text-purple-500 font-technor font-medium text-left text-xl mb-4"> ABOUT ME</h2>
      <h3 className="font-bold text-left text-white font-technor font-semibold text-lg mb-2">Olayinka D. Adeyefa</h3>
      <p className="max-w-2xl text-left text-white font-neue font-regular text-sm leading-relaxed">
        Asides having worked on various projects ranging from Websites to Brand Identity projects to Pitch Decks and more, My Design versatility are not the extent of my abilities.
        I have experience as a Creative director and Project/Product Manager delivering over a dozen projects successfully in the last year alone, which means I can comfortably work with Multiple other Developers and other members of a Project Delivery team/Sprint.
      </p>
    </section>

    <section className="max-w-2xl font-neue font-regular">
      <p className="mb-4 text-left text-xl">I can comfortably contribute to projects with my knowledge and provable experience in the following fields:</p>
      <ul className="list-disc space-y-2 text-left ml-8  text-white text-xl">
        <li><span className="font-bold">UI/UX DESIGN</span></li>
        <li><span className="font-bold">GRAPHICS DESIGN</span></li>
        <li><span className="font-bold">BRAND DESIGN</span></li>
        <li><span className="font-bold">WRITING</span></li>
        <li><span className="font-bold">MARKETING</span> and <span className="font-bold">CYBER SECURITY</span></li>
      </ul>
      <p className="font-neue font-regular text-xs text-left text-black mt-4">
        My uncanny ability to bring creative thinking and excellent execution to project might <br /> just be available for your project (NO GUARANTEE'S though).
      </p>
    </section>

    <div className="text-left text-2xl font-technor font-regular">
      <span className="text-purple-400">(&lt; CLICK HERE)</span>{' '}
      <button><span className="tracking-widest">TO GET IN TOUCH</span></button>
    </div>
  </div>
  )
}

export default About