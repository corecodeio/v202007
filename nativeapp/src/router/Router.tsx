import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SendPhoneNumberVerificationCode from "../feature/onboarding/screen/SendPhoneNumberVerificationCode";
import SendCodeVerification from "../feature/onboarding/screen/SendCodeVerification";

export const Router: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SendPhoneNumber">
        <Stack.Screen
          name="SendPhoneNumber"
          component={SendPhoneNumberVerificationCode}
          options={{ title: "Send Phone Number" }}
        />
        <Stack.Screen
          name="SendCodeValidation"
          component={SendCodeVerification}
          options={{ title: "Send Code Validation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
