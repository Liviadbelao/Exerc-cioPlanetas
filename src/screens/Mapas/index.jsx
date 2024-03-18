import { View, Text, TouchableOpacity, TextInput, DateInput } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
export default function Mapas() {
  const [task, setTask] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [data, setData] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask("");
      setData("");
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
        <TextInput
          placeholder="Digite a quantidade de população"
          onChangeText={setData}
          secureTextEntry={true}
          value={data}
        />
        <TouchableOpacity onPress={addTask}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}
