import React from "react";

export type SnackbarSuccessProps = {
  show: boolean;
  onCloseSnackbar: () => void;
};

export type SnackbarWrapperProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
