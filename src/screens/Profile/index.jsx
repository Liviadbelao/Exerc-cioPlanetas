import { useNavigation } from "@react-navigation/native";
import React from "react";
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
    <View>
      <Text>Detalhes do data:</Text>
      <Text>Nome: {data.nome}</Text>
      <Text>Natureza: {data.natureza}</Text>
      <Text>Data: {data.data}</Text>
      <View >
          <TouchableOpacity  onPress={editUser}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteUser}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}
