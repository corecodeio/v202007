import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  dependencies,
  DependencyContext
} from "./src/common/context/DependencyContext";
import OnboardingNavigator from "./src/navigation/navigator/OnboardingNavigator";

const client = new ApolloClient({
  uri: `https://1e3026c46da0.ngrok.io/graphql`,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer`
  }
});

/**
 * rxjs observer https://rxjs-dev.firebaseapp.com/guide/overview
 * behavior subject
 * useState
 * useEffect
 */

export const App: React.FC = () => {
  return (
    <DependencyContext.Provider value={dependencies}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <OnboardingNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </DependencyContext.Provider>
  );
};

export default App;
