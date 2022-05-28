import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RotasTab from "./RotarDashboard/Rotas.Dashboard";

import Feed from "./Components/Home/Feed";
import Explorar from './Components/Explorar/Explorar';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Postar from './Components/Postar/Postar';
import Perfil from './Components/Perfil/Perfil';
import Historico from './Components/Biblioteca/Historico/Historico';
import Login from "./Components/InicialLC/Login/Login";
import Cadastro from "./Components/InicialLC/Cadastro/Cadastro";

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator 
         screenOptions={{

            headerTitle : "Impusic" ,

            headerTitleAlign : 'left' ,

            headerTintColor: '#936',

            headerStyle : {
            backgroundColor : '#212121' ,
            height: 70,
            } ,
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Impusic" component={RotasTab} />
            <Stack.Screen name="Home" component={Feed} />
            <Stack.Screen name="Explorar" component={Explorar} />
            <Stack.Screen name="Biblioteca" component={Biblioteca} />
            <Stack.Screen name="Postar" component={Postar} />
            <Stack.Screen name="Perfil" component={Perfil} />            
            <Stack.Screen name="Historico" component={Historico} />
        
        </Stack.Navigator>
    );
}