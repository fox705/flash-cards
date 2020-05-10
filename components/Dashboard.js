import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import Constants from 'expo-constants';
import { purple } from "../utils/colors";

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}


class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks().then((decks) => dispatch(receiveDecks(decks)));
  }

  render() {
    const { decks } = this.props;
    const ids = Object.keys(decks)
    console.log("DECS: ", typeof ids);
    return (
        <SafeAreaView style={styles.container}>

    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: purple,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

function mapStateToProps(decks) {

  return {
    decks,
  };
}

export default connect(mapStateToProps)(Dashboard);
