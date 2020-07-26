import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigator from "./OnboardingNavigator";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
