import { User } from "@corecodeio/database";
import { OnboardingSession } from "../../../../../../libraries/api/index";

export interface ISession {
  createOnboardingSession: (user: User) => OnboardingSession;
}
