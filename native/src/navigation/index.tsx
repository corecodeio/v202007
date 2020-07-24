import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { OnboardingStackParamList, RootStackParamList } from ".././../types";

import SendPhoneVerificationCode from "../feature/onboarding/screens/SendPhoneVerificationCode";
import CheckCode from "../feature/onboarding/screens/CheckCode";
import TabsNavigator from "./TopTabNavigator";

const TabsStack = createStackNavigator<RootStackParamList>();
const OnboardingStack = createStackNavigator<OnboardingStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{ title: "Maria APP" }}>
      <TabsStack.Screen name="Onboarding" component={OnboardingNavigator} />
      <TabsStack.Screen name="Root" component={TabsNavigator} />
    </TabsStack.Navigator>
  );
};

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        options={{ headerShown: false }}
        name="SendCode"
        component={SendPhoneVerificationCode}
      />
      <OnboardingStack.Screen
        options={{ headerShown: false }}
        name="CheckCode"
        component={CheckCode}
      />
    </OnboardingStack.Navigator>
  );
};

export default Navigation;
