import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import listaPlanetas from '../../models/Planeta/Planetas'
const image = '../../../assets/download (4).jpg';
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
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      {data ? (
        <Text>Detalhes do usuário</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}

      <View style={{ backgroundColor: data.corSecundaria, padding:10, borderRadius:10, marginTop:10 }}>
        <Text style={styles.text}>Detalhes do Planeta:</Text>
        <Text style={styles.text}>Nome: {data.nome}</Text>
        <Text style={styles.text}>Natureza: {data.natureza}</Text>
        <Text style={styles.text}>Data: {toString(data.data)}</Text>
        <Text style={styles.text}>População: {data.populacao}</Text>
        <Text style={styles.text}>Galxia: {data.galaxia}</Text>
        <Text style={styles.text}>Sistema Solar: {data.sisSolar}</Text>
        <Text style={styles.text}>Coordenadas: {data.coordenadas}</Text>
        <Text style={styles.text}>Governante: {data.governante}</Text>
        <Text style={styles.text}>Titulo: {data.titulo}</Text>
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
    </ImageBackground>
  );
}
