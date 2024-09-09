import { StaticImageData } from "next/image";

export interface ServiceCardProps {
  img: StaticImageData;
  title: string;
  desc: string;
}

// common.type.ts (File ini harus diubah sesuai kebutuhan Anda)
export interface ButtonProps {
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;  // Tambahkan properti href
}

