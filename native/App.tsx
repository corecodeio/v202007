import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Stack = createStackNavigator();

function OnboardingCompleted() {
	return (
		<View>
			<Text>Great! Now try to connect. Enjoy!</Text>
		</View>
	);
}

function OnboardingStoreConnection() {
	return (
		<View>
			<Text>Now connect to your store</Text>
			<TextInput></TextInput>
		</View>
	);
}

function OnboardingPhoneVerification() {
	return (
		<View>
			<Text>Insert verification code</Text>
			<TextInput></TextInput>
		</View>
	);
}

function OnboardingWelcome() {
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
}

export default function App() {
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
