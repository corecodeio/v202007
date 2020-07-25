import React from "react";
import { Text, View, TextInput } from "react-native";
import { MainActionButton } from "../../../common/components/Button";

export const SendCodeVerification: React.FC = () => {
  return (
    <View>
      <Text>Ventana de codigo</Text>
      <Text>Ingresa el código que se envio a su smartphone </Text>
      <TextInput />
      <MainActionButton isVisible>Continuar</MainActionButton>
    </View>
  );
};

export default SendCodeVerification;
