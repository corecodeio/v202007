import server from "./server";

server.start(
  { port: 8001, endpoint: "/graphql", playground: "/playground" },
  () => console.log("Listening")
);
