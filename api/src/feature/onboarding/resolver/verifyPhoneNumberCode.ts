import { MutationResolvers } from "@corecodeio/libraries/api";
import { PhoneNumberVerificationMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";
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

    if (!phoneNumberVerificationMiddleware.isValid(input)) {
      throw phoneNumberVerificationMiddlewareError.invalidPhoneNumberError; // este tiene que ser de tipo ApolloError.
    }

    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.verifyPhoneNumberCode(input);
  } catch (error) {}
};
