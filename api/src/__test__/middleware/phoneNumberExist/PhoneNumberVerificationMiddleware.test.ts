import { Dependencies } from "@corecodeio/libraries/di";
import { PhoneNumberVerificationMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";

const dependencies = new Dependencies();

describe("PhoneNumberVerificationMiddlewareTest", () => {
  const phoneNumberVerification = dependencies.provide(
    PhoneNumberVerificationMiddlewareInjectionKey
  );
  test("Should return a response with true", async () => {
    const inputTrue = {
      phoneNumber: "52521251",
    };

    expect(await phoneNumberVerification.isValid(inputTrue)).toBe(true);
  });

  test("Should return a response with false", async () => {
    const inputFalse = {
      phoneNumber: "12345642",
    };
    expect(await phoneNumberVerification.isValid(inputFalse)).toBe(false);
  });
});
