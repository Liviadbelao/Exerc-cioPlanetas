import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from "react";

import listaPlanetas from '../../models/Planeta/Planetas'

import styles from "./styles";
import Title from '../../components/Title'
const image = '../../../assets/download (4).jpg';
export default function ListaPlanetas() {

  const navigation = useNavigation();

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
              <View style={{ borderColor: planeta.corPrimaria,
                padding:10,
             
                 
                  marginTop:10,
                   borderWidth:3,
                   backgroundColor: 'rgba(255, 255, 255, 0.3)',
                   borderRadius: 16,
                   padding: 24,
                   shadowColor: 'rgba(31, 38, 135, 0.37)',
                   shadowOffset: { width: 0, height: 8 },
                   shadowOpacity: 1,
                   shadowRadius: 32,
                   elevation: 10,}} key={planeta.id}>
                    <View>
                    <Image source={require('../../../assets/Croquis_dibujados_a_mano_del_planeta_saturno_en_monocromo___Vector_Premium-removebg-preview.png')} style={styles.image}/>
                  <Text style={styles.text}>{planeta.nome}</Text>
                  <TouchableOpacity
                  style={styles.button}
                    onPress={() => navigation.navigate("Detalhes", { data: planeta })}
                  >
                    <Text>Detalhes</Text>
                    
                  </TouchableOpacity>
                  </View>
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
