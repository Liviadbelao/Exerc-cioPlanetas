import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import listaPlanetas from '../../models/Planeta/Planetas'

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlaneta = () => {
    navigation.navigate("Form", { planeta: data, edit: true });
  };


  const deletePlaneta = () => {
    listaPlanetas.remove(data.id);
    navigation.navigate("ListaPlanetas");
  };

  return (
  
    <View style={styles.container}>
      {data ? (
        <Text>Detalhes do Planeta</Text>
      ) : (
        <Text>Selecione um Planeta para exibir seus detalhes</Text>
      )}

      <View style={{ backgroundColor: data.corSecundaria, padding:10, borderRadius:10, marginTop:10 }}>
        <Text style={styles.text}>Detalhes do Planeta:</Text>
        <Text style={styles.text}>Nome: {data.nome}</Text>
        <Text style={styles.text}>Natureza: {data.natureza}</Text>
        <Text style={styles.text}>Data: {new Date(data.data).toLocaleDateString()}</Text>
        <Text style={styles.text}>População: {data.populacao}</Text>
        <Text style={styles.text}>Galxia: {data.galaxia}</Text>
        <Text style={styles.text}>Sistema Solar: {data.sisSolar}</Text>
        <Text style={styles.text}>Coordenadas: {data.coordenadas}</Text>
        <Text style={styles.text}>Governante: {data.governante}</Text>
        <Text style={styles.text}>Titulo: {data.titulo}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={editPlaneta}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deletePlaneta}>
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}
