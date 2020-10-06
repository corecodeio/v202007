import prisma from "@corecodeio/database";
import { Dependencies } from "@corecodeio/libraries/di";
import * as faker from "faker";
import { PhoneNumberExistsMiddlewareInjectionKey } from "../../../middleware/InjectionKeys";

const dependencies = new Dependencies();

describe("PhoneNumberExistsMiddlewareTest", () => {
  const phoneNumberExistsMiddleware = dependencies.provide(
    PhoneNumberExistsMiddlewareInjectionKey
  );

  test("Should return a response with true", async () => {
    const inputTrue = {
      phoneNumber: faker.phone.phoneNumber("+5023#######"),
    };

    expect(await phoneNumberExistsMiddleware.isValid(inputTrue)).toBe(true);
  });

  test("Should return a response with false", async () => {
    const number = faker.phone.phoneNumber("+5023#######");

    await prisma.user.create({
      data: {
        contact: {
          create: {
            phoneNumber: {
              create: {
                number,
                verifiedAt: new Date(),
              },
            },
          },
        },
      },
    });

    const input1 = {
      phoneNumber: number,
    };

    expect(await phoneNumberExistsMiddleware.isValid(input1)).toBe(false);
  });
});
