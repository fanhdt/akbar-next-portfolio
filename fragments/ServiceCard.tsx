import { ServiceCardProps } from "@/common.type";
import React from "react";
import Image from "next/image";

const ServiceCard :React.FC<ServiceCardProps> = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
      <div className="w-full bg-white rounded-xl">
        <picture className="rounded-lg block overflow-hidden">
          <a href="#">
            <Image className="hover:scale-125 ease-in duration-150" src={img} alt={title} />
          </a>
        </picture>
        <h1 className="mt-8 mb-2 text-3xl font-normal">{title}</h1>
        <p className="text-lg text-black">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
