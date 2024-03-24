import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;
console.log(data);
  return (
    <View>
      <Text>Detalhes do data:</Text>
      <Text>Nome: {data.nome}</Text>
      <Text>Natureza: {data.natureza}</Text>
      <Text>Data: {data.data}</Text>
    </View>
  );
}
