import { MutationVerifyPhoneNumberCode } from "@corecodeio/libraries/api/onboarding";
import { Dependencies } from "@corecodeio/libraries/di";
import { createTestClient } from "apollo-server-testing";
import axios from "axios";
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

describe("registerStore", () => {
  test("success", async () => {
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

    const token = res.data.verifyPhoneNumberCode.token;

    const result = await axios("http://localhost:8001/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        query: `
          mutation RegisterStore($input: RegisterStoreInput!) {
            registerStore(input: $input)
          }
        `,
        variables: {
          input: {
            url: "https://www.amazon.com",
          },
        },
      }),
    });
  });
});
