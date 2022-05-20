import React from "react";
import { StyleSheet } from "react-native";

export const estiloPostar = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#212121',
    },
    Botao: {
        padding: 10,
        margin: 10,
        backgroundColor: 'transparent',
        width: 100,
    }, 
    textoBotao: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 3,
    },
    iconStyle: {
        color: '#fff',
        padding: 10,
        border: 'solid',
        borderColor: '#fff',
        borderRadius: 10,
    },
})