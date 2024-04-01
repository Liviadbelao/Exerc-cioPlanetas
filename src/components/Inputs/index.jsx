import { View, TextInput } from "react-native";
 import styles from  './styles'
const Input = ({ ph, oc, valor, kt}) => {
  return(
<View style={styles.container}>
  <TextInput
   style={styles.input}
   placeholder={ph}
   onChangeText={oc}
   value={valor}
   keyboardType={kt}
   placeholderTextColor={'#D3D3D3'}/>
</View>
    )
}
 

export default Input;