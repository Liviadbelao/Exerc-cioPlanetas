import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"
    },
    img: {
        marginTop: 20,
        borderRadius: '100%',
        
        borderColor: "#EE82EE",
        borderWidth: 3,
    },
    texto: {
        color: 'white',
        marginTop: 5,
        fontSize: 18,

    },
    container: {
        marginTop: 20,
        width: '80%',
        
        padding: 10,
        backgroundColor: "purple",
        borderRadius:10
    },
    texto3: {

        width: '40%',
        marginTop: 10,
        marginLeft: 110,
        padding: 2,
        borderRadius: 8,

    },
    texto2: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }

});
export default styles;