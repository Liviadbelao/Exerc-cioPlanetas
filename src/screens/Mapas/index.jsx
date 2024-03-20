import { View, Text, TouchableOpacity, TextInput, DateInput } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
export default function Mapas() {
  const [task, setTask] = useState("");
  const [populacao, setPopulacao] = useState("");
 
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
    showMode('date');
  };
  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toNumber(), value: date }]);
      setTask("");
  
      setPopulacao("")
    }
  };

  return (
    
    <View>
      <Text>Mapas</Text>
      <View>
        <TextInput
          placeholder="Digite o nome do Planeta"
          onChangeText={setTask}
          value={task}
        />
        <TextInput
          placeholder="Digite a quantidade de população"
          onChangeText={setPopulacao}
          keyboardType="numeric"
          value={populacao}
        />
     <TouchableOpacity onPress={showDatepicker}><Text>Escolha a data</Text></TouchableOpacity>
     {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
        <TouchableOpacity onPress={addTask}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
   
      <StatusBar />
    </View>
  );
}
