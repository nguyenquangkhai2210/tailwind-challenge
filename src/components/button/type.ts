import React from "react";

export type ButtonProps = {
  fontSize?: "semibold" | "bold";
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};
