import { client } from "../client";
import { ISMSVerification } from "../interface/ISMSVerification";

const send = async (to: string): Promise<boolean> => {
  try {
    const response = await client.verify
      .services(process.env.TWILIO_SMS_SID)
      .verifications.create({
        locale: "es",
        to,
        channel: "sms",
      });

    return response.status === "pending";
  } catch (error) {}
};

const verify = async (to: string, code: string): Promise<boolean> => {
  try {
    const response = await client.verify
      .services(process.env.TWILIO_SMS_SID)
      .verificationChecks.create({
        to,
        code,
      });

    return response.status === "approved";
  } catch (error) {}
};

const smsVerification: ISMSVerification = {
  verify,
  send,
};

export default smsVerification;
