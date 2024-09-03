"use client";

import React from "react";
import { myProject } from "@/constant";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <section id="portfolio">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-32 py-8">
        {myProject.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col"
            initial={{ opacity: 0, y: 50 }} // Awalnya tidak terlihat dan sedikit bergeser ke bawah
            whileInView={{ opacity: 1, y: 0 }} // Ketika masuk viewport, terlihat dan kembali ke posisi semula
            transition={{ duration: 0.5, delay: index * 0.2 }} // Menambahkan delay untuk setiap item
            viewport={{ once: true }} // Animasi hanya terjadi sekali ketika elemen pertama kali masuk viewport
          >
            <div className="w-full bg-white rounded-xl">
              <picture className="rounded-lg block overflow-hidden">
                <a href="#">
                  <Image className="w-full h-auto hover:scale-125 ease-in-out duration-150 transition-all" src={item.img} alt={item.title} />
                </a>
              </picture>
              <h1 className="mt-4 mb-2 text-2xl font-normal">{item.title}</h1>
              <p className="text-md text-gray-600">{item.desc}</p>
            </div>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Button color="bg-black">See More</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Card;
