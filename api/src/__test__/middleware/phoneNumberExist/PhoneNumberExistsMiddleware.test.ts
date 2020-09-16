import { Dependencies } from "@corecodeio/libraries/di";
import { PhoneNumberExistsMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";

const dependencies = new Dependencies();

describe("PhoneNumberExistsMiddlewareTest", () => {
  const phoneNumberExistsMiddleware = dependencies.provide(
    PhoneNumberExistsMiddlewareInjectionKey
  );
  test("Should return a response with true", async () => {
    const inputTrue = {
      phoneNumber: "+50252546525",
    };

    expect(phoneNumberExistsMiddleware.isValid(inputTrue)).toBeTruthy();
  });

  test("Should return a response with false", async () => {
    const inputFalse = {
      phoneNumber: "52546525",
    };
    expect(phoneNumberExistsMiddleware.isValid(inputFalse)).toBeTruthy();
  });
});
