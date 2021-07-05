import { QuerySendPhoneNumberVerificationCode } from "@corecodeio/libraries/api/onboarding";
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

describe("sendPhoneNumberVerificationCode", () => {
  test("Should return a response with code 200", async () => {
    const { query } = createTestClient(apolloServer);

    const res = await query({
      query: QuerySendPhoneNumberVerificationCode,
      variables: {
        input: {
          phoneNumber: faker.phone.phoneNumber("+5023#######"),
        },
      },
    });

    const twilioSMSVerification = dependencies.provide(
      TwilioSMSVerificationInjectionKey
    );

    expect(twilioSMSVerification.send).toHaveBeenCalledTimes(1);
  });
});
