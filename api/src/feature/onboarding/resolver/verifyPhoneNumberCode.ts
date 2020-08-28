import { MutationResolvers } from "@corecodeio/libraries/api";
import { IContext } from "../../../server/interface/IContext";
import { OnboardingControllerInjectionKey } from "../InjectionKeys";
import { VerfyPhonNumber } from '../../../middleware/VerifyPhoneNumber';

export const verifyPhoneNumberCode: MutationResolvers<
  IContext
>["verifyPhoneNumberCode"] = (parent, { input }, { dependencies }) => {
  try {
    const verfyPhonNumber = VerfyPhonNumber(input)
    if (verfyPhonNumber.length > 0 ){
      const onboardingController = dependencies.provide(
        OnboardingControllerInjectionKey
        );
        
        return onboardingController.verifyPhoneNumberCode(input);
      }
  } catch (error) {}
};
