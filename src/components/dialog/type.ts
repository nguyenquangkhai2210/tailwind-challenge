import React from "react";

export type DialogProps = {
  isOpen: boolean;
  setIsOpen: (param: boolean) => void;
};

export type DialogWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
