import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:'black'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    
      },
      box:{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    padding: 24, 
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 32,
    elevation: 10, 
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    zIndex: 10,
  
        padding:10,
        borderRadius:10,
      },
      text:{
        fontSize:18,
        color:'white'
      }
})
export default styles