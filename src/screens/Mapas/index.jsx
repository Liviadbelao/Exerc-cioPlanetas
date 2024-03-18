import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
export default function Mapas() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask("");
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
        <TouchableOpacity onPress={addTask}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>
  );
}
