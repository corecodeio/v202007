import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  dependencies,
  DependencyContext,
} from "./src/common/context/DependencyContext";
import OnboardingNavigator from "./src/navigation/navigator/OnboardingNavigator";
import { AuthTokenInjectionKey } from "./src/util/auth/InjectionKey";

/**
 * rxjs observer https://rxjs-dev.firebaseapp.com/guide/overview
 * behavior subject
 * useState
 * useEffect
 */

export const App: React.FC = () => {
  const authToken = dependencies.provide(AuthTokenInjectionKey);

  const token = authToken.useAuthToken();

  const getApolloClient = () => {
    const options = {
      uri: `http://49f093574f64.ngrok.io/graphql`,
      cache: new InMemoryCache(),
    };

    if (Boolean(token)) {
      options["headers"] = { authorization: `Bearer ${token}` };
    }

    return new ApolloClient(options);
  };

  return (
    <DependencyContext.Provider value={dependencies}>
      <ApolloProvider client={getApolloClient()}>
        <NavigationContainer>
          <OnboardingNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </DependencyContext.Provider>
  );
};

export default App;
