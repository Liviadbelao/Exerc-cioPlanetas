import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Title from '../../components/Title'
import styles from './styles'

export default function Category() {
  return (
    <ScrollView>
    <View style={styles.container2}>
      <Title title={'Sobre o Desenvolvedor'}/>
      <View>
     
      <Image style={styles.img} source={require('../../../assets/livia.jpg')}/>
      <View style={styles.container}>
     <Text style={styles.texto}> Olá meu nome é Lívia Belão, sou aluna de desenvolvimento de sistema na escola SENAI. </Text>
     </View>
     <View style={styles.container}>
     <Text style={styles.texto}> Estou no terceiro sementre do curso, tenho 17 anos. Esse app foi desenvolvido por mim, e em breve espero desenvolver muitos mais sites e aplicativos. </Text>
     <Text style={styles.texto}> Planeta: Terra </Text>
     <Text style={styles.texto}> Estudante </Text>
     </View>
 
     <View style={styles.container}>
     <Text style={styles.texto}> Linguagens conhecidas :
     HTML,
     CSS,
     JavaScript,
     React,
     React Native. </Text>
    
     </View>
 
    </View>
    </View>
    </ScrollView>
  )
}