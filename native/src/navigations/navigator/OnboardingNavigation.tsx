import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SendPhoneNumberVerificationCode from '../../feature/onboarding/screen/SendPhoneNumberVerificationCode';

const Stack = createStackNavigator();

export const OnboardingNavigation: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="SendPhoneNumberVerificationCode">
        <Stack.Screen  name="SendPhoneNumberVerificationCode" component={ SendPhoneNumberVerificationCode } options={{title: "Send Code Verification"}}/>
      </Stack.Navigator>
   
  )
};

export default OnboardingNavigation;