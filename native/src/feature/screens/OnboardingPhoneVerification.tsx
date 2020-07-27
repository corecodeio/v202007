import React from "react";
import { Text, TextInput, View } from "react-native";

export const OnboardingPhoneVerification: React.FC<{}> = () => {
	return (
		<View>
			<Text>Insert verification code</Text>
			<TextInput></TextInput>
		</View>
	);
};
