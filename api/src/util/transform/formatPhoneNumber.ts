import PhoneNumber from "awesome-phonenumber";

const countryCode = "GT";

/**
 * @reference https://www.npmjs.com/package/awesome-phonenumber
 */
export const formatPhoneNumber = (phoneNumer: string) => {
  return new PhoneNumber(phoneNumer, countryCode).getNumber("e164");
};
export default formatPhoneNumber;
