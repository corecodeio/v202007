import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { OnboardingCompleted } from "./src/feature/screens/OnboardingCompleted";
import { OnboardingPhoneVerification } from "./src/feature/screens/OnboardingPhoneVerification";
import { OnboardingStoreConnection } from "./src/feature/screens/OnboardingStoreConnection";
import { OnboardingWelcome } from "./src/feature/screens/OnboardingWelcome";

const Stack = createStackNavigator();

const App: React.FC<{}> = () => {
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

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
