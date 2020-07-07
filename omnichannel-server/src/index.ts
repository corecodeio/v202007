import { Request, Response } from "express";
import server from "./server";

server.post("/omnichannel", async (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(200);
});

server.get("/", async (req: Request, res: Response) => {
  console.log("GET");
});

server.listen("8001", () => {
  console.log("listening");
});
