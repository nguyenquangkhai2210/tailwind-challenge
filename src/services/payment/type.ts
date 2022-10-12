export abstract class IAPI {
  abstract getBankInfo(): Promise<GetBankInfoResponse>;
  abstract submitCardPayment(data: SubmitCardPaymentRequest): Promise<any>;
}

export type GetBankInfoResponse = {
  bank: string;
  account: number;
  name: string;
  content: string;
};

export type SubmitCardPaymentRequest = {
  amount: number;
};

export type SubmitCardPaymentResponse = {
  amount: number;
  success: boolean;
};
