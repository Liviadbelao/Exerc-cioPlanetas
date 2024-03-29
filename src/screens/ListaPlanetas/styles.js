import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    date:{
        width:350,
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'black'
    },
    box:{
        alignItems:"center",
        marginTop:20,
        padding:10,
        borderRadius:10,
    }, 
     image: {
        flex: 1,
        justifyContent: 'center',
    
      },
    button:{
        backgroundColor:'#EE82EE',
        marginTop:10,
        padding:10,
        borderRadius:10,
        
    },
    image:{
        width:'130%',
        height:'50%',
        marginLeft:-10

    },
    text:{
        fontSize:30,
        color:'white',
       
    }
})
export default styles