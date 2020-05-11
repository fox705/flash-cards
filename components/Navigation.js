import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dashboard from "./Dashboard";
import NewDeck from "./NewDeck";
import Deck from "./Deck";
import { white, purple } from "../utils/colors";
import NewQuestion from "./NewQuestion";
import { AppLoading } from "expo";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-bookmarks" : "ios-bookmarks";
          } else if (route.name === "Add Deck") {
            iconName = focused ? "ios-add" : "ios-add";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#007BFF",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Add Deck" component={NewDeck} />
    </Tab.Navigator>
  );
}

const StackNavigation = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="Home"
      component={TabNavigation}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Deck"
      component={Deck}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }}
    />
    <Stack.Screen
      name="NewQuestion"
      component={NewQuestion}
      options={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: purple,
        },
      }}
    />
  </Stack.Navigator>
);

 export function Navigation() {
  
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
}



