import { Title } from "@/components/title";
import { Text } from "@/components/text";

export const BankInfo = () => {
  return (
    <>
      <Title className="px-1 py-1" size="xs">
        Chi nhánh ngân hàng
      </Title>
      <Text className="px-1 pb-3">
        Ngân hàng TMCP Việt Nam thịnh vượng (VPBank) Hội sở
      </Text>
      <Title className="px-1 py-1" size="xs">
        Số tài khoản
      </Title>
      <Text className="px-1 pb-3">191415477</Text>
      <Title className="px-1 py-1" size="xs">
        Tên tài khoản
      </Title>
      <Text className="px-1 pb-3">Công ty cổ phần Be Group</Text>
      <Title className="px-1 py-1" size="xs">
        Nội dung chuyển tiền
      </Title>
      <Text className="px-1 pb-3">"Covid19"</Text>
    </>
  );
};
