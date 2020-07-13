import { MessageBirdPayload } from "./interfaces/MessageBirdPayload";
import { MessageTwilioPayload } from "./interfaces/MessageTwilioPayload";
import { MessagePayload } from "./interfaces/MessagePayload";
import { MessageProvider } from "./interfaces/MessageProvider";

export const MessageParser = ({ body }) => {
  const messageBody = <MessageBirdPayload | MessageTwilioPayload>body;

  if (isBird(<MessageBirdPayload>messageBody)) {
    const MessageBody: MessagePayload = {
      from: (<MessageBirdPayload>messageBody).contactPhoneNumber,
      message: (<MessageBirdPayload>messageBody).payload,
      currentTime: (<MessageBirdPayload>messageBody).currentTime,
      messageProvider: MessageProvider.messageBird,
    };

    return MessageBody;
  } else if (isTwilio(<MessageTwilioPayload>messageBody)) {
    const MessageBody: MessagePayload = {
      from: (<MessageTwilioPayload>messageBody).Number,
      message: (<MessageTwilioPayload>messageBody).Message,
      currentTime: (<MessageTwilioPayload>messageBody).Time,
      messageProvider: MessageProvider.twilio,
    };

    return MessageBody;
  }
};

export const ResponseMessage = (message: MessagePayload) => {
  if (message.messageProvider === MessageProvider.messageBird) {
    const MessageBody: MessageBirdPayload = {
      contactPhoneNumber: message.from,
      payload: message.message,
      currentTime: message.currentTime,
    };

    return MessageBody;
  } else if (message.messageProvider === MessageProvider.twilio) {
    const MessageBody: MessageTwilioPayload = {
      Number: message.from,
      Message: message.message,
      Time: message.currentTime,
    };

    return MessageBody;
  }
};

const isBird = (message: MessageBirdPayload) => {
  return message.contactPhoneNumber !== undefined;
};

const isTwilio = (message: MessageTwilioPayload) => {
  return message.Number !== undefined;
};
