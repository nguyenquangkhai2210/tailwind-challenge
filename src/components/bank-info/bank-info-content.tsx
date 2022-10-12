import { Title } from "@/components/title";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import type { BankInfoProps } from "./type";

type BankInfoContentProps = BankInfoProps["data"] & {
  onOpenSnackBar: (param: boolean) => void;
};

export const BankInfoContent = ({
  account,
  bank,
  content,
  name,
  onOpenSnackBar,
}: BankInfoContentProps) => {
  return (
    <div className="bg-white p-3">
      <Title className="px-1 py-1" size="xs">
        Chi nhánh ngân hàng
      </Title>
      <Text className="px-1 pb-3">{bank}</Text>
      <div className="flex justify-between items-center pb-3">
        <div>
          <Title className="px-1 py-1" size="xs">
            Số tài khoản
          </Title>
          <Text className="px-1">{account}</Text>
        </div>
        <Button
          className="py-1.5 px-4 font-bold bg-neutral-200 shadow-none"
          onClick={() => onOpenSnackBar(true)}
        >
          Copy STK
        </Button>
      </div>
      <Title className="px-1 py-1" size="xs">
        Tên tài khoản
      </Title>
      <Text className="px-1 pb-3">{name}</Text>
      <Title className="px-1 py-1" size="xs">
        Nội dung chuyển tiền
      </Title>
      <Text className="px-1 pb-3">{content}</Text>
    </div>
  );
};
