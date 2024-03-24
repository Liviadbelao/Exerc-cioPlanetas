import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";
import styles from './styles';
import Title from "../../components/Title";

import listaPlanetas from '../../models/Planeta/Planetas';
import Planeta from "../../models/Planeta/Planeta";


export default function Form({ route }) {
/* navegação */
  let { planeta, edit } = route.params;
/* inputs normais */
  const [nome, setNome] = useState("");
  const [natureza, setNatureza] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
/* input data */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
/* navegação */
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
       clearInputs(); 
    }
  }, [planeta, edit]);

  const handleUserAction = () => {
    if (isUpdate) {
      listaPlanetas.update(planeta.id, nome, natureza, date);
      clearInputs();
    } else {
      const newPlaneta = new Planeta(nome, natureza, date); // Criando novo planeta com os dados corretos
      listaPlanetas.addPlaneta(newPlaneta)
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
    <View style={styles.container}>
      <Title title={isUpdate ? "Editar Usuário" : "Novo Usuário"} />
      <View>
        <TextInput
        style={styles.input}
          placeholder="Digite o nome do Planeta"
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
         style={styles.input}
          placeholder="Digite a quantidade de população"
          onChangeText={setNatureza}
          value={natureza}
        />
        <TouchableOpacity style={styles.data} onPress={showDatepicker}>
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