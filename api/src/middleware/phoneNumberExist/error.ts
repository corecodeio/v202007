import { ApolloError } from "apollo-server-express";

export enum codes {
  phoneNumberExistCode = "PHONE_NUMBER_ALREADY_EXISTS",
}

const phoneNumberExistsError = new ApolloError(
  "Numero de teléfono ya existe",
  codes.phoneNumberExistCode
);

export const phoneNumberExistsMiddlewareError = {
  phoneNumberExistsError,
};
