import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:'#E6E6FA'
    },
    textBox:{
      
        padding:10,
        borderRadius: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    
      },
    text:{
        fontSize:20,
    },
    buttons:{
      
        padding:2,
        gap:10,
        flexDirection:"row"
        
    },
    button:{
        backgroundColor:"#EE82EE",
        padding: 10,
        borderRadius: 10,
        marginTop: 5
    }
})
export default styles