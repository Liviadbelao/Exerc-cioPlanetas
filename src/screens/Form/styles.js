import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(17,2,31,1)",
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    width: "90%",
    marginBottom: 20,
    flex: 1,
    margin: 'auto',
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 32,
    elevation: 10,
    padding: 10,
    borderRadius: 10
  },

  input: {
    height: 50,
    backgroundColor: 'transparent',
    padding: 10,
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: 'rgba(128,128,128,1)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(128,128,128,1)',
    width: '80%'
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
    marginTop: 100,
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
  }
});

export default styles;
