import { prisma } from "@corecodeio/database";
import { formatPhoneNumber } from "@corecodeio/libraries/transform";
import config from "../../../util/config";
import { ISession } from "../../../util/session/interface/ISession";
import { ISMSVerification } from "../../../util/twilio/interface/ISMSVerification";
import { IOnboardingController } from "../interface/IOnboardingController";

const env = config.get("env");
const { verifiedPhoneNumbers } = config.get("flags");

export class OnboardingController implements IOnboardingController {
  private twilioSMSVerification: ISMSVerification;
  private verifiedPhoneNumbers = [];
  private session: ISession;

  constructor(twilioSMSVerification: ISMSVerification, session: ISession) {
    this.twilioSMSVerification = twilioSMSVerification;
    this.verifiedPhoneNumbers = env === "test" ? verifiedPhoneNumbers : [];
    this.session = session;
  }

  async verifyPhoneNumberCode({ phoneNumber, code }) {
    const isTwilioVerified = await this.twilioSMSVerification.verify(
      phoneNumber,
      code
    );

    if (!isTwilioVerified) {
      throw new Error("Error al verificar");
    }

    const number = formatPhoneNumber(phoneNumber);

    const user = await prisma.user.create({
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

    return this.session.createOnboardingSession(user);
  }

  async sendPhoneNumberVerificationCode({ phoneNumber }) {
    if (await this.verifiedPhoneNumbers.includes(phoneNumber)) {
      return true;
    }

    return await this.twilioSMSVerification.send(phoneNumber);
  }
}
