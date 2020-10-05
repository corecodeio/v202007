import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { PhoneNumberVerificationMiddleware } from "./phoneNumberVerification";

export const PhoneNumberVerificationMiddlewareInjectionKey: InjectionKey<PhoneNumberVerificationMiddleware> = {
  name: "PhoneNumberVerificationMiddlewareInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const onboardingController = new PhoneNumberVerificationMiddleware();

    return onboardingController;
  },
};
