import React from "react";
import { View, Text } from "react-native";

export default function Profile({ route }) {
  const { planeta } = route.params;

  return (
    <View>
      <Text>Detalhes do Planeta:</Text>
      <Text>Nome: {planeta.nome}</Text>
      <Text>Natureza: {planeta.natureza}</Text>
      <Text>Data: {planeta.data}</Text>
    </View>
  );
}
