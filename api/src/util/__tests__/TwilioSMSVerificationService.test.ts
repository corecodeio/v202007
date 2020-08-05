import smsVerification from "../twilio/service/SMSVerification";

describe("SMSVerification Service", () => {
  const { send, verify } = smsVerification;

  it("Should return true if response has status code is 'pending'", async () => {
    const to = process.env.TWILIO_SMSVERIFICATION_TEST_NUM;
    const response = await send(to);
    expect(response).toBe(true);
  });
});
