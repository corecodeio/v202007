import { ApolloError } from "apollo-server-express";

enum codes {
  phoneNumberExistCode = "PHONE_NUMBER_ALREADY_EXISTS",
}

const phoneNumberExistError = new ApolloError(
  "Numero de teléfono ya existe",
  codes.phoneNumberExistCode
);

export const phoneNumberExistMiddlewareError = {
  phoneNumberExistError,
};
