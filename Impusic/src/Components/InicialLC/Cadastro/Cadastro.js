import React  from "react";
import { useState } from "react";
import { Alert } from "react-native";
import {View, TouchableOpacity, TextInput, Text} from "react-native";
import { styleCadastro } from "../stylesLogin-Cadastro/styleCadastro";

export default function Cadastro(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  function handleNewAccount() {

}
    return(
    <View style={styleCadastro.body}>
        <View style={styleCadastro.container}>
            <Text style={styleCadastro.textCadastrar}>Cadastro</Text>
            
            <TextInput  style={styleCadastro.input}
            placeholder="E-mail" 
            onChangeText={setEmail} />
            <TextInput style={styleCadastro.input}
            placeholder="Senha" 
            secureTextEntry onChangeText={setPassword} /> 

            <TouchableOpacity style={styleCadastro.botton}
            onPress={handleNewAccount}
            >
                <Text style={styleCadastro.textBotton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}