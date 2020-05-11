import "react-native-gesture-handler";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { StyleSheet, Text, View, StatusBar, AsyncStorage } from "react-native";
import {Navigation}  from "./components/Navigation";
import middleware from './middleware'


export default class App extends Component {


  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Navigation/>
      </Provider>
    );
  }
}
