import React from "react";

export type ButtonProps = {
  fontSize?: "semibold" | "bold";
  bgColor?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
