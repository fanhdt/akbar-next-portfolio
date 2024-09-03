import { StaticImageData } from "next/image";

export interface ButtonProps {
  color: string;
  children: React.ReactNode;
}

export interface ServiceCardProps {
  img: StaticImageData;
  title: string;
  desc: string;
}

