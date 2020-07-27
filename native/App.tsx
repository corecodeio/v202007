import React from "react";
import { StyleSheet } from "react-native";
import { OnboardingNavigator } from "./src/navigation/navigator/OnboardingNavigator";

const App: React.FC<{}> = () => {
	return <OnboardingNavigator />;
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
