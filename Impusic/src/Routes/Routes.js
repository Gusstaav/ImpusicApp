import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import logo from "../assets/download.png";
import Biblioteca from "../Components/Biblioteca/Biblioteca";
import Feed from "../Components/Home/Feed";
import Perfil from "../Components/Perfil/Perfil";
import Postar from "../Components/Postar/Postar";
import Explorar from "../Components/Explorar/Explorar";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerTitle: "Impusic",
            headerTitleAlign: 'center',
            headerTitleStyle:{
                color: '#fff',
            },
            headerStyle: {
            backgroundColor: '#4a4a4a',
            borderBottomColor: 'transparent',
            },
            tabBarStyle: { 
                backgroundColor: '#121212', 
                borderTopColor: 'transparent',
            },
           
            tabBarLabelStyle:{
                fontFamily: 'Arial',
                fontSize: 12,
            },
            tabBarActiveTintColor: '#939',
          }}
        >

            <Tab.Screen name="Feed" component={Feed} />

            <Tab.Screen name="Explorar" component={Explorar} />

            <Tab.Screen name="Postar" component={Postar} />

            <Tab.Screen name="Biblioteca" component={Biblioteca} />

            <Tab.Screen name="Perfil" component={Perfil} />

        </Tab.Navigator>
    );
}