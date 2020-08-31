import PhoneNumber from "awesome-phonenumber";

export const PhoneNumberVerificationMiddleware = ({number}): String => {
  const phoneNumber = new PhoneNumber(number);
  if (!phoneNumber.isValid()) {
    throw new Error("Phone Number Invalid");
  }

  return phoneNumber.getNumber();
};

export const PhoneNumberCountryCode = (number): Number => {
  const phoneNumber = new PhoneNumber(number);
  if (!phoneNumber.isValid() && !phoneNumber.canBeInternationallyDialled()) {
    throw new Error("Phone Number Invalid or cannot be dialed internationally");
  }

  return phoneNumber.getCountryCode();
};
