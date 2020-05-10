import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import Constants from "expo-constants";
import { purple, white } from "../utils/colors";
import { formatDeck } from "../utils/_DATA";
import { AppLoading } from "expo";

function Item({ title, nQuestions }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text>No. Questions: {nQuestions}</Text>
    </View>
  );
}

class Dashboard extends Component {
  state = {
    ready: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ ready: true })));
  }

  render() {
    const { ready } = this.state;
    if (ready === false) {
      return <AppLoading />;
    }

    const { decks } = this.props;

    const data = Object.keys(decks).map((deck) => ({
      id: deck,
      title: deck,
      nQuestions: decks[deck].questions.length,
    }));

    console.log("DECKS:", data);

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} nQuestions={item.nQuestions} />}
        keyExtractor={item => item.id}
      />
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
    color: white,
    backgroundColor: '#007BFF',
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
