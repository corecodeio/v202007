import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CheckCode: React.FC<{}> = () => {
  const navigation = useNavigation();

  return (
    <>
      <View>
        <Text>CheckCode</Text>
        <Button title={`Next`} onPress={() => navigation.navigate("Root")} />
      </View>
    </>
  );
};

export default CheckCode;
