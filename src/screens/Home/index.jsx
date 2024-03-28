import { View, Text, ImageBackground, Image, ScrollView } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'


export default function Home() {
  return (
 
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
 <Image source={require('../../../assets/Vamos visitar planetas.png')} style={styles.titulo}/>
     <Image source={require('../../../assets/astronauta.gif')} width={10} height={10}/>
    
     <View style={styles.box}>
     <Text style={styles.text}>Aqui você é um astronauta pronto para invadir alguns planetas.</Text>
     <Text style={styles.text}>Liste os planetas que você irá navegar e olhe os planetas já determinado.</Text>
     <Text style={styles.text}>Nessa sua jornada ao sistema solar com com a sua nave de apoio</Text>
     </View>
     </ScrollView>
    </View>
   
  )
}