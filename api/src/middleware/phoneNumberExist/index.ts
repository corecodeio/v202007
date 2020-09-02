import prisma from "@corecodeio/database";
import { VerifyPhoneNumberCodeInput } from "@corecodeio/libraries/api";
import { IMiddleware } from "../interface/IMiddleware";

export class PhoneNumberExistMiddleware
  implements IMiddleware<VerifyPhoneNumberCodeInput> {
  isValid() {
    return false;
  }
  async isValidAsync(input) {
    try {
      const phoneNumberExist = await prisma.phoneNumber.findMany({
        where: {
          number: input.phoneNumber,
        },
        select: {
          id: true,
          verifiedAt: true,
        },
      });

      if (!phoneNumberExist["verifiedAt"]) {
        return true;
      }
    } catch (error) {
      return false;
    } finally {
      await prisma.$disconnect();
    }
  }
}
