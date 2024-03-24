import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import Title from '../../components/Title'
import styles from './styles'
export default function Profile({ route }) {

  const { data } = route.params;
  return (
    <View >
      <Title title={"Pag Profile"}/>
   

   
        <View >
          <Text >{data.nome}</Text>
          <Text >{data.natureza}</Text>
          <Text >{data.data}</Text>
        </View>
     
    </View>
  )
}