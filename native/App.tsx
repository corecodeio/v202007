import React from "react";
import OnboardingNavigator from "./src/navigation/navigator/OnboardingNavigator";
import { Client } from "./src/feature/graphql/client";
import { ApolloProvider } from "@apollo/client";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import {
  dependencies,
  DependencyContext,
} from "./src/common/context/DependencyContext";

export const App: React.FC<{}> = () => {
  return (
    <ApolloProvider client={Client}>
      <DependencyContext.Provider value={dependencies}>
        <NavigationContainer>
          <OnboardingNavigator />
        </NavigationContainer>
      </DependencyContext.Provider>
    </ApolloProvider>
  );
};

registerRootComponent(App);

export default App;
