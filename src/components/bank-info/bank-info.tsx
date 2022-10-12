import { BankInfoContent } from "./bank-info-content";
import { SnackbarSuccess } from "@/components/snackbar";
import { useState } from "react";
import { BankInfoProps } from "./type";
import { IconError, IconLoading } from "../icons";
import { Text } from "../text";

export const BankInfo = ({ isLoading, data, error }: BankInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="h-full flex justify-center">
        <div className="flex items-center gap-3">
          <IconLoading />
          <Text>Tải dữ liệu ...</Text>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex justify-center">
        <div className="flex items-center gap-3">
          <div className="max-w-max px-4 py-4 bg-red-100 rounded-full">
            <IconError />
          </div>
          <Text> Đã có lỗi xảy ra. Vui lòng thử lại</Text>
        </div>
      </div>
    );
  }

  return (
    <>
      <BankInfoContent onOpenSnackBar={setIsOpen} {...data} />
      <SnackbarSuccess show={isOpen} onCloseSnackbar={() => setIsOpen(false)} />
    </>
  );
};
