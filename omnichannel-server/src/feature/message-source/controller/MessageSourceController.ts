import { MessagePayload } from "../interfaces/MessagePayload";

export class MessageSourceController {

    private message: MessagePayload[] = [];

    constructor(messagePayload: MessagePayload){
        this.message.push(messagePayload)
    }

    public getMessages(){
        return this.message
    }
    

}
