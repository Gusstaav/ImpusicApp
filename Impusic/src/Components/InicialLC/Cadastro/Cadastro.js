import React from "react";
import {View, TouchableOpacity, TextInput, Text} from "react-native";
import { styleCadastro } from "../stylesLogin-Cadastro/styleCadastro";

export default function Cadastro(){
    return(
    <View style={styleCadastro.body}>
        <View style={styleCadastro.container}>
            <Text style={styleCadastro.textCadastrar}>Cadastro</Text>
            <TextInput 
            style={styleCadastro.input}
            value={String}
            placeholder="Digite seu Nome de usuario"
            />
            <TextInput 
            style={styleCadastro.input}
            value={String}
            placeholder="Digite seu email"
            />
            <TextInput 
            style={styleCadastro.input}
            value={String}
            placeholder="Digite sua senha"
            />

            <TouchableOpacity style={styleCadastro.botton}>
                <Text style={styleCadastro.textBotton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}