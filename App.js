import "react-native-gesture-handler";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { purple } from "./utils/colors";
import NewDeck from './components/NewDeck'
import NewQuestion from "./components/NewQuestion";
import Dashboard from "./components/Dashboard";


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
       <View style={{flex: 1}}>
         <Dashboard/>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
