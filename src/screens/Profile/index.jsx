import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Planetas from "../../models/Planetas";
const listaPlanetas = new Planetas()
export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
  
  const editUser = () => {
    navigation.navigate("Form", { planeta: data, edit: true });
  };

  const deleteUser = () => {
    listaPlanetas.remove(data.id);
    navigation.navigate("Mapas");
  };
console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
      <Text style={styles.text}>Detalhes do data:</Text>
      <Text style={styles.text}>Nome: {data.nome}</Text>
      <Text style={styles.text}>Natureza: {data.natureza}</Text>
      <Text style={styles.text}>Data: {data.data}</Text>
      </View>
      <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}  onPress={editUser}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={deleteUser}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
