import twilio from "twilio";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const autToken = process.env.TWILIO_AUTH_TOKEN;
const serviceId = process.env.SERVICE_SID;

export const TwilioSendSMS = async (number?: string, body?: string) => {
  const client = twilio(accountSid, autToken);

  //   client.messages
  //     .create({
  //       to: number || process.env.MY_PHONE_NUMBER,
  //       from: process.env.MY_FROM_PHONE_NUMBER,
  //       body: body || "Hola Mundo",
  //     })
  //     .then((message) => console.log(message.sid));

  client.verify.services(serviceId).verifications.create({
    locale: 'es', 
    to: number || process.env.MY_PHONE_NUMBER,
    channel: "sms",
  }).then(verification => console.log(verification.sid));
};
