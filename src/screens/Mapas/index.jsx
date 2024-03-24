import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

import Planetas from "../../models/Planetas";
import Planeta from "../../models/Planeta"; // Importe a classe Planeta
import { mapas } from "../../data/PlanetasLista";

const listaPlanetas = new Planetas();

export default function Mapas() {
  const [planetas, setPlanetas] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const planetasl = listaPlanetas.getAll();
      setPlanetas(planetasl);

      console.log(planetasl);
    }
  }, [isFocused]);

  return (
    <View>
      <Text>Mapas</Text>
      {/* Renderização */}
      <View>
      <View>
      {planetas.length > 0 ? (
  planetas.map((planeta) => (
    <View key={planeta.id}>
      <Text>{planeta.nome}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile", { data: planeta })}
      >
        <Text>Detalhes</Text>
      </TouchableOpacity>
    </View>
  ))
) : (
  <Text>Não há planetas cadastrados</Text>
)}

</View>

      </View>
    </View>
  );
}
