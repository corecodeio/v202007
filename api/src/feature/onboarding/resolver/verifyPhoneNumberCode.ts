import { MutationResolvers } from "@corecodeio/libraries/api";
import {
  PhoneNumberExistsMiddlewareInjectionKey,
  PhoneNumberVerificationMiddlewareInjectionKey,
} from "../../../middleware/InjectionKeys";
import { phoneNumberExistsMiddlewareError } from "../../../middleware/phoneNumberExist/error";
import { phoneNumberVerificationMiddlewareError } from "../../../middleware/phoneNumberVerification/error";
import { IContext } from "../../../server/interface/IContext";
import { OnboardingControllerInjectionKey } from "../InjectionKeys";

export const verifyPhoneNumberCode: MutationResolvers<
  IContext
>["verifyPhoneNumberCode"] = async (parent, { input }, { dependencies }) => {
  try {
    const phoneNumberVerificationMiddleware = dependencies.provide(
      PhoneNumberVerificationMiddlewareInjectionKey
    );

    if (await !phoneNumberVerificationMiddleware.isValid(input)) {
      throw phoneNumberVerificationMiddlewareError.invalidPhoneNumberError;
    }

    const phoneNumberExistsMiddleware = dependencies.provide(
      PhoneNumberExistsMiddlewareInjectionKey
    );

    if (await !phoneNumberExistsMiddleware.isValid(input)) {
      throw phoneNumberExistsMiddlewareError.phoneNumberExistsError;
    }

    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.verifyPhoneNumberCode(input);
  } catch (error) {
    return error;
  }
};
