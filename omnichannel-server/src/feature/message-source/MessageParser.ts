import { MessageBirdPayload } from "./interfaces/MessageBirdPayload";
import { MessageTwilioPayload } from "./interfaces/MessageTwilioPayload";
import { MessagePayload } from "./interfaces/MessagePayload";
import { MessageProvider } from "./interfaces/MessageProvider";

export class MessageParser {
  messageSource(req: Request, res: Response): Promise<Response> {
    const payload = this.parseRequestBody(req.body);

    // TODO: falta codigo

    return res.json({ status: "success" });
  }

  parseRequestBody = (body) => {
    const messageBody = <MessageBirdPayload | MessageTwilioPayload>body;

    if (this.isMessageBirdPayload(<MessageBirdPayload>messageBody)) {
      const MessageBody: MessagePayload = {
        from: (<MessageBirdPayload>messageBody).contactPhoneNumber,
        message: (<MessageBirdPayload>messageBody).payload,
        currentTime: (<MessageBirdPayload>messageBody).currentTime,
        messageProvider: MessageProvider.messageBird,
      };

      return MessageBody;
    } else if (this.isTwilioPayload(<MessageTwilioPayload>messageBody)) {
      const MessageBody: MessagePayload = {
        from: (<MessageTwilioPayload>messageBody).Number,
        message: (<MessageTwilioPayload>messageBody).Message,
        currentTime: (<MessageTwilioPayload>messageBody).Time,
        messageProvider: MessageProvider.twilio,
      };

      return MessageBody;
    }
  };

  responseMessage = (message: MessagePayload) => {
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

  private isMessageBirdPayload = (message: MessageBirdPayload): boolean => {
    return message.contactPhoneNumber !== undefined;
  };

  private isTwilioPayload = (message: MessageTwilioPayload): boolean => {
    return message.Number !== undefined;
  };
}
