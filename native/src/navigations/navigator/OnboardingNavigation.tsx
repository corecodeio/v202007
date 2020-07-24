import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SendPhoneNumberVerificationCode from '../../feature/onboarding/screen/SendPhoneNumberVerificationCode';
import { VerifyForNumber } from '../../feature/onboarding/screen/VerifyForNumber';

const Stack = createStackNavigator();

export const OnboardingNavigation: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="SendPhoneNumberVerificationCode">
        <Stack.Screen  name="SendPhoneNumberVerificationCode" component={ SendPhoneNumberVerificationCode } options={{title: "Send Code Verification"}}/>
       {/*  <Stack.Screen name="VerifyForNumber" component={ VerifyForNumber } /> */}
      </Stack.Navigator>
   
  )
};

export default OnboardingNavigation;