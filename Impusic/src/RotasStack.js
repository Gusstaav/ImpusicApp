import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RotasTab from "./RotarDashboard/Rotas.Dashboard";

import Explorar from './Components/Explorar/Explorar';
import Biblioteca from './Components/Biblioteca/Biblioteca';
import Postar from './Components/Postar/Postar';
import Perfil from './Components/Perfil/Perfil';
import Historico from './Components/Biblioteca/Historico/Historico';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerTitle : "Impusic" ,
            headerTitleAlign : 'center' ,
            headerTintColor: '#939',
            headerTitleStyle : {
                fontFamily: 'Arial',
            } ,
            headerStyle : {
            backgroundColor : '#4a4a4a' ,
            borderBottomColor : 'transparent' ,
            } ,
        }}>
            <Stack.Screen name="Impusic" component={RotasTab} />
            <Stack.Screen name="Explorar" component={Explorar} />
            <Stack.Screen name="Biblioteca" component={Biblioteca} />
            <Stack.Screen name="Postar" component={Postar} />
            <Stack.Screen name="Perfil" component={Perfil} />            
            <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
    );
}