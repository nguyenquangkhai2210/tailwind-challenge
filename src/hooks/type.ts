import { GetBankInfoResponse } from "@/services/payment";
import { SubmitCardPaymentRequest } from "@/services/payment/type";

export type UseGetBankInfoReturn = {
  data?: GetBankInfoResponse;
  isLoading: boolean;
  error?: string;
};

export type UseSubmitCardPaymentReturn = {
  handleSubmit: (data: SubmitCardPaymentRequest) => Promise<void>;
  isSuccess: boolean;
  isLoading: boolean;
  error?: string;
};
