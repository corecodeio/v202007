import { MutationVerifyPhoneNumberCode } from "@corecodeio/libraries/api/onboarding";
import { Dependencies } from "@corecodeio/libraries/di";
import { createTestClient } from "apollo-server-testing";
import * as faker from "faker";
import { createApolloServer } from "../../../../server";
import { TwilioSMSVerificationInjectionKey } from "../../../../util/twilio/InjectionKeys";
import { ISMSVerification } from "../../../../util/twilio/interface/ISMSVerification";
import { smsVerificationMock } from "../../../mock/smsVerificationMock";

const dependencies = new Dependencies();
const apolloServer = createApolloServer(dependencies);

dependencies.override<ISMSVerification>(
  TwilioSMSVerificationInjectionKey,
  smsVerificationMock
);

describe("verifyPhoneNumberCode", () => {
  test("Should return a response of type OnboardingSession", async () => {
    const { mutate } = createTestClient(apolloServer);

    const res = await mutate({
      mutation: MutationVerifyPhoneNumberCode,
      variables: {
        input: {
          phoneNumber: faker.phone.phoneNumber("+5023#######"),
          code: "123",
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
