import { FaStar, FaPause, FaPlay } from "react-icons/fa";
import { FaXTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa6';
import BigStar from '../assets/Image/BigStar.png'; 
import Hand from "../assets/Image/Hand.png"
import React, { useRef } from "react";


const images = [
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/Rectangle_1195_e0jhor.png",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436012/all%20folder/f7965388e07b0b0c862fa456ba7add5e94cb59a4_qwihvo.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752135620/all%20folder/52f6fa7dd7bdab8dfe1acc9e3595368b976ecc34_fczi52.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436010/all%20folder/6dd38a57f0f864cad1ab3fd13694d17f767ab3fe_nub73e.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436010/all%20folder/30d0971878883d837ae760beec7c49d3b6e6161a_xdcs4q.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436010/all%20folder/2d6fb46970d692338402fef701b5f2da7d10a729_u2djta.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436010/all%20folder/1faa0512f94d81379db53522a51fa8024c694e7a_hydee1.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/77ec9cd8e90e04ba720835f111b50fd7cfa982b4_nkcude.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436010/all%20folder/3e9c1b9d49afb51e9fbc8abed088c2d20d79e26f_fy62dz.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436009/all%20folder/f25fa021ccc563685f354af60aba54d8366952d4_cg9rkv.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/97cd22c816db3d23a1a6db0cfb1b31a6f4274da0_1_hjdqyc.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/32603aa2bb5a605bdf4f394aa9dbfdb440bdd68e_1_d8peed.jpg",
  
];
const image=[
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
  "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
 
];
const testimonialVideos = [
  {
    videoThumb:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
    avatar:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
    name: "Paul Jake",
    role: "Product manager, Wise",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    videoThumb:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436008/all%20folder/21ed6a776d6b81979478ca14622df5afb1eee293_1_gqbyob.jpg",
    avatar:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
    name: "Jane Smith",
    role: "Marketing Lead, Stripe",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    videoThumb:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436008/all%20folder/d1d0c31bc88d35319d39ed0f9086a970a5a8c5ba_1_a3qpar.jpg",
    avatar:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
    name: "Tolu Adebayo",
    role: "Design Director, Paystack",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    videoThumb:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436011/all%20folder/d4966f9d72ca556b55a0a5029649db152cdbd55a_2_zspzfb.jpg",
    avatar:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
    name: "Grace Chen",
    role: "CTO, Flutterwave",
     video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const ContactSection = () => {
   const videoRefs = useRef([]);
    // const handlePlayPause = (index) => {
    //   const video = videoRefs.current[index];
    //   if (!video) return;
  
    //   if (video.paused) {
    //     video.play();
    //   } else {
    //     video.pause();
    //   }
    // };
  
    const handleEnded = (index) => {
      const video = videoRefs.current[index];
      if (video) {
        video.load(); // resets video and shows poster
      }
    };
  return (
    <section className="bg-black w-full text-left text-white py-16  font-technor relative overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="md:text-5xl text-3xl font-technor font-medium text-left ">
            CONTACT ME
          </h2>

          <p className="text-2xl font-technor md:ml-16">WANT TO DISCUSS A PROJECT?</p>

          <p className="font-neue text-2xl font-medium md:ml-16">Feel free to reach me via email at</p>
          <a
            href="mailto:xd.olayinka@gmail.com"
            className="text-purple-400 text-2xl hover:underline block font-neue font-medium md:ml-16"
          >
            xd.olayinka@gmail.com
          </a>

          <p className="font-neue text-lg font-medium md:ml-16">
            Or connect with me via phone call at{' '}
            <a
              href="tel:+2349099346124"
              className="text-purple-500 hover:underline"
            >
              +234 9099346124
            </a>
          </p>
          <div className=" md:ml-14 hidden md:flex gap-5">
            <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187692/all%20folder/db48a07deffac2ab8c10f1ffad9d1a6ac452d5b2_1_todasc.png" alt="" className="w-14" />
            <img src="https://res.cloudinary.com/ddjnrebkn/image/upload/v1746187686/all%20folder/e4a6dce810ad7603d54f2b136f584ad098a74bdb_ewkq9k.png" alt="" className="w-14"/>
          </div>
        </div>

        {/* Right Hand Image — stays within section, not scrolling */}
        
      </div>
      <div className="hidden md:block absolute  right-0 transform -translate-y-1/2 z-0">
          <img src={Hand} alt="Pointing Hand" className="w-64 mb-32" />
        </div>

      {/* Bottom Footer Row */}
      <div className="mt-20   font-neue hidden md:flex text-sm md:text-base justify-between items-center">
        <a href="#discuss" className="hover:text-purple-400 flex items-center gap-1">
          <p>Let’s</p>
          <p>Discuss</p>
          <p>&gt;</p>
        </a>
        <div className="text-sm">
          <p className="hidden md:inline">Twitter,</p>
          <p className="hidden md:inline ml-2">Dribbble,</p>
          <p className="hidden md:inline ml-5">LinkedIn</p>
        </div>
        <div className="flex gap-2 mr-20">
          <span>Digital</span>
          <span>Design</span>
        </div>
      </div>

      {/* BigStar Image at Bottom Center */}
      <div className="absolute  left-2/4 transform -translate-x-1/2 z-0">
        <img src={BigStar} alt="Star" className="w-52 h-20 ml-32" />
      </div>
     <h2 className="text-2xl md:block hidden md:text-5xl font-bold mb-10 py-32 mr-10 font-technor font-regular text-left">
  <span className="text-purple-500 font-neue font-regular">06/</span> TESTIMONIAL
</h2>

{/* Top Images Scroll */}
<div className="md:hidden overflow-x-auto mb-6 scrollbar-hide md:mt-10 mt-10">
  <div className="flex gap-32">
    {image.slice(0, 3).map((img, i) => (
      <img
        key={i}
        src={img}
        className="rounded-xl w-1/2 h-32 object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      />
    ))}
  </div>
</div>

<p className="md:hidden text-center text-lg font-neue font-medium text-white/80 mb-6">
  Trusted by top companies <br /> from various industries
</p>

<div className="md:hidden overflow-x-auto mb-16 scrollbar-hide">
  <div className="flex gap-32">
    {image.slice(4, 7).map((img, i) => (
      <img
        key={i}
        src={img}
        className="rounded-xl w-1/2 h-36 object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      />
    ))}
  </div>
</div>

{/* Desktop Image Layout */}
<div className="hidden md:flex md:flex-row md:justify-start md:gap-16 md:px-20 mb-16">
  <div className="flex flex-col gap-4">
    {images.slice(0, 3).map((img, i) => (
      <img
        key={i}
        src={img}
        className="rounded-xl w-32 h-32 object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      />
    ))}
  </div>
  <div className="flex gap-6 items-center">
    {images.slice(3, 7).map((img, i) => (
      <img
        key={i}
        src={img}
        className={`rounded-xl w-32 h-60 object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${i === 1 || i === 2 ? "mb-32" : ""}`}
      />
    ))}
  </div>
  <div className="flex flex-col gap-4">
    {images.slice(7, 10).map((img, i) => (
      <img
        key={i}
        src={img}
        className="rounded-xl w-32 h-32 object-cover transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
      />
    ))}
  </div>
</div>

{/* Testimonial Videos */}
<div className="md:grid md:grid-cols-4 md:px-20 md:gap-12 mb-16 overflow-x-auto px-10 flex gap-6 snap-x">
  {testimonialVideos.map((item, i) => (
    <div
      key={i}
      className="min-w-[250px] md:w-full rounded-xl overflow-hidden shadow-md bg-[#111] snap-start hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 ease-in-out"
    >
      <div className="relative w-full h-64 group">
        <video
          ref={(el) => (videoRefs.current[i] = el)}
          src={item.video}
          poster={item.videoThumb}
          className="w-full h-full object-cover"
          controls
          onEnded={() => handleEnded(i)}
        />
      </div>
      <div className="flex items-center gap-3 p-4">
        <img src={item.avatar} className="w-8 h-8 rounded-full object-cover" />
        <div>
          <p className="text-white font-syne font-medium text-sm">{item.name}</p>
          <p className="text-xs font-neue font-regular text-white/60">{item.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>

{/* Written Testimonials */}
<div className="md:grid md:grid-cols-3 md:px-20 px-10 gap-8 overflow-x-auto flex snap-x">
  {images.slice(10, 13).map((img, i) => (
    <div
      key={i}
      className="min-w-[300px] bg-black/30 p-4 rounded-xl border border-white/10 shadow-md snap-start hover:scale-[1.02] hover:shadow-lg transition-transform duration-300 ease-in-out"
    >
      <div className="flex gap-1 text-yellow-400 mb-2">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <FaStar key={idx} />
          ))}
      </div>
      <p className="mb-4 text-left font-neue font-regular">
        I love his work so much. I was able to rely on this agency to deliver the MVP of our product in less than 2 months (from discovery session to delivering prototypes). You should definitely give him a try.
      </p>
      <div className="flex items-center gap-2 mt-2">
        <img src={img} className="w-8 h-8 rounded-full object-cover" />
        <div>
          <p className="text-xl font-medium text-purple-400 text-left font-syne text-[#A22CFF]">Paul Jake</p>
          <p className="text-xs font-neue font-medium text-white/50">Product manager, Wise</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default ContactSection;
