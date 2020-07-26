import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingStackParamList } from "./types/types";
import SendPhoneVerificationCode from "../feature/onboarding/screens/SendPhoneVerificationCode";
import CheckCode from "../feature/onboarding/screens/CheckCode";

const { Navigator, Screen } = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Navigator>
      <Screen name="SendCode" component={SendPhoneVerificationCode} />
      <Screen name="CheckCode" component={CheckCode} />
    </Navigator>
  );
};

export default OnboardingNavigator;
