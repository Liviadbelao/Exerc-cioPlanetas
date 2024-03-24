import { View, Text, TouchableOpacity, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";
import Planeta from "../../models/Planeta";
import Planetas from "../../models/Planetas";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
const planetaLista = new Planetas();

export default function Mapas() {
  const [nome, setNome] = useState("");
  const [natureza, setNatureza] = useState("");

  const [planetas, setPlanetas] = useState([]);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
 
  };

  const createPlaneta = () => {
    let idnew = Math.floor(Math.random() * 999999);
    const novoPlaneta = new Planeta(idnew, nome, natureza, date);

    planetaLista.addPlaneta(novoPlaneta);
    setPlanetas(planetaLista.getAll());
    setNatureza("");
    setNome("");
    return novoPlaneta;
  };

  const deletePlaneta = (id) => {
    planetaLista.remove(id);
    setPlanetas(planetaLista.getAll());
  }
   const editar = (id) =>{
      planetaLista.update(id, nome, natureza, date)
      setPlanetas(planetaLista.getPlanetaById(id))
   }
   
  return (
    <View>
      <Text>Mapas</Text>
      <View>
        <TextInput
          placeholder="Digite o nome do Planeta"
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          placeholder="Digite a quantidade de população"
          onChangeText={setNatureza}
          value={natureza}
        />
        <TouchableOpacity onPress={showDatepicker}>
          <Text>Escolha a data</Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <TouchableOpacity onPress={createPlaneta}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      {/* renderizendo */}
      <View>
        {planetas.length > 0 ? (
          planetas.map((planeta) => (
            <Text key={planeta.id}>
               <TouchableOpacity
            
            onPress={() => navigation.navigate("Profile", { data: Mapas })}
          >
            <Text>Detalhes</Text>
        
            
             {/*  <Text>{planeta.nome}</Text>
              <Text>{planeta.natureza}</Text>
              <Text>
                {planeta.data.getDate()}/{planeta.data.getMonth()}/
                {planeta.data.getFullYear()}
              </Text> */}
             {/*  <TouchableOpacity onPress={() => deletePlaneta(planeta.id)}><Text>deletar</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => editar(planeta.id)}><Text>Editar</Text></TouchableOpacity> */}
            </TouchableOpacity>
            </Text>
          ))
        ) : (
          <Text>Não há usuários cadastrados</Text>
        )}
      </View>
      <StatusBar />
    </View>
  );
}
