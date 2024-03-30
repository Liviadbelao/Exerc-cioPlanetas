import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import listaPlanetas from '../../models/Planeta/Planetas'

export default function Detalhes({ route }) {
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

      <View style={{ borderColor: data.corSecundaria,
         padding:10,
          borderRadius:10,
           marginTop:10,
            borderWidth:3,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 16,
            padding: 24,
            shadowColor: 'rgba(31, 38, 135, 0.37)',
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 1,
            shadowRadius: 32,
            elevation: 10,}}>
              <View>
        <Text style={styles.text}>Detalhes do Planeta:</Text>
        <View style={{flexDirection:'row',height:'20%'}}>
        <View style={{ width:'40%', borderRadius:100, backgroundColor: data.corSecundaria, marginTop:3,}}></View>
        <View style={{ width:'40%', borderRadius:100, backgroundColor: data.corPrimaria}}></View>
        </View>
        <Text style={styles.text}>Nome: {data.nome}</Text>
        <Text style={styles.text}>Recursos Naturais: {data.natureza}</Text>
        <Text style={styles.text}>Data de Conquista: {new Date(data.data).toLocaleDateString()}</Text>
        <Text style={styles.text}>População: {data.populacao}</Text>
        <Text style={styles.text}>População humana: {data.humanos}</Text>
        <Text style={styles.text}>Galxia: {data.galaxia}</Text>
        <Text style={styles.text}>Sistema Solar: {data.sisSolar}</Text>
        <Text style={styles.text}>Coordenadas: {data.coordenadas}</Text>
        <Text style={styles.text}>Governante: {data.governante}</Text>
        <Text style={styles.text}>Titulo: {data.titulo}</Text>
        </View>
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
