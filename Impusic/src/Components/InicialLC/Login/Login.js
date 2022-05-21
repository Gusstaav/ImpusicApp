import React from 'react';
import {TextInput, TouchableOpacity, Text, View} from 'react-native';
import { useState } from 'react';

import { StyleLogin } from '../stylesLogin-Cadastro/styleLogin';



export default function({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const entrar = () => (
        navigation.reset({
            index: 0,
            routes:  [{name: "Impusic"}]
        })
    );

    return(
        <View style={StyleLogin.body}>
            <View style={StyleLogin.container}>
                <Text style={StyleLogin.textLogin}>Login</Text>
                
            <TextInput  style={StyleLogin.input}
            placeholder="E-mail" 
            onChangeText={setEmail} />
            
            <TextInput style={StyleLogin.input}
            placeholder="Senha" 
            secureTextEntry onChangeText={setPassword} />   
                
                <TouchableOpacity style={StyleLogin.Botton}
                onPress={() => entrar()}>
                     <Text style={StyleLogin.textBotton}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={StyleLogin.BottonCadastro}
                onPress={() => navigation.navigate ('Cadastro')}>
                    <Text style={StyleLogin.textCadastro}>Fazer cadastro</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}