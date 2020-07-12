import { MessageBirdPayload } from "./interfaces/MessageBirdPayload";
import { MessageTwilioPayload } from "./interfaces/MessageTwilioPayload";
import { MessagePayload } from "./interfaces/MessagePayload";

export const MessageParser = body => {
    const messageBody = <MessageBirdPayload|MessageTwilioPayload>body;

    if(isBird(<MessageBirdPayload>messageBody)) {

        // convert MessageBirdPayload to MessagePayload
        const MessageBody:MessagePayload = {
            from: (<MessageBirdPayload>messageBody).contactPhoneNumber,
            message: (<MessageBirdPayload>messageBody).payload,
            currentTime: (<MessageBirdPayload>messageBody).currentTime,
            messageProvider: 'bidr'
        };

        return MessageBody;
    } else if( isTwilio(<MessageTwilioPayload>messageBody) ) {

        // convert MessageTwilioPayload to MessagePayload
        const MessageBody:MessagePayload = {
            from: (<MessageTwilioPayload>messageBody).Number,
            message: (<MessageTwilioPayload>messageBody).Message,
            currentTime: (<MessageTwilioPayload>messageBody).Time,
            messageProvider: 'twilio'
        };
                
        return MessageBody;
    }
    
}

export const ResponseMessage = (message:MessagePayload) => {

    if(message.messageProvider === 'bidr'){
        const MessageBody:MessageBirdPayload = {
            contactPhoneNumber: message.from,
            payload:message.message,
            currentTime: message.currentTime,
        };

        return MessageBody;
    } else if(message.messageProvider === 'twilio'){
        const MessageBody:MessageTwilioPayload = {
            Number: message.from,
            Message:message.message,
            Time: message.currentTime,
        };

        return MessageBody;
    }

}

const isBird = (message:MessageBirdPayload) => {
    return message.contactPhoneNumber !== undefined;
}

const isTwilio = (message: MessageTwilioPayload) => {
    return message.Number !== undefined;
}