import React from "react";

export type TitleProps = {
  size?: "sm" | "xs" | "2xl";
  uppercase?: boolean;
  color?: string;
  className?: string;
  children: React.ReactNode;
};
