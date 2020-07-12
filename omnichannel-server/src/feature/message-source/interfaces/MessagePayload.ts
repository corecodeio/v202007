export interface MessagePayload {
  uid?: string;
  message: string;
  currentTime: Date;
  from: string;
  messageProvider: string;
}
