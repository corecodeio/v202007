import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { JWTInjectionKey } from "../jwt/InjectionKeys";
import { Session } from "./index";
import { ISession } from "./interface/ISession";

export const SessionInjectionKey: InjectionKey<ISession> = {
  name: "SessionInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const jwt = dependencies.provide(JWTInjectionKey);

    const session = new Session(jwt);

    return session;
  },
};
