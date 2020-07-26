import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SendPhoneVerificationCode: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>SendPhoneVerificationCode</Text>
      <Button title="Next" onPress={() => navigation.navigate("CheckCode")} />
    </View>
  );
};

export default SendPhoneVerificationCode;
