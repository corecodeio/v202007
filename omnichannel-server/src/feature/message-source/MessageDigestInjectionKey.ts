import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageDigest } from "./controller/MessageDigest";

export const MessageDigestInjectionKey: InjectionKey<MessageDigest> = {
  name: "messageDigestInjectionKEy",
  scope: InjectionKeyScope.singlenton,
  closure: (dependencies) => {
    const messageDigest = new MessageDigest();
    return messageDigest;
  },
};
