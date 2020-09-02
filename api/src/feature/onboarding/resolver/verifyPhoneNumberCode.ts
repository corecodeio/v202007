import { MutationResolvers } from "@corecodeio/libraries/api";
import { PhoneNumberExistMiddlewareInjectionKey, PhoneNumberVerificationMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";
import { phoneNumberExistMiddlewareError } from '../../../middleware/phoneNumberExist/error';
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

    const phoneNumberExistMiddleware = dependencies.provide(
      PhoneNumberExistMiddlewareInjectionKey
    )

    if (!phoneNumberExistMiddleware.isValidAsync(input) ){
      throw phoneNumberExistMiddlewareError.phoneNumberExistError;
    }

    const onboardingController = dependencies.provide(
      OnboardingControllerInjectionKey
    );

    return onboardingController.verifyPhoneNumberCode(input);
  } catch (error) {}
};
