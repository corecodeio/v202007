import React from "react";
import { Text, View, TextInput } from "react-native";
import { MainActionButton } from "../../../common/components/Button";

export const SendPhoneNumberVerificationCode: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>¡Bienvenido!</Text>
      <Text>Ingresa tu numero de teléfono vinculado a whatsapp business</Text>
      <TextInput />
      <MainActionButton
        isVisible
        onPress={() => navigation.navigate("SendCodeValidation")}
      >
        Continuar
      </MainActionButton>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;
