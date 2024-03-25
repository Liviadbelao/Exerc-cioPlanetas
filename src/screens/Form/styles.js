import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222222",},
   
  inputBox: {
    width: "80%",
    marginBottom: 20,
    
  },
  
  input: {
    height: 40,
    backgroundColor:'#4a5c6a',
   padding:10,
   borderRadius:80,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  data: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
  cor: {
    width:"30%",
    height:'20%'
  },
});

export default styles;
