import { SubmitCardPaymentRequest } from "@/services/payment/type";
import { useState } from "react";
import { paymentService } from "@/services/payment";
import { UseSubmitCardPaymentReturn } from "./type";

export const useSubmitCardPayment = (): UseSubmitCardPaymentReturn => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit = async (data: SubmitCardPaymentRequest) => {
    setLoading(true);
    setError(undefined);
    setSuccess(false);

    try {
      const { success } = await paymentService.submitCardPayment(data);

      if (success) {
        setLoading(false);
        setSuccess(success);
      } else {
        throw new Error("Unknown Error");
      }
    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        setError(error.message);
      }

      setError("Unknown Error");
    }
  };

  return {
    handleSubmit,
    isSuccess,
    isLoading,
    error,
  };
};
