import React from "react";
import heroimg from "@/public/hero.png";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <header id="home">
        <div className="w-full z-0 top-0 h-screen">
          <Image className="top-0 left-0 w-full h-screen object-cover" src={heroimg} alt="hero" />
          <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
          <div
            className="tracking-wider absolute text-3xl font-light
       top-1/2 w-full h-full flex justify-center text-white"
          >
            <div className="text-center md:top-0 max-w-full m-auto absolute p-8">
              <p>Freelance 3D Artist bringing ideas to life through visuals</p>
            </div>
          </div>
        </div>
      </header>

     
    </>
  );
};

export default Hero;
