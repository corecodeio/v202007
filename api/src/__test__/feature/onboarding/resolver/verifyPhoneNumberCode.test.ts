import { MutationVerifyPhoneNumberCode } from "@corecodeio/libraries/api/onboarding";
import { Dependencies } from "@corecodeio/libraries/di";
import { createTestClient } from "apollo-server-testing";
import { createApolloServer } from "../../../../server";
import { TwilioSMSVerificationInjectionKey } from "../../../../util/twilio/InjectionKeys";
import { ISMSVerification } from "../../../../util/twilio/interface/ISMSVerification";

const dependencies = new Dependencies();
const apolloServer = createApolloServer(dependencies);

dependencies.override<ISMSVerification>(TwilioSMSVerificationInjectionKey, {
  send: jest.fn(() => Promise.resolve(true)),
  verify: jest.fn(() => Promise.resolve(true)),
});

describe("verifyPhoneNumberCode", () => {
  test("Should return a response of type OnboardingSession", async () => {
    const { mutate } = createTestClient(apolloServer);

    const res = await mutate({
      mutation: MutationVerifyPhoneNumberCode,
      variables: {
        input: {
          phoneNumber: "+50230201622",
          code: "123456",
        },
      },
    });

    const twilioSMSVerification = dependencies.provide(
      TwilioSMSVerificationInjectionKey
    );

    expect(twilioSMSVerification.verify).toHaveBeenCalledTimes(1);

    expect(res.data.verifyPhoneNumberCode.token).toBeDefined();
  });
});
