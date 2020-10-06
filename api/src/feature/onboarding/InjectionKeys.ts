import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { SessionInjectionKey } from "../../util/session/InjectionKeys";
import { TwilioSMSVerificationInjectionKey } from "../../util/twilio/InjectionKeys";
import { OnboardingController } from "./controller/OnboardingController";

export const OnboardingControllerInjectionKey: InjectionKey<OnboardingController> = {
  name: "OnboardingControllerInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const twilioSMSVerification = dependencies.provide(
      TwilioSMSVerificationInjectionKey
    );

    const session = dependencies.provide(SessionInjectionKey);

    const onboardingController = new OnboardingController(
      twilioSMSVerification,
      session
    );

    return onboardingController;
  },
};
