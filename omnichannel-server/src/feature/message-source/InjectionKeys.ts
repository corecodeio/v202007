import { InjectionKey, InjectionKeyScope } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./controller/MessageSourceController";
import { MessageParser } from "./util/MessageParser";

export const MessageSourceControllerInjectionKey: InjectionKey<MessageSourceController> = {
  name: "MessageSourceControllerInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageParser = dependencies.provide(
      MessageParserInjectionKey
    );
    const messageSourceController = new MessageSourceController(
      messageParser
    );

    return messageSourceController;
  },
};

export const MessageParserInjectionKey: InjectionKey<MessageParser> = {
  name: "MessageParserInjectionKey",
  scope: InjectionKeyScope.singleton,
  closure: (dependencies) => {
    const messageSourceController = new MessageParser();
    return messageSourceController;
  },
};
