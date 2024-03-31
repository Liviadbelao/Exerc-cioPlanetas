import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },

  img:{
   width:'90%',
   marginBottom:30,
   
  },

  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    padding: 24,
    shadowColor: 'rgba(31, 38, 135, 0.37)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 32,
    elevation: 10,
    borderColor: 'purple',
    borderWidth: 3,
    zIndex: 10,
    marginTop: -20,
   margin:'auto',
    width: '85%',
    padding: 10,
    borderRadius: 10,
  },
  titulo: {
    width: '100%',
    marginTop: 10,
    height: '20%'
  },
  text: {
    fontSize: 18,
    color: 'white'
  }
})
export default styles