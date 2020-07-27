import { IMessageBirdPayload } from "../interfaces/IMessageBirdPayload";
import { IMessageTwilioPayload } from "../interfaces/IMessageTwilioPayload";
import { IMessagePayload } from "../interfaces/IMessagePayload";
import { MessageProvider } from "../interfaces/MessageProvider";

export class MessageParser {
  parseRequestBody = (body: IMessageBirdPayload | IMessageTwilioPayload) => {
    if (this.isMessageBirdPayload(<IMessageBirdPayload>body)) {
      return this.parseMessageBirdPayload(<IMessageBirdPayload>body);
    } else if (this.isTwilioPayload(<IMessageTwilioPayload>body)) {
      return this.parseMessageTwilioPayload(<IMessageTwilioPayload>body)
    }
  };

  responseMessage = (message: IMessagePayload) => {
    if (message.messageProvider === MessageProvider.messageBird) {
      const MessageBody: IMessageBirdPayload = {
        contactPhoneNumber: message.from,
        payload: message.message,
        currentTime: message.currentTime,
      };

      return MessageBody;
    } else if (message.messageProvider === MessageProvider.twilio) {
      const MessageBody: IMessageTwilioPayload = {
        Number: message.from,
        Message: message.message,
        Time: message.currentTime,
      };

      return MessageBody;
    }
  };

  private parseMessageBirdPayload(body: IMessageBirdPayload): IMessagePayload {
    const from = body.contactPhoneNumber;
    const message = body.payload;
    const currentTime = body.currentTime;
    const messageProvider = MessageProvider.messageBird;

    return {
      from,
      message,
      currentTime,
      messageProvider,
    };
  }

  private parseMessageTwilioPayload(
    body: IMessageTwilioPayload
  ): IMessagePayload {
    const from = body.Number;
    const message = body.Message;
    const currentTime = body.Time;
    const messageProvider = MessageProvider.twilio;

    return {
      from,
      message,
      currentTime,
      messageProvider,
    };
  }

  private isMessageBirdPayload = (payload: IMessageBirdPayload): boolean => {
    return payload.contactPhoneNumber !== undefined;
  };

  private isTwilioPayload = (payload: IMessageTwilioPayload): boolean => {
    return payload.Number !== undefined;
  };
}
