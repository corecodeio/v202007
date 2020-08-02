import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const Client = new ApolloClient({
  link: new HttpLink({ uri: "http://9c160c015cee.ngrok.io/graphql" }),
  cache: new InMemoryCache(),
});
