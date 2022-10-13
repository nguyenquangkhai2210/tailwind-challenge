import { IconCheckCircle, IconVector } from "../icons";
import { SnackbarWrapper } from "./snackbar-wrapper";

import { SnackbarSuccessProps } from "./type";

export const SnackbarSuccess = ({
  show,
  onCloseSnackbar,
}: SnackbarSuccessProps) => {
  return (
    <SnackbarWrapper show={show} onClose={onCloseSnackbar}>
      <div className="w-full bg-green-100 px-3 py-2.5 flex justify-between items-center shadow-lg rounded-lg">
        <div className="flex items-center gap-3.5 text-base">
          <IconCheckCircle /> Đã copy số tài khoản
        </div>
        <IconVector onClick={onCloseSnackbar} />
      </div>
    </SnackbarWrapper>
  );
};
