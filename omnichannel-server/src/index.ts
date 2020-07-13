import { Dependencies } from "@corecodeio/libraries/di";
import { Request, Response } from "express";
import { MessageDigestInjectionKey } from "./feature/message-source/MessageDigestInjectionKey";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/MessageSourceControllerInjectionKey";
import server from "./server";

const dependencies = new Dependencies();

server.post("/message-source", async (req: Request, res: Response) => {
  const data = req.body;
  const messageDigest = dependencies.provide(MessageDigestInjectionKey);

  const MessageSourceController = dependencies.provide(
    MessageSourceControllerInjectionKey
  );

  // recibir la solicitud (payload de twilio o messagebird MessageSourceProvider)
  // estandarizar la solicitud (MessageSource{Digest|Parser} || MessageFormatter)
  // guardar la metadata del mensaje en una base de datos
  // notificar a maría (native client) que recibió un mensaje
  // PostRequestServer, MVC, MessageFormatter, MessageController
  // Dependency Injection

  return res.status(200);
});

server.listen("8001", () => {
  console.log("listening");
});
