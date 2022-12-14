import React from "react";

export type DialogProps = {
  show: boolean;
  onCloseDialog: () => void;
};

export type DialogWrapperProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
