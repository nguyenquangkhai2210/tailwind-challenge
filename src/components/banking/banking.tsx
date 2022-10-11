import { Title } from "@/components/title";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { useState } from "react";

export const Banking = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen", isOpen);

  return (
    <div className="flex flex-col h-full">
      <Title className="flex-initial py-3">Chọn số tiền quyên góp</Title>
      <div className="flex-initial flex justify-between flex-wrap">
        <Button className="py-3.5 my-1 w-[6.5rem]">100.000đ</Button>
        <Button className="py-3.5 my-1 w-[6.5rem]">200.000đ</Button>
        <Button className="py-3.5 my-1 w-[6.5rem]">300.000đ</Button>
        <Button className="py-3.5 my-1 w-[6.5rem]">500.000đ</Button>
        <Button className="py-3.5 my-1 w-[6.5rem]">800.000đ</Button>
        <Button className="py-3.5 my-1 w-[6.5rem]">1.000.000đ</Button>
      </div>
      <div className="flex-1 flex items-end w-full">
        <Button
          className="w-full p-2.5 bg-amber-400"
          fontSize="bold"
          onClick={() => setIsOpen(true)}
        >
          Tiến hành thanh toán
        </Button>
      </div>
      {isOpen ? <Dialog isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </div>
  );
};
