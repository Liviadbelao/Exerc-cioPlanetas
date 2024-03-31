import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'


export default function Home() {
  return (

    <View style={styles.container}>
      <Image source={require('../../../assets/Vamos visitar planetas.png')} style={styles.titulo} />
      <ScrollView style={styles.scroll}>

        <Image source={require('../../../assets/astronauta.gif')} style={styles.gif} />

        <View style={styles.box}>
          <Text style={styles.text}>Aqui você é um astronauta pronto para invadir alguns planetas.</Text>
          <Text style={styles.text}>Liste os planetas que você irá navegar e olhe os planetas já determinado.</Text>
          <Text style={styles.text}>Nessa sua jornada ao sistema solar com com a sua nave de apoio.</Text>
          <Text style={styles.text}>Aqui você já conquistou o planeta Plutão, está na hora de pegar informações de outros planetas.</Text>
        </View>
        <Image source={require('../../../assets/Rockets-removebg-preview.png')} style={styles.img} />
        <View style={styles.box}>
          <Text style={styles.text}>Essa é a sua nave espacial, o nome dela é belinha.</Text>
          <Text style={styles.text}>Escolha seu trajeto com consciência e liste os planetas escolhidos na aba "Cadastrar"!</Text>
          <Text style={styles.text}>Aproveite sua jornada e boa sorte!</Text>
        </View>
      </ScrollView>
    </View>

  )
}