import { Request, Response } from "express";
import { IMessagePayload } from "../interfaces/IMessagePayload";

export class MessageSourceController {

    private message: IMessagePayload[] = [];

    // constructor(messagePayload: MessagePayload){
    //     this.message.push(messagePayload)
    // }

    messageSource(req: Request, res: Response) {


        return res.status(200);
    }
    

}
