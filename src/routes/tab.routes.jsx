import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Form from "../screens/Form";
import Mapas from "../screens/Mapas";
import { mapas } from "../data/PlanetasLista";


import listaPlanetas from "../models/Planeta/Planetas";

const mapas1 = listaPlanetas.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }} />
      <Tab.Screen name="Form" component={Form}  initialParams={{ planeta: null, edit: false }}
         options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }} />
      <Tab.Screen name="Mapas" component={Mapas} initialParams={{ mapas1 }}
       options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="list"
            size={24}
            color={focused ? "#131313" : "#D6D6D6"}
          />
        ),
        tabBarLabel: "Usuários",
        tabBarActiveTintColor: "#131313",
        tabBarInactiveTintColor: "#D6D6D6",
      }} />
      <Tab.Screen name="Profile" component={Profile} initialParams={{ data: mapas }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="user"
                size={24}
                color={focused ? "#131313" : "#D6D6D6"}
              />
            ),
            tabBarLabel: "Perfil",
            tabBarActiveTintColor: "#131313",
            tabBarInactiveTintColor: "#D6D6D6",
          }}/>
      <Tab.Screen name="Category" component={Category} />
    </Tab.Navigator>
  );
};

export default TabRoutes;