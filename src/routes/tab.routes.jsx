import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Form from "../screens/Form";
import Mapas from "../screens/Mapas";
import { mapas } from "../data/PlanetasLista";
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Form" component={Form}  initialParams={{ user: null, edit: false }} />
      <Tab.Screen name="Mapas" component={Mapas} initialParams={{ mapas }} />
      <Tab.Screen name="Profile" component={Profile} initialParams={{ data: mapas }}/>
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};

export default TabRoutes;