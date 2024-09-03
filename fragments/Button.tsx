import { ButtonProps } from "@/common.type";
import React from "react";

const Button: React.FC<ButtonProps> = (props) => {
  const { color = "bg-black", children = "..." } = props;
  return <button className={`${color} font-Inter text-white font-normal text-lg px-5 py-2 rounded-lg hover:bg-slate-600 transition-all ease-in-out duration-200`}>{children}</button>;
};

export default Button;
