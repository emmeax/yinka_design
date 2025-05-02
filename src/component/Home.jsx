import React from 'react'
import Profilepics from '../assets/Image/Profilepics.png'
const Hero = () => {
  return (
    <section className="text-white text-left mt-8 px-6 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="md:block hidden">CREATIVE</span>
          <span className="md:block hidden">DIRECTOR & PM</span>
          <span className='md:hidden block'>DIGITAL DESIGNER</span>
        </h1>
        <p className="mt-4 text-2xl  md:block hidden">with 7+ years of experience</p>
        <p className="mt-4 text-2xl block md:hidden">4+ years of experience</p>
        <p className="mt-6 max-w-xl md:block hidden text-lg text-white">
          I specialize in taking Ideas and Visions from obscurity to execution
          with Problem solving skills, Technology and Systems applied with out
          of the box thinking.
        </p>
        <p className="mt-6 max-w-xl block md:hidden text-sm text-white">I deliver high quality designs services across multiple fields, helping both individuals and brands bring thier ideas to life </p>
        <p className="mt-4 md:block hidden max-w-xl text-lg text-gray-300">
          My experience in Writing, Design, Marketing, Sales and Management,
          allowing me lead cross-functional teams achieve success
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Profilepics} 
          alt="Olayinka"
          className="rounded-lg w-64 h-auto object-cover"
        />
      </div>
     
    </section>
  )
}

export default Hero