import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingStackParamList } from "./types/types";
import SendPhoneVerificationCode from "../feature/onboarding/screens/SendPhoneVerificationCode";
import CheckCode from "../feature/onboarding/screens/CheckCode";

const OnboardingStack = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name="SendCode"
        component={SendPhoneVerificationCode}
      />
      <OnboardingStack.Screen name="CheckCode" component={CheckCode} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
