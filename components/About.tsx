import React from "react";
import owner from "@/public/owner.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about font-Inter">
      <div className="max-w-full px-8 lg:px-32 mt-32 bg-[#232323]" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="text py-16 lg:py-96 w-full">
            <h1 className="font-bold text-5xl lg:text-7xl text-white">About Me</h1>

            <p className="text-white text-xl lg:text-2xl pt-8 tracking-wide w-full pb-5">
              My name is Akbar, I am a visual 3D artist, specializing <br className="hidden lg:block" />
              in motion design. My journey in the creative field <br className="hidden lg:block" />
              began with creating a visual experience from an idea.
            </p>
            <p className="text-white text-xl lg:text-2xl pt-2 tracking-wide w-full pb-5">
              Before immersing myself in the realm of 3D, I spent <br className="hidden lg:block" />
              three years as a graphic designer. During that time, I <br className="hidden lg:block" />
              deepened my expertise and honed my skills in detail.
            </p>
            <a href="https://instagram.com/akbarrbni" className="text-white text-lg lg:text-xl tracking-wide w-full" target="_blank" rel="noopener noreferrer">
              @akbarrbni
            </a>
          </div>

          <div className="flex justify-center lg:justify-end items-center py-16 lg:py-56">
            <Image className=" w-full lg:w-[70%] bg-white" src={owner} alt="Owner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
