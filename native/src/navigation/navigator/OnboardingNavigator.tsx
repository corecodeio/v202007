import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SendPhoneNumberVerificationCode from "../../feature/onboarding/screen/SendPhoneNumberVerificationCode";
import SendCodeVerification from "../../feature/onboarding/screen/SendCodeVerification";

export const OnboardingNavigator: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (    
      <Navigator initialRouteName="SendPhoneNumber">
        <Screen
          name="SendPhoneNumber"
          component={SendPhoneNumberVerificationCode}
          options={{ title: "Send Phone Number" }}
        />
        <Screen
          name="SendCodeValidation"
          component={SendCodeVerification}
          options={{ title: "Send Code Validation" }}
        />
      </Navigator>
  );
};

export default OnboardingNavigator;
