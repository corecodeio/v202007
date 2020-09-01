import { VerifyPhoneNumberCodeInput } from "@corecodeio/libraries/api";
import PhoneNumber from "awesome-phonenumber";
import { IMiddleware } from "../interface/IMiddleware";

export class PhoneNumberVerificationMiddleware
  implements IMiddleware<VerifyPhoneNumberCodeInput> {
  isValid(input) {
    const phoneNumber = new PhoneNumber(input.phoneNumber, "GT");
    return phoneNumber.isValid();
  }
}
