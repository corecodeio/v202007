import { Dependencies } from "@corecodeio/libraries/di";
import { OnboardingControllerInjectionKey } from "../onboarding/InjectionKeys";

const dependencies = new Dependencies();
const onboardingController = dependencies.provide(
  OnboardingControllerInjectionKey
);

describe("OnboardingController", () => {
  it("Should return", async () => {
    const data = {
      phoneNumber: process.env.TWILIO_SMSVERIFICATION_TEST_NUM,
    };

    const shippingStatus = await onboardingController.sendPhoneNumberVerificationCode(
      data
    );

    expect(shippingStatus).toBe(true);
  });
});
