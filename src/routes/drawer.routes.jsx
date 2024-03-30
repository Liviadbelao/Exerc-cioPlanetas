import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Detalhes from "../screens/Detalhes";
import SobreMim from '../screens/SobreMim';

import ListaPlanetas from "../screens/ListaPlanetas";
import Form from "../screens/Form";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Detalhes" component={Detalhes}  />
      <Drawer.Screen name="ListaPlanetas" component={ListaPlanetas} />
      <Drawer.Screen name="Form" component={Form} initialParams={{ planeta: null, edit: false }}/>
      <Drawer.Screen name="SobreMim" component={SobreMim} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;