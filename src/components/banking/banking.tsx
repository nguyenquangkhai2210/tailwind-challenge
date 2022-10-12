import { Title } from "@/components/title";
import { Button } from "@/components/button";
import { DialogSuccess, DialogError } from "@/components/dialog";
import { useState } from "react";
import { BankingProps } from "./type";

const defaultMoneyBanking = [100000, 200000, 300000, 500000, 800000, 1000000];

export const Banking = ({
  handleSubmit,
  isLoading,
  isSuccess,
  error,
}: BankingProps) => {
  const [amount, setAmount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePayment = () => {
    handleSubmit({ amount });
    setIsOpen(true);
  };
  return (
    <div className="flex flex-col h-full">
      <Title className="flex-initial py-3">Chọn số tiền quyên góp</Title>
      <div className="flex-initial flex justify-between flex-wrap">
        {defaultMoneyBanking.map((moneyValue) => (
          <Button
            key={moneyValue}
            className="py-3.5 my-1 w-[6.5rem]"
            onClick={() => setAmount(moneyValue)}
          >
            {moneyValue.toLocaleString("it-IT")}đ
          </Button>
        ))}
      </div>
      <div className="flex-1 flex items-end w-full">
        <Button
          className="w-full p-2.5 bg-amber-400"
          fontSize="bold"
          onClick={handlePayment}
          loading={isLoading}
        >
          Tiến hành thanh toán
        </Button>
      </div>
      {isSuccess && isOpen ? (
        <DialogSuccess show={isOpen} onCloseDialog={() => setIsOpen(false)} />
      ) : null}
      {error && isOpen ? (
        <DialogError show={isOpen} onCloseDialog={() => setIsOpen(false)} />
      ) : null}
    </div>
  );
};
