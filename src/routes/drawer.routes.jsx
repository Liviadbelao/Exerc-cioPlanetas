import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import ListaPlanetas from "../screens/ListaPlanetas";
import Form from "../screens/Form";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile}  />
      <Drawer.Screen name="ListaPlanetas" component={ListaPlanetas} />
      <Drawer.Screen name="Form" component={Form} initialParams={{ planeta: null, edit: false }}/>
      <Drawer.Screen name="Category" component={Category} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;