import { Tab } from "@headlessui/react";
import { Title } from "@/components/title";
import { BankInfo } from "@/components/bank-info";
import { Banking } from "@/components/banking";
import { IconCheck, IconVisa, IconBank } from "@/components/icons";
import { useState } from "react";
import { useGetBankInfo } from "@/hooks/useGetBankInfo";
import { useSubmitCardPayment } from "@/hooks/useSubmitCardPayment";
const Payment = () => {
  const [activeTab, setActiveTab] = useState(false);
  const { data, isLoading, error } = useGetBankInfo();
  const handleSubmitCardPayment = useSubmitCardPayment();

  return (
    <div className="h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-neutral-100 w-[360px] h-[558px] flex flex-col shadow-lg">
        <Title
          className="flex-initial bg-white p-4 "
          color="gray-700"
          size="2xl"
        >
          Ủng hộ chống dịch Covid-19
        </Title>
        <Title className="flex-initial px-4 py-3">
          Chọn hình thức quyên góp
        </Title>
        <Tab.Group
          defaultIndex={0}
          onChange={(index) => {
            setActiveTab(!!index);
          }}
        >
          <Tab.List className="flex flex-wrap flex-initial">
            <Tab className="bg-white w-full p-3 mt-0.5">
              <div className="text-base flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <IconVisa width="24" height="24" />
                  Visa...2725
                </div>
                {!activeTab && <IconCheck />}
              </div>
            </Tab>
            <Tab className="bg-white w-full p-3 mt-0.5">
              <div className="text-base flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <IconBank width="24" height="24" />
                  Chuyển khoản ngân hàng
                </div>
                {activeTab && <IconCheck />}
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels className="flex-1">
            <Tab.Panel className="p-4 h-full">
              <Banking {...handleSubmitCardPayment} />
            </Tab.Panel>
            <Tab.Panel className="pt-8 h-full">
              <BankInfo data={data} isLoading={isLoading} error={error} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Payment;
