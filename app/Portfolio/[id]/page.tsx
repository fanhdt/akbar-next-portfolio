"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { portProject } from "@/constant";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Define the type for the portProject items
type ProjectItem = {
  id: number;
  img: StaticImageData;
  title: string;
  desc: string;
};

const PortfolioPage = () => {
  const { id } = useParams();
  const projectId = parseInt(id as string, 10);
  const initialItem = portProject.find((item) => item.id === projectId);

  // State to track the current main image and grid images
  const [mainItem, setMainItem] = useState<ProjectItem | undefined>(initialItem);
  const [gridItems, setGridItems] = useState<ProjectItem[]>(portProject.filter((item) => item.id !== projectId));

  const handleImageClick = (clickedItem: ProjectItem) => {
    // Swap the main image with the clicked image
    setGridItems([mainItem!, ...gridItems.filter((item) => item.id !== clickedItem.id)]);
    setMainItem(clickedItem);

    // Scroll to the top of the page when an image is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!mainItem) {
    return <div>Project not found</div>;
  }

  return (
    <section id="portfolio">
      <div className="mx-auto px-6 lg:px-32 py-8">
        <h1 className="mt-32 mb-5 text-5xl font-bold">{mainItem.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{mainItem.desc}</p>
        <motion.div className="w-full mt-11 bg-white rounded-xl overflow-hidden" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Image className="w-full h-auto cursor-pointer overflow-hidden rounded-xl" src={mainItem.img} alt={mainItem.title} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 overflow-hidden">
          {gridItems.map((item) => (
            <motion.div key={item.id} className="cursor-pointer overflow-hidden rounded-xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onClick={() => handleImageClick(item)}>
              <Image className="w-full h-auto cursor-pointer overflow-hidden rounded-xl" src={item.img} alt={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
