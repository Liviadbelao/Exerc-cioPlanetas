import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes";
import SobreMim from '../screens/SobreMim';
import ListaPlanetas from "../screens/ListaPlanetas";
import Form from "../screens/Form";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="SobreMim" component={SobreMim} />
        <Stack.Screen name="ListaPlanetas" component={ListaPlanetas} />
      </Stack.Navigator>
    );
  };
  
  export default StackRoutes;