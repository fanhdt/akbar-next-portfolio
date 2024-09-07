import { StaticImageData } from "next/image";

export interface ServiceCardProps {
  img: StaticImageData;
  title: string;
  desc: string;
}

// common.type.ts
export interface ButtonProps {
  color?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;  // Add this line to support onClick
}
