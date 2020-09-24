import { QueryResolvers } from "@corecodeio/libraries/api";
import {
  PhoneNumberExistsMiddlewareInjectionKey,
  PhoneNumberVerificationMiddlewareInjectionKey,
} from "../../../middleware/InjectionKeys";
import { phoneNumberExistsMiddlewareError } from "../../../middleware/phoneNumberExist/error";
import { phoneNumberVerificationMiddlewareError } from "../../../middleware/phoneNumberVerification/error";
import { IContext } from "../../../server/interface/IContext";
import { OnboardingControllerInjectionKey } from "../InjectionKeys";

export const sendPhoneNumberVerificationCode: QueryResolvers<
  IContext
>["sendPhoneNumberVerificationCode"] = async (
  parent,
  { input },
  { dependencies }
) => {
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

    if (await phoneNumberExistsMiddleware.isValid(input)) {
      throw phoneNumberExistsMiddlewareError.phoneNumberExistsError;
    }

    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.sendPhoneNumberVerificationCode(input);
  } catch (error) {}
};
