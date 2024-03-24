import { StyleSheet } from "react-native";

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
       
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        
      },
    input:{
        padding:10,
      
        backgroundColor:'tranparent',
        color:"white",
       
      
    },
    cor:{
     height:100,
     width:100
    },
    button:{
backgroundColor:"pink",
padding:10
    },
    inputBox:{
backgroundColor:"purple",
padding:20,
borderRadius:20,
  width:'50%',
  height:'70%'
    },
    data:{
      padding:10,
      marginTop:10,
      backgroundColor:'#fff'
    }
})
export default styles;