import { Dependencies } from "@corecodeio/libraries/di";
import { MessageSourceController } from "./feature/message-source/controller/MessageSourceController";
import { MessageSourceControllerInjectionKey } from "./feature/message-source/InjectionKeys";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./feature/graphql-server/queries/resolvers";
import typeDefs from "./feature/graphql-server/types/schema";

const dependencies = new Dependencies();
const messageSourceController = dependencies.provide<MessageSourceController>(
  MessageSourceControllerInjectionKey
);

const server: GraphQLServer = new GraphQLServer({ typeDefs, resolvers });

server.express.post(
  "/message-source",
  messageSourceController.messageSource.bind(messageSourceController)
);

export default server;
