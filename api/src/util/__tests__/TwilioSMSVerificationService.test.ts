import smsVerification from "../twilio/service/SMSVerification";

describe("SMSVerification Service", () => {
  const { send, verify } = smsVerification;

  it("Should return true if response has status code 'approved'", async () => {
    const to = "+50245075393";
    const response = await send(to);
    expect(response).toBe(true);
  });
});
