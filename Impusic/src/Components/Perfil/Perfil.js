import { View, Text } from "react-native";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { estiloPerfil } from "./estiloPerfil";

import PerfilTabs from "./RotasPerfil.js/RotasPerfil";

export default function Perfil(){
    return(
        <>
        
        <View style={estiloPerfil.container}>
        
           <Image 
           source={require('../../assets/perfil.jpg')}
           style={estiloPerfil.fotoPerfil}
           />

            <Text style={estiloPerfil.textoPerfil}>@gustavo</Text>
            
            
        </View>
        <PerfilTabs />
        </>
    );
}

