import { Request, Response } from "express";
import { IMessagePayload } from "../interfaces/IMessagePayload";
import { MessageParser } from "../util/MessageParser";

export class MessageSourceController {
  private messageSourceDigest: MessageParser;

  constructor(messageSourceDigest: MessageParser) {
    this.messageSourceDigest = messageSourceDigest;
  }

  messageSource(req: Request, res: Response) {
    // recibir la solicitud (payload de twilio o messagebird MessageSourceProvider)

    // estandarizar la solicitud (MessageSource{Digest|Parser} || MessageFormatter)
    const payload: IMessagePayload = this.messageSourceDigest.parseRequestBody(
      req.body
    );

    payload.currentTime;
    payload.message;
    payload.from;

    // TDD - Test Driven Development
    // Pruebas unitarias Unit tests - jest, mocha, chai
    // Prueba integrales Integration Tests - jest, mocha, chai
    // E2E End to end cypress.io

    // guardar la metadata del mensaje en una base de datos ??

    // notificar a maría (native client) que recibió un mensaje

    // PostRequestServer, MVC, MessageFormatter, MessageController
    // Dependency Injection

    return res.status(200);
  }
}
