import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Mapas from "../screens/Mapas";
import Form from "../screens/Form";
import { mapas } from "../data/PlanetasLista";
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile}  />
      <Drawer.Screen name="Mapas" component={Mapas} />
      <Drawer.Screen name="Form" component={Form} initialParams={{ planeta: null, edit: false }}/>
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;