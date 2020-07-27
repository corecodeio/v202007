import React from "react";
import { Text, TextInput, View } from "react-native";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => {
	return (
		<View>
			<Text>Welcome! Input your whatsapp number</Text>
			<TextInput></TextInput>
		</View>
	);
};
