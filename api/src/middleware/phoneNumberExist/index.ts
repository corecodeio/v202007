import prisma from "@corecodeio/database";
import { VerifyPhoneNumberCodeInput } from "@corecodeio/libraries/api";
import { IMiddlewareAsync } from '../interface/IMiddlewareAsync';

export class PhoneNumberExistMiddleware
  implements IMiddlewareAsync<VerifyPhoneNumberCodeInput> {
  async isValid(input) {
    const phoneNumbers = await prisma.phoneNumber.findMany({
      where: {
        number: input.phoneNumber,
      },
      select: {
        verifiedAt: true,
      },
    });

    const isPhoneNumberVerified = phoneNumbers.filter(
      (phoneNumber) => phoneNumber.verifiedAt !== null
    );

    return isPhoneNumberVerified.length > 0;
  }
}
