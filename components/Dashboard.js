import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { fetchDecks } from "../utils/api";
import { receiveDecks } from "../actions";
import Constants from "expo-constants";
import { AppLoading } from "expo";


function Item({ deck, title, nQuestions, navigation }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Deck", { deck, id: title, nQuestions: nQuestions })
        }
      >
        <Text style={styles.title}>{title}</Text>
        <Text>No. Questions: {nQuestions}</Text>
      </TouchableOpacity>
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

    const { decks, navigation } = this.props;
    const data = Object.keys(decks).map((deck) => ({
      id: deck,
      title: deck,
      nQuestions: decks[deck].questions.length,
    }));


    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item
              deck={decks[item.title]}
              title={item.title}
              nQuestions={item.nQuestions}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
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
    backgroundColor: "#007BFF",
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