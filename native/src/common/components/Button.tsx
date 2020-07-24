import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const MainActionButton: React.FC<TouchableOpacityProps> = ({children, ...props}) => {

    return (
        <TouchableOpacity {...props} style={{ backgroundColor: "black", padding: 21, marginTop: 21 }}>
        <Text style={{ color: "white"}}>{children}</Text>
        </TouchableOpacity>
    )
}