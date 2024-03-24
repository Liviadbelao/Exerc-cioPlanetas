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
              color={focused ? "#A020F0" : "#131313"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#A020F0",
          tabBarInactiveTintColor: "#131313",
        }} />
      <Tab.Screen name="Form" component={Form}  initialParams={{ planeta: null, edit: false }}
         options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#A020F0" : "#131313"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#A020F0",
          tabBarInactiveTintColor: "#131313",
        }} />
      <Tab.Screen name="Mapas" component={Mapas} initialParams={{ mapas1 }}
       options={{
        tabBarIcon: ({ focused }) => (
          <Feather
            name="list"
            size={24}
            color={focused ? "#A020F0" : "#131313"}
          />
        ),
        tabBarLabel: "Lista",
        tabBarActiveTintColor: "#A020F0",
        tabBarInactiveTintColor: "#131313",
      }} />
      <Tab.Screen name="Profile" component={Profile} initialParams={{ data: mapas }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="list"
                size={24}
                color={focused ? "#A020F0" : "#131313"}
              />
            ),
            tabBarLabel: "Detalhes",
            tabBarActiveTintColor: "#A020F0",
            tabBarInactiveTintColor: "#131313",
          }}/>
      <Tab.Screen name="Category" component={Category}
      options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="user"
                size={24}
                color={focused ? "#A020F0" : "#131313"}
              />
            ),
            tabBarLabel: "Desenvolvedor",
            tabBarActiveTintColor: "#A020F0",
            tabBarInactiveTintColor: "#131313",
          }}/> 
    </Tab.Navigator>
  );
};

export default TabRoutes;