import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { estiloPostar } from "./estiloPostar";
import {Entypo, Feather} from '@expo/vector-icons';

export default function Postar(){
    return(

        <View style={estiloPostar.Container}>
                
            <TouchableOpacity style={estiloPostar.Botao}>
            <Feather name="share" style={estiloPostar.iconStyle} >
                <Text style={estiloPostar.textoBotao}>Postar</Text>
            </Feather>
            </TouchableOpacity>
            
        </View>
    );
}