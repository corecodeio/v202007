import { Dependencies } from "@corecodeio/libraries/di";
import { PhoneNumberVerificationMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";

const dependencies = new Dependencies();

describe("PhoneNumberVerificationMiddlewareTest", () => {
  const phoneNumberVerification = dependencies.provide(
    PhoneNumberVerificationMiddlewareInjectionKey
  );
  test("Should return a response with true", async () => {
    const inputTrue = {
      phoneNumber: "+50252546525",
    };

    expect(phoneNumberVerification.isValid(inputTrue)).toBeTruthy();
  });

  test("Should return a response with false", async () => {
    const inputFalse = {
      phoneNumber: "52546525",
    };
    expect(phoneNumberVerification.isValid(inputFalse)).toBeTruthy();
  });
});
