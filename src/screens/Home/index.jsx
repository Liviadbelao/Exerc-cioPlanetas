import { View, Text } from 'react-native'
import Title from '../../components/Title'
import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
     <Title title={"Pag Home"}/>
     <Text>Aqui você é um astronauta pronto para invadir alguns planetas.</Text>
     <Text>Liste os planetas que você irá navegar e olhe os planetas já determinado.</Text>
    </View>
  )
}