import { StyleSheet } from "react-native";


export const styleCadastro = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#D3D3D3",
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
    border: 'solid',
    borderWidth: 2,
    borderColor: "#938",
    alignItems: 'center',
    backgroundColor: "#696969",
    padding: 10,
    height: 320,
    width: 270,
    shadowColor: '#000',
    shadowOffset: {
	width: 1,
	height: 2,
    },
    shadowOpacity: 0.1,
    elevation: 5,
    },
    textCadastrar:{
        marginTop: 10,
        fontSize: 20,
        color: '#fff',
    },
    input:{
        marginTop: 20,
        margin: 3,
        padding: 5,
        width: 200,
        borderColor: "#396",
        shadowColor: "#396",
        backgroundColor: '#fff',
    },
    botton:{
        marginTop: 10,
        padding: 5,
        height: 50,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#938',
    },
    textBotton:{
        margin: 5,
        padding: 5,
        color: "#fff",
    },
})