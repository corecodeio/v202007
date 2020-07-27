import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { OnboardingCompleted } from "../../feature/screens/OnboardingCompleted";
import { OnboardingPhoneVerification } from "../../feature/screens/OnboardingPhoneVerification";
import { OnboardingStoreConnection } from "../../feature/screens/OnboardingStoreConnection";
import { OnboardingWelcome } from "../../feature/screens/OnboardingWelcome";

export const OnboardingNavigator: React.FC<{}> = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="OnboardingWelcome" component={OnboardingWelcome} />
				<Stack.Screen
					name="OnboardingPhoneVerification"
					component={OnboardingPhoneVerification}
				/>
				<Stack.Screen
					name="OnboardingStoreConnection"
					component={OnboardingStoreConnection}
				/>
				<Stack.Screen
					name="OnboardingCompleted"
					component={OnboardingCompleted}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
