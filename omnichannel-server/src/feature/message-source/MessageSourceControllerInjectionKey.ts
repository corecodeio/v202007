import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./controller/MessageSourceController";

export const MessageSourceControllerInjectionKey: InjectionKey<MessageSourceController> = {
  name: "MessageSourceControllerInjectionKey",
  scope: InjectionKeyScope.singlenton,
  closure: (dependencies) => {
    const messageSourceController = new MessageSourceController();
    return messageSourceController;
  },
};
