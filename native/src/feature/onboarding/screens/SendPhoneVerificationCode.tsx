import React from "react";
import { View, Text, Button } from "react-native";

export const SendPhoneVerificationCode: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>SendPhoneVerificationCode</Text>
      <Button title="Next" onPress={() => navigation.navigate("CheckCode")} />
    </View>
  );
};

export default SendPhoneVerificationCode;
