import React, { useState, useEffect, createContext } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// import Screen
import Dashboard from "./containers/Dashboard";
import Map from "./containers/Map";
import Report from "./containers/Report";
import Filter from "./containers/Filter";
import DetailReport from "./containers/DetailReport";
import Detail from "./containers/Detail";

import Login from './containers/LogIn';
import Signup from './containers/SignUp';

// icon
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

// firebase
import * as firebase from 'firebase';
import { firebaseConfig } from './config/firebase';

firebase.initializeApp(firebaseConfig);

const Tab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();
const MapStack = createStackNavigator();
const ReportStack = createStackNavigator();

const Stack = createStackNavigator();

const DashboardStackScreen = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
    </DashboardStack.Navigator>
  );
};

const MapStackScreen = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={Map}
      />
      <MapStack.Screen name="Filter" component={Filter} />
      <MapStack.Screen name="Detail" component={Detail} />
    </MapStack.Navigator>
  );
};

const ReportStackScreen = () => {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Predict Report" component={Report} />
      <ReportStack.Screen name="DetailReport" component={DetailReport} />
    </ReportStack.Navigator>
  );
};

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Map") {
              return <Feather name="map" size={size} color={color} />;
            } else if (route.name === "Dashboard") {
              return <Feather name="home" size={size} color={color} />;
            } else if (route.name === "Report") {
              return <AntDesign name="linechart" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
        
      >
        <Tab.Screen name="Map" component={MapStackScreen} />
        <Tab.Screen name="Dashboard" component={DashboardStackScreen} />
        <Tab.Screen name="Report" component={ReportStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Authen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const Router = () => {
  
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState(null)

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)

    // unsubscribe on unmount
    return authSubscriber
  }, [])

  if (initializing) {
    return null
  }

  return user ? (
      <MainScreen />
  ) : (
    <Authen />
  )
};

export default Router;
