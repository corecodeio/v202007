export interface IMessagePayload {
  uid?: string;
  message: string;
  currentTime: Date;
  from: string;
  messageProvider?: string;
}
