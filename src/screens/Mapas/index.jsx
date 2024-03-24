import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

import listaPlanetas from '../../models/Planeta/Planetas'

import styles from "./styles";
import Title from '../../components/Title'
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
    <View style={styles.container}>
      <Title title={"Planetas"}/>
      <View>
        <View>
          {allPlanetas.length > 0 ? (
            <View>
              {allPlanetas.map((planeta) => (
                <View style={styles.box} key={planeta.id}>
                  <Text style={styles.text}>{planeta.nome}</Text>
                  <TouchableOpacity
                  style={styles.button}
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
