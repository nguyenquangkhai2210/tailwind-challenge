import { Title } from "../title";
import { IconCheck } from "../icons";
import { DialogWrapper } from "./dialog-wrapper";

import { DialogProps } from "./type";
import { Button } from "../button";
import { Text } from "../text";

export const Dialog = ({ isOpen, setIsOpen }: DialogProps) => {
  return (
    <DialogWrapper isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="w-full bg-white p-6 text-left align-middle shadow-xls">
        <div className="max-w-max px-2.5 py-3 bg-green-100 rounded-full">
          <IconCheck />
        </div>
        <Title className="mt-4" size="2xl" color="gray-700">
          Thanh toán thành công
        </Title>
        <Text className="my-3">
          Xin chân thành cảm ơn sự ủng hộ của Quý khách hàng
        </Text>
        <Button
          className="w-full p-2.5"
          fontSize="bold"
          bgColor="amber-400"
          onClick={() => setIsOpen(false)}
        >
          OK
        </Button>
      </div>
    </DialogWrapper>
  );
};
