import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SendPhoneNumberVerificationCode } from "../../feature/screens/SendPhoneNumberVerificationCode";

export const OnboardingNavigator: React.FC<{}> = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="OnboardingWelcome"
					component={SendPhoneNumberVerificationCode}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
