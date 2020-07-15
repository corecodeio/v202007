import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceControllerInjectionKey } from "../message-source/InjectionKeys";
import { Request, Response } from "express";

const dependencies = new Dependencies();
const messageSourceController = dependencies.provide(
  MessageSourceControllerInjectionKey
);

describe("Testing MessageSourceController messageSource method", () => {
  test("The result of the action is transmitted in the body", () => {
    const req: Request = {
      body: {
        contactPhoneNumber: +7456123,
        payload: "Jest",
        currentTime: "new Date()",
      },
    };

    const res: Response = {};

    const status = messageSourceController.messageSource(res, res);

    //expect(req.status(200).toEqual(status.req.status(200)));
  });
});
