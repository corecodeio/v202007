import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { OnboardingCompleted } from "../native/src/feature/screens/OnboardingCompleted";

const Stack = createStackNavigator();

const OnboardingStoreConnection: React.FC<{}> = () => {
	return (
		<View>
			<Text>Now connect to your store</Text>
			<TextInput></TextInput>
		</View>
	);
};

const OnboardingPhoneVerification: React.FC<{}> = () => {
	return (
		<View>
			<Text>Insert verification code</Text>
			<TextInput></TextInput>
		</View>
	);
};

const OnboardingWelcome: React.FC<{}> = () => {
	return (
		<View>
			<Text>Welcome! Input your whatsapp number</Text>
			<TextInput></TextInput>
			{/*<Button
				title="Get Started"
				onPress={() => navigation.navigate("OnboardingPhoneVerification")}
      />*/}
		</View>
	);
};

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
