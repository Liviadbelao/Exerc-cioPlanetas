import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import Title from "../../components/Title";

import Planetas from "../../models/Planetas";
const listaPlanetas = new Planetas();
import Planeta from "../../models/Planeta";
import { mapas } from "../../data/PlanetasLista";

export default function Form({ route }) {
  let { planeta, edit } = route.params;

  const [nome, setNome] = useState("");
 
  const [natureza, setNatureza] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
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
  useEffect(() => {
    if (edit) {
      setNome(planeta.nome);
      setNatureza(planeta.natureza);
      setDate(new Date());
      setIsUpdate(true);
    } else {
      /* clearInputs(); */
    }
  }, [planeta, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      listaPlanetas.update(planeta.id, nome, natureza, date);
      /* clearInputs(); */
    } else {
      const newPlaneta = new Planeta(nome, natureza, date); // Criando novo planeta com os dados corretos
      listaPlanetas.addPlaneta(newPlaneta);
    
      console.log(listaPlanetas);
      /* clearInputs(); */
    }
    navigation.navigate("Mapas");
  };
  

  const clearInputs = () => {
    setIsUpdate(false);
    edit = false;
    setNome("");
    setNatureza("");
    setDate("");
  };

  return (
    <View >
      <Title title={isUpdate ? "Editar Usuário" : "Novo Usuário"} />
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
        <TouchableOpacity onPress={handleUserAction}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity  onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity  onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}