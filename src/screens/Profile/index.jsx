import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import listaPlanetas from '../../models/Planeta/Planetas'

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

  return (
    <View style={styles.container}>
      {data ? (
        <Text>Detalhes do usuário</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}

      <View style={styles.textBox}>
        <Text style={styles.text}>Detalhes do Planeta:</Text>
        <Text style={styles.text}>Nome: {data.nome}</Text>
        <Text style={styles.text}>Natureza: {data.natureza}</Text>
        <Text style={styles.text}>Data: {toString(data.data)}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={editUser}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteUser}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
