import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(17,2,31,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  boxColor:{
     flexDirection:'row',
     width: "100%",
    height: '90%',
    marginLeft:60
  },

  inputBox: {
    width: "100%",
    marginBottom: 20,
    flex: 1,
    margin: 'auto',
   
    padding: 10,
    borderRadius: 10
  },

  
  erro: {
    color: "red"
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    color: 'white',
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  data: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,

    width: '90%'
  },
  button: {
    backgroundColor: "rgba(128,128,128,1)",
    padding: 10,
    marginBottom: 110,
  },
  cor: {
    width: "30%",
    height: '20%'
  },
  iconStyle: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    marginTop: 10
  },
  box: {
    flexDirection: "row",
  },

});

export default styles;
