import prisma from "@corecodeio/database";
import { VerifyPhoneNumberCodeInput } from "@corecodeio/libraries/api";
import { IMiddleware } from "../interface/IMiddleware";

export class PhoneNumberExistMiddleware
  implements IMiddleware<VerifyPhoneNumberCodeInput> {
  isValid() { return false}
  async isValidAsync(input) {
    try {
      return await prisma.phoneNumber
        .findMany({
          where: {
            number: input.phoneNumber,
          },
          select: {
            id: true,
          },
        })
        .then((num) => {
          if (num.length > 0) {
            return true;
          }
          return false;
        });
    } catch (error) {
      return false;
    } finally {
      await prisma.$disconnect();
    }
  }
}
