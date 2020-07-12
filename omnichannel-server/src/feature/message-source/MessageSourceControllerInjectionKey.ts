import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./controller/MessageSourceController";
import { MessagePayload } from "./interfaces/MessagePayload";

export const MessageSourceControllerInjectionKey: InjectionKey<MessageSourceController> = {
  name: "MessageSourceControllerInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messagePayload: MessagePayload = null;
    const messageSourceController = new MessageSourceController(messagePayload);
    return messageSourceController;
  },
};
