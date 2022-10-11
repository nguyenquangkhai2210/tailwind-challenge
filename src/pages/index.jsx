import { Tab } from "@headlessui/react";
import { Title } from "@/components/title";
import { BankInfo } from "@/components/bank-info";
import { Banking } from "@/components/banking";
import { IconCheck } from "@/components/icons";
import { useState } from "react";

const Payment = () => {
  const [activeTab, setActiveTab] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="bg-neutral-100 w-[360px] h-[520px] flex flex-col">
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
            <Tab className="bg-white w-full p-4 mt-0.5">
              <div className="text-base flex justify-between">
                Visa...2725
                {!activeTab && <IconCheck />}
              </div>
            </Tab>
            <Tab className="bg-white w-full p-4 mt-0.5">
              <div className="text-base flex justify-between">
                Chuyển khoản ngân hàng
                {activeTab && <IconCheck />}
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels className="flex-1">
            <Tab.Panel className="p-4 h-full">
              <Banking />
            </Tab.Panel>
            <Tab.Panel className=" bg-white mt-8 pt-3 px-3">
              <BankInfo />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Payment;
