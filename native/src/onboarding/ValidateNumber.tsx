import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";



export const ValidateNumber: React.FC<{ navigation: any }> = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text style={{ color: 'blue', fontSize: 40 }}>Verifica tu Numero</Text>

            <Text style={{ color: 'black' }}>envianos un SMS</Text>


            <TextInput keyboardType="numeric"
                style={{ height: 40, borderColor: 'gray', borderWidth: 2, padding: 10, marginTop: 20, borderRadius: 10 }}

                value={'###-###-####'}
            />

            <TouchableOpacity style={{ backgroundColor: "black", padding: 10, margin: 23, borderRadius: 10 }}>
                <Text style={{ color: '#fff', alignContent: 'center' }}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ValidateNumber;