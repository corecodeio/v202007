import PhoneNumber from "awesome-phonenumber";

export const VerfyPhonNumber = ({number}): String => {
  const phoneNumber = new PhoneNumber(number);
  if (!phoneNumber.isValid()) {
    throw new Error("Phone Number Invalid");
  }

  return phoneNumber.getNumber();
};

export const PhonNumberCountryCode = (number): Number => {
  const phoneNumber = new PhoneNumber(number);
  if (!phoneNumber.isValid() && !phoneNumber.canBeInternationallyDialled()) {
    throw new Error("Phone Number Invalid or not Nnternationally");
  }

  return phoneNumber.getCountryCode();
};
