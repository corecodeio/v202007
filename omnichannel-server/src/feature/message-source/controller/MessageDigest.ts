import { MessageBirdPayload } from "../interface/MessageBirdPayload";
import { MessagePayload } from "../interface/MessagePayload";

export class MessageDigest {
  private data: any;
  private messageBirdStandar: MessageBirdPayload = {
    contactPhoneNumber: "",
    currentTime: new Date(),
    payload: "",
  };
  private message: MessagePayload = {
    message: "",
    currentTime: new Date(),
    from: "",
  };

  constructor() {}

  public set setData(data) {
    this.message.message = this.messageBirdStandar.contactPhoneNumber;
    this.message.currentTime = this.messageBirdStandar.currentTime;
    this.message.from = this.messageBirdStandar.payload;
  }

  public get getData() {
    return this.message;
  }
}
