import { Dependencies } from "@corecodeio/libraries/di";
import { PhoneNumberExistsMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";

const dependencies = new Dependencies();

describe("PhoneNumberExistsMiddlewareTest", () => {
  const phoneNumberExistsMiddleware = dependencies.provide(
    PhoneNumberExistsMiddlewareInjectionKey
  );
  test("Should return a response with true", async () => {
    const inputTrue = {
      phoneNumber: "+50212345642",
    };

    expect(await phoneNumberExistsMiddleware.isValid(inputTrue)).toBe(true);
  });

  test("Should return a response with false", async () => {
    const inputFalse = {
      phoneNumber: "5642",
    };
    expect(await phoneNumberExistsMiddleware.isValid(inputFalse)).toBe(false);
  });
});
