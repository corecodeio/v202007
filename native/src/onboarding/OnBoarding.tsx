import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { ValidateNumber } from './ValidateNumber'



export const OnBoarding: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text style={{ color: 'blue', fontSize: 40 }}>¡Bienvenido!</Text>

            <Text style={{ color: 'black' }}>Ingresa tu numero de telefono de</Text>

            <Text style={{ color: 'black' }}> whatsapp for businnes</Text>
            <TextInput keyboardType="numeric"
                style={{ height: 40, borderColor: 'gray', borderWidth: 2, padding: 10, marginTop: 20, borderRadius: 10 }}

                placeholder={'###-###-####'}
            />

            <TouchableOpacity style={{ backgroundColor: "black", padding: 10, margin: 23, borderRadius: 10 }}
                onPress={() => navigation.navigate('ValidateNumber')}
            >
                <Text style={{ color: '#fff', alignContent: 'center' }}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default OnBoarding;