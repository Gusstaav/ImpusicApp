import React from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo, Feather} from '@expo/vector-icons';

import Feed from '../Components/Home/Feed';
import Explorar from '../Components/Explorar/Explorar';
import Postar from '../Components/Postar/Postar';
import Biblioteca from '../Components/Biblioteca/Biblioteca';
import Perfil from '../Components/Perfil/Perfil';


const RotasDashBoard = createBottomTabNavigator();

export default function RotasTab(){
    return(
        <RotasDashBoard.Navigator initialRouteName="Feed"
         screenOptions={{
           headerShown: false,
         
           tabBarStyle : { 
                backgroundColor : '#121212' , 
                borderTopColor : 'transparent' ,
            },
           
            tabBarLabelStyle : {
                fontFamily : 'Arial' ,
                fontSize : 12 ,
            } ,
            tabBarActiveTintColor : '#939' ,
            tabBarInactiveTintColor: '#878787',
        }}>

            <RotasDashBoard.Screen name="Feed" component={Feed} 
            options={{
                tabBarLabel:  '',
                tabBarIcon: ({size, color}) => (
                    <Feather name="home" size={size} color={color} />
                )
            }}
            />
            <RotasDashBoard.Screen name="Explorar" component={Explorar} options={{
                 tabBarLabel:  '',
                tabBarIcon: ({size, color}) => (
                    <Feather name="navigation" size={size} color={color} />
                )
            }} 
            />
            <RotasDashBoard.Screen name="Postar" component={Postar} 
             options={{
                tabBarLabel:  '',
                tabBarActiveTintColor: 'black',
                tabBarIcon: ({size, color}) => (
                    <Feather name="plus" size={20}  color={color}   style={styles.icon} />
                ),
            }}
            />
            <RotasDashBoard.Screen name="Biblioteca" component={Biblioteca}  options={{
                 tabBarLabel:  '',
                tabBarIcon: ({size, color}) => (
                    <Entypo name="book" size={size} color={color} />
                )
            }}
            />
            <RotasDashBoard.Screen name="Perfil" component={Perfil}  options={{
                 tabBarLabel:  '',
                tabBarIcon: ({size, color}) => (
                    <Feather name="user" size={size} color={color} />
                )
            }}
            />

        </RotasDashBoard.Navigator>
    );
}

const styles = StyleSheet.create({
    icon:   {
        padding: 15,
        marginBottom: 25,
        borderRadius: 40,
        backgroundColor: '#C0C0C0',
    },
})