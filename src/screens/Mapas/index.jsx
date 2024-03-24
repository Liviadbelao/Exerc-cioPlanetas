import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

import listaPlanetas from '../../models/Planeta/Planetas'


export default function Mapas() {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanetas, setAllPlanetas] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planetas = listaPlanetas.getAll()
      setAllPlanetas(planetas)
      console.log(allPlanetas)
    }
  }, [isFocused]);

  return (
    <View>
      <Text>Planetas</Text>
      <View>
        <View>
          {allPlanetas.length > 0 ? (
            <View>
              {allPlanetas.map((planeta) => (
                <View key={planeta.id}>
                  <Text>{planeta.nome}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profile", { data: planeta })}
                  >
                    <Text>Detalhes</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ) : (
            <Text>Não há planetas cadastrados</Text>
          )}

        </View>

      </View>
    </View>
  );
}
