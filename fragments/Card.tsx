import React from "react";
import { myProject } from "@/constant";
import Button from "./Button";
import Image from "next/image";

const Card = () => {
  return (
    <section id="portfolio">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-32 py-8" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        {myProject.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="w-full bg-white rounded-xl ">
              <picture className="rounded-lg block overflow-hidden">
                <a href="#">
                  <Image className="w-full h-auto hover:scale-125 ease-in duration-150 transition-transform" src={item.img} alt={item.title} />
                </a>
              </picture>
              <h1 className="mt-4 mb-2 text-2xl font-normal">{item.title}</h1>
              <p className="text-md text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}

        <div>
          <Button color="bg-black">See More</Button>
        </div>
      </div>
    </section>
  );
};

export default Card;
