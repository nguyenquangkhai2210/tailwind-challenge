import { useEffect, useState } from "react";
import { paymentService, GetBankInfoResponse } from "../services/payment";
import { UseGetBankInfoReturn } from "./type";

export const useGetBankInfo = (): UseGetBankInfoReturn => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<GetBankInfoResponse>();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setLoading(true);
      const bankInfo = await paymentService.getBankInfo();

      setLoading(false);
      setData(bankInfo);
    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        setError(error.message);
      }

      setError("Unknown Error");
    }
  };

  return {
    data,
    isLoading,
    error,
  };
};
