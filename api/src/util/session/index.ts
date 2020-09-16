import { User } from "@corecodeio/database";
import { OnboardingSession } from "../../../../../libraries/api/index";
import { IJSONWebToken } from "../jwt/interface/IJSONWebToken";
import { ISession } from "./interface/ISession";

export class Session implements ISession {
  private jwt: IJSONWebToken;

  constructor(jwt: IJSONWebToken) {
    this.jwt = jwt;
  }

  createOnboardingSession(user: User): OnboardingSession {
    return { token: this.jwt.sign(user) };
  }
}
