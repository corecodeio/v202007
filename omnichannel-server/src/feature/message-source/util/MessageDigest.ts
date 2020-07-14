import { IMessageBirdPayload } from '../interfaces/IMessageBirdPayload';
import { IMessagePayload } from '../interfaces/IMessagePayload';

export class MessageDigest {
  private data: any;
  private messageBirdStandar: IMessageBirdPayload = {
    contactPhoneNumber: "",
    currentTime: new Date(),
    payload: "",
  };
  private message: IMessagePayload = {
    message: "",
    currentTime: new Date(),
    from: "",
  };

  constructor() { }

  public set setMessageSource(data) {
    this.message.message = this.messageBirdStandar.contactPhoneNumber;
    this.message.currentTime = this.messageBirdStandar.currentTime;
    this.message.from = this.messageBirdStandar.payload;
  }

  public get getMessageSource() {
    return this.message;
  }
}
