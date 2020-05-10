import "react-native-gesture-handler";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "./reducers";
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Dashboard from "./components/Dashboard";
import NewDeck from "./components/NewDeck";

const Tab = createBottomTabNavigator();

export default class App extends Component {

  render(){
    return (
      <Provider store={createStore(reducer)}>
   <NavigationContainer>
   <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Add Deck" component={NewDeck} />
      </Tab.Navigator>
   </NavigationContainer>


      </Provider>
    );
  }

}

function mapStateToProps(state){
return{state}
}

