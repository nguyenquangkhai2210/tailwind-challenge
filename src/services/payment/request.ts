import {
  GetBankInfoResponse,
  IAPI,
  SubmitCardPaymentRequest,
  SubmitCardPaymentResponse,
} from "./type";
import axios from "../axios";

class PaymentMethod extends IAPI {
  async getBankInfo(): Promise<GetBankInfoResponse> {
    const res = await axios.get<GetBankInfoResponse>("/bank");

    return res.data;
  }

  async submitCardPayment(
    data: SubmitCardPaymentRequest
  ): Promise<SubmitCardPaymentResponse> {
    const res = await axios.post("/card", data);

    return res.data;
  }
}

export const paymentService = new PaymentMethod();
