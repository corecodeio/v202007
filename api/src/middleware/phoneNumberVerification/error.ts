import { ApolloError } from "apollo-server-express";

enum codes {
  invalidPhoneNumberErrorCode = "INVALID_PHONE_NUMBER",
}

const invalidPhoneNumberError = new ApolloError(
  "Número de teléfono inválido",
  codes.invalidPhoneNumberErrorCode
);

export const phoneNumberVerificationMiddlewareError = {
  invalidPhoneNumberError,
};
