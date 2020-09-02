import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import Screen
import Dashboard from "./containers/Dashboard";
import Map from "./containers/Map";
import Report from "./containers/Report";

// icon
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DashboardStack = () =>  {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Map') {
              return <Feather name="map" size={size} color={color} />;
            } else if (route.name === 'Dashboard') {
              return <Feather name="home" size={size} color={color} />;
            } else if(route.name === 'Report') {
              return <AntDesign name="linechart" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Dashboard" component={DashboardStack} />
        <Tab.Screen name="Report" component={Report} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
