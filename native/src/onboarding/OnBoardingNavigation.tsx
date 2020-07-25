import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { OnBoarding } from '../onboarding/OnBoarding'
import ValidateNumber from "./ValidateNumber";

const Stack = createStackNavigator();

export const OnboardingNavigation: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="OnBoarding">
            <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ title: "Register" }} />
            <Stack.Screen name="ValidateNumber" component={ValidateNumber} options={{ title: "Validate" }} />
        </Stack.Navigator>

    )
};

export default OnboardingNavigation