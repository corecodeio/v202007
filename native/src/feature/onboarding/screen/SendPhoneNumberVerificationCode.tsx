import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { MainActionButton } from "../../../common/components/Button"
import { VerifyForNumber } from './VerifyForNumber';

const verification = VerifyForNumber

export const SendPhoneNumberVerificationCode: React.FC<{ navigation: any}> = ({ navigation }) => {
    return <View>
        <Text>!Bienvenido</Text>
        <Text>Ingresa tu telefono de whatsapp business</Text>
        <TextInput keyboardType="numeric" style={{height: 40, borderColor: 'black', borderWidth: 1, margin: 5, padding: 5}}></TextInput>
        <MainActionButton
            onPress={() => Alert.alert("Tu número de telefono esta registrado..")}
        >
            Enviar
        </MainActionButton>
    </View>;
}

export default SendPhoneNumberVerificationCode;
