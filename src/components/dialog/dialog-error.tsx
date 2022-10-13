import { Title } from "../title";
import { IconError } from "../icons";
import { DialogWrapper } from "./dialog-wrapper";

import { DialogProps } from "./type";
import { Button } from "../button";
import { Text } from "../text";
import { type } from "os";

type DialogErrorProps = DialogProps & {
  title: string;
  description: string;
};

export const DialogError = ({
  show,
  onCloseDialog,
  title,
  description,
}: DialogErrorProps) => {
  return (
    <DialogWrapper show={show} onClose={onCloseDialog}>
      <div className="w-full bg-white p-6 text-left align-middle shadow-xls">
        <div className="max-w-max px-4 py-4 bg-red-100 rounded-full">
          <IconError />
        </div>
        <Title className="mt-4" color="gray-700" size="2xl">
          {title}
        </Title>
        <Text className="mt-3 mb-10">{description}</Text>
        <Button
          className="w-full p-2.5 bg-amber-400"
          fontSize="bold"
          onClick={onCloseDialog}
        >
          OK
        </Button>
      </div>
    </DialogWrapper>
  );
};
