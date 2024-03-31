import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container2: {
        
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        
        marginBottom:0
    },

    img: {
        marginTop: 20,
        borderRadius: 100,
        margin: 'auto',
        borderColor: "#EE82EE",
        borderWidth: 3,

    },
    scroll:{
        flex: 1,
        backgroundColor: "black",
    },
    texto: {
        color: 'white',
        marginTop: 5,
        fontSize: 18,

    },
    container: {
        marginTop: 20,
        width: '80%',
        margin: 'auto',
        borderColor: "#EE82EE",
        borderWidth: 3,
        padding: 10,
        backgroundColor: "rgba(17,2,31,1)",
        borderRadius: 10
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