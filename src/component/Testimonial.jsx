
import { FaStar, FaPause, FaPlay } from "react-icons/fa";
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
  },
  {
    videoThumb:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436008/all%20folder/21ed6a776d6b81979478ca14622df5afb1eee293_1_gqbyob.jpg",
    avatar:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
    name: "Jane Smith",
    role: "Marketing Lead, Stripe",
  },
  {
    videoThumb:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1751436008/all%20folder/d1d0c31bc88d35319d39ed0f9086a970a5a8c5ba_1_a3qpar.jpg",
    avatar:
      "https://res.cloudinary.com/ddjnrebkn/image/upload/v1752137356/all%20folder/7042a84b3d6a7edb0157de0a7bf383dd2673a1be_1_jixrit.jpg",
    name: "Tolu Adebayo",
    role: "Design Director, Paystack",
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

  
 

const Testimonials = () => {
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
    <section id="testimonials" className="w-full bg-black text-white py-20">
      <h2 className="text-2xl md:text-5xl font-bold mb-10 py-10 mr-10 text-left">
        <span className="text-purple-500">06/</span> TESTIMONIAL
      </h2>

      {/* Top Images Scroll */}
      <div className="md:hidden overflow-x-auto mb-6 scrollbar-hide">
        <div className="flex gap-32 ">
          {image.slice(0, 3).map((img, i) => (
            <img key={i} src={img} className="rounded-xl w-1/2 h-32 object-cover" />
          ))}
        </div>
      </div>

      <p className="md:hidden text-center text-lg font-semibold text-white/80 mb-6">
        Trusted by top companies <br /> from various industries
      </p>

      <div className="md:hidden overflow-x-auto mb-16 scrollbar-hide">
        <div className="flex gap-32 ">
          {image.slice(4, 6).map((img, i) => (
            <img key={i} src={img} className="rounded-xl w-1/2 h-36 object-cover" />
          ))}
        </div>
      </div>

      {/* Desktop Image Layout */}
      <div className="hidden md:flex md:flex-row md:justify-start md:gap-16 md:px-20 mb-16">
        <div className="flex flex-col gap-4">
          {images.slice(0, 3).map((img, i) => (
            <img key={i} src={img} className="rounded-xl w-32 h-32 object-cover" />
          ))}
        </div>
        <div className="flex gap-6 items-center">
          {images.slice(3, 7).map((img, i) => (
            <img
              key={i}
              src={img}
              className={`rounded-xl w-32 h-60 object-cover ${i === 1 || i === 2 ? "mb-32" : ""}`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {images.slice(7, 10).map((img, i) => (
            <img key={i} src={img} className="rounded-xl w-32 h-32 object-cover" />
          ))}
        </div>
      </div>

      {/* Testimonial Videos */}
            <div className="md:grid md:grid-cols-4 md:px-20 md:gap-12 mb-16 overflow-x-auto px-10 flex gap-6 snap-x">
        {testimonialVideos.map((item, i) => (
          <div
            key={i}
            className="min-w-[250px] md:w-full rounded-xl overflow-hidden shadow-md bg-[#111] snap-start"
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
              {/* <button
                onClick={() => handlePlayPause(i)}
                className="absolute bottom-2 left-2 bg-black/60 p-2 rounded-full text-white z-10"
              >
                <FaPlay className="text-lg" />
              </button> */}
            </div>
            <div className="flex items-center gap-3 p-4">
              <img src={item.avatar} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-white font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-white/60">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Written Testimonials */}
      <div className="md:grid md:grid-cols-3 md:px-20 px-10 gap-8 overflow-x-auto flex snap-x">
        {images.slice(2, 5).map((img, i) => (
          <div key={i} className="min-w-[300px] bg-black/30 p-4 rounded-xl border border-white/10 shadow-md snap-start">
            <div className="flex gap-1 text-yellow-400 mb-2">
              {Array(5).fill(0).map((_, idx) => <FaStar key={idx} />)}
            </div>
            <p className="mb-4 text-left">
              I love his work so much. I was able to rely on this agency to deliver the MVP of our product in less than 2 months (from discovery session to delivering prototypes). You should definitely give him a try.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <img src={img} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-purple-400 text-left">Paul Jake</p>
                <p className="text-xs text-white/50">Product manager, Wise</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
