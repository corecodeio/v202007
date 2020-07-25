
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { OnboardingNavigation } from './src/onboarding/OnBoardingNavigation'


export const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigation></OnboardingNavigation>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
