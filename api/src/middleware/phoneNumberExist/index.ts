import prisma from "@corecodeio/database";
import { VerifyPhoneNumberCodeInput } from "@corecodeio/libraries/api";
import PhoneNumber from "awesome-phonenumber";
import { IMiddlewareAsync } from "../interface/IMiddlewareAsync";

export class PhoneNumberExistMiddleware
  implements IMiddlewareAsync<VerifyPhoneNumberCodeInput> {
  async isValid(input) {
    const phone = new PhoneNumber(input.phoneNumber, "GT").getNumber("e164");
    const phoneNumbers = await prisma.phoneNumber.findMany({
      where: {
        number: phone,
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
