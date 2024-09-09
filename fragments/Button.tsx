import { ButtonProps } from "@/common.type";
import React from "react";

const Button: React.FC<ButtonProps> = (props) => {
  const { color = "bg-black", children = "...", onClick, href } = props;

  // Jika ada href, gunakan tag <a>, jika tidak gunakan tag <button>
  if (href) {
    return (
      <a
        href={href}
        className={`${color} font-Inter text-white font-normal text-lg px-5 py-2 rounded-lg hover:bg-slate-600 transition-all ease-in-out duration-200 `}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${color} font-Inter text-white font-normal text-lg px-5 py-2 rounded-lg hover:bg-slate-600 transition-all ease-in-out duration-200 `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
