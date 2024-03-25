import { View, Text, ImageBackground, Image } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'
const image = '../../../assets/ae8eed43-14ea-4da0-a226-8efef86cd40c.jpg'
export default function Home() {
  return (
    <ImageBackground source={image} style={styles.image}>
    <View style={styles.container}>
     <Image source={require('../../../assets/_NASA_Tingz_-removebg-preview.png')} width={10} height={10}/>
     <View style={styles.box}>
     <Text style={styles.text}>Aqui você é um astronauta pronto para invadir alguns planetas.</Text>
     <Text style={styles.text}>Liste os planetas que você irá navegar e olhe os planetas já determinado.</Text>
     <Text style={styles.text}>Nessa sua jornada ao sistema solar com com a sua nave de apoio</Text>
     </View>
    </View>
    </ImageBackground>
  )
}