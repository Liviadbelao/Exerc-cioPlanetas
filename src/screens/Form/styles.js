import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "rgba(17,2,31,1)",
    justifyContent: "center",
    alignItems: "center",
    },
   
  inputBox: {
    width: "100%",
    marginBottom: 20,
    marginLeft:'10%'
  },
  
  input: {
    height: 50,
    backgroundColor:'transparent',
   padding:10,
   fontSize:20,
    marginBottom: 10,
    color:'rgba(128,128,128,1)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(128,128,128,1)',
   width:'80%'
  },
  data: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "rgba(128,128,128,1)",
    padding: 10,
    marginBottom: 10,
  },
  cor: {
    width:"30%",
    height:'20%'
  },
  iconStyle:{
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    marginTop:10
  },
  box:{
    flexDirection: "row",
  }
});

export default styles;
