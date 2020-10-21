import {
  LazyQueryResult,
  MutationResult,
  useLazyQuery,
  useMutation,
} from "@apollo/client";
import {
  Mutation,
  MutationVerifyPhoneNumberCodeArgs,
  Query,
  QuerySendPhoneNumberVerificationCodeArgs,
} from "@corecodeio/libraries/api";
import {
  MutationVerifyPhoneNumberCode,
  QuerySendPhoneNumberVerificationCode,
} from "@corecodeio/libraries/api/onboarding";
import React from "react";
import { AuthToken } from "../../../util/auth/model/AuthToken";

export class Onboarding {
  private authToken: AuthToken;

  constructor(authToken: AuthToken) {
    this.authToken = authToken;
  }

  useSendPhoneNumberVerificationCode(): {
    executeSendPhoneNumberVerificationCode: (
      input: QuerySendPhoneNumberVerificationCodeArgs
    ) => void;
    result: Query["sendPhoneNumberVerificationCode"] | undefined;
    queryResult: LazyQueryResult<
      Query["sendPhoneNumberVerificationCode"],
      QuerySendPhoneNumberVerificationCodeArgs
    >;
  } {
    const [execute, queryResult] = useLazyQuery<
      Query["sendPhoneNumberVerificationCode"],
      QuerySendPhoneNumberVerificationCodeArgs
    >(QuerySendPhoneNumberVerificationCode);

    return {
      executeSendPhoneNumberVerificationCode: async ({ input }) => {
        await execute({
          variables: {
            input,
          },
        });
      },
      result: queryResult.data,
      queryResult,
    };
  }

  useVerifyPhoneNumberCode(): {
    executeVerifyPhoneNumberCode: (
      input: MutationVerifyPhoneNumberCodeArgs
    ) => void;
    result: Mutation["verifyPhoneNumberCode"] | null | undefined;
    error: Error | null;
    queryResult: MutationResult<Pick<Mutation, "verifyPhoneNumberCode">>;
  } {
    const [error, setError] = React.useState<Error | null>(null);
    const [execute, queryResult] = useMutation<
      Pick<Mutation, "verifyPhoneNumberCode">,
      MutationVerifyPhoneNumberCodeArgs
    >(MutationVerifyPhoneNumberCode);

    if (Boolean(queryResult?.data?.verifyPhoneNumberCode?.token)) {
      this.authToken.set(
        (queryResult.data as Pick<Mutation, "verifyPhoneNumberCode">)
          .verifyPhoneNumberCode.token
      );
    }

    return {
      executeVerifyPhoneNumberCode: async ({ input }) => {
        try {
          await execute({
            variables: {
              input,
            },
          });
        } catch (error) {
          setError(new Error("Algo salió mal. Intenta de nuevo"));
        }
      },
      result: queryResult?.data?.verifyPhoneNumberCode,
      error: queryResult.error ?? error,
      queryResult,
    };
  }
}
