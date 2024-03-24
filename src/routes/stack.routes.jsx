import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import { mapas } from "../data/PlanetasLista";
import Form from "../screens/Form";
import Planetas from "../models/Planetas";
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} initialParams={{ data: mapas }}/>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    );
  };
  
  export default StackRoutes;