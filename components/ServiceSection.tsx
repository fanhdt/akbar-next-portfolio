import React from "react";
import ServiceCard from "@/fragments/ServiceCard";
import { servicesPage } from "@/constant";

const ServicesSection = () => {
  return (
    <section id="service" className="service font-Inter">
      <div className="max-w-full px-8 lg:px-32 mt-24">
        <h1 className="font-bold text-5xl lg:text-7xl">Service</h1>
        <div className="bg-black w-full h-[1px] py-[1px] mt-10"></div>
      </div>
      <div className="card px-8 lg:px-32 flex items-center justify-center mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesPage.map((service) => (
            <ServiceCard key={service.id} img={service.img} title={service.title} desc={service.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
