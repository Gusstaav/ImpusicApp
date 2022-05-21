import { StyleSheet } from "react-native";


export const StyleLogin = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
    border: 'solid',
    borderWidth: 2,
    borderColor: "#939",
    alignItems: 'center',
    padding: 10,
    height: 280,
    width: 270,
    },
    textLogin:{
        marginTop: 10,
        fontSize: 20,
        color: '#fff',
    },
    input:{
        marginTop: 20,
        margin: 3,
        padding: 5,
        width: 200,
        backgroundColor: '#fff',
    },
    Botton:{
        marginTop: 14,
        height: 45,
        width: 100,
        padding: 5,
        alignItems: 'center',
        backgroundColor: "#936",
    },
    textBotton:{
        padding: 5,
        fontSize: 20,
        color: '#fff',
    },
    textCadastro:{
        padding: 4,
        marginTop: 10,
        fontStyle: 'italic',
        color: 'purple',
        
    },
})