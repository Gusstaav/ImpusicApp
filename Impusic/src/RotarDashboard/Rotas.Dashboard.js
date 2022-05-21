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
        <RotasDashBoard.Navigator initialRouteName="Login"
         screenOptions={{
           headerShown: true,
           headerTitle: "Impusic",
           headerStyle:{
            backgroundColor: "#1C1C1C",
           },
           headerTintColor: "#938",
         
           tabBarStyle : { 
                backgroundColor : '#121212' , 
                borderTopColor : 'transparent' ,
            },
            tabBarLabelStyle:{
                color: 'blue',
                height: 0,
            },
           
            tabBarActiveTintColor : '#fff' ,
            tabBarInactiveTintColor: '#878787',
        }}>

            <RotasDashBoard.Screen name="Feed" component={Feed} 
            options={{
                tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <Entypo name="home" size={25} color={color} />
                )
            }}
            />
            <RotasDashBoard.Screen name="Explorar" component={Explorar} options={{
                 tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <Entypo name="news" size={25} color={color} />
                )
            }} 
            />
             
            <RotasDashBoard.Screen name="Postar" component={Postar} 
             options={{
                tabBarLabel:  '',
                tabBarActiveTintColor: 'black',
                tabBarIcon: ({color}) => (
                    <Feather name="plus" size={30}  color={color}   style={styles.icon} />
                ),
            }}
            />
            <RotasDashBoard.Screen name="Biblioteca" component={Biblioteca}  options={{
                 tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <Entypo name="book" size={25} color={color} />
                )
            }}
            />
            <RotasDashBoard.Screen name="Perfil" component={Perfil}  options={{
                 tabBarLabel:  '',
                tabBarIcon: ({color}) => (
                    <Entypo name="user" size={25} color={color} />
                )
            }}
            />

        </RotasDashBoard.Navigator>
    );
}



const styles = StyleSheet.create({
    icon:   {
        padding: 10,
        height: 50,
        width: 50,
        marginBottom: 15,
        borderRadius: 70,
        color: '#939',
        backgroundColor: '#FFFAFA',
    },
})