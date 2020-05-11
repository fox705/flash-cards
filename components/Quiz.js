import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Quiz extends Component {
  state = {
    showAnswer: false,
    finished: false,
    nAnswered: 0,
    score: 0,
    index: 0,
  };

  showAnswer = () => {
    this.setState({ showAnswer: true });
  };

  handleCorrect = () => {
    this.setState((currState) => ({
      score: currState.score + 1,
      index: currState.index + 1,
      nAnswered: currState.nAnswered + 1,
      showAnswer: false,
    }));

    if (this.state.index === this.props.route.params.nQuestions - 1) {
      this.setState({ finished: true });
    }
  };

  handleIncorrect = () => {
    this.setState((currState) => ({
      score: currState.score,
      index: currState.index + 1,
      nAnswered: currState.nAnswered + 1,
      showAnswer: false,
    }));

    if (this.state.index === this.props.route.params.nQuestions - 1) {
      this.setState({ finished: true });
    }
  };

  reset = () => {
    this.setState({
      showAnswer: false,
      finished: false,
      nAnswered: 0,
      score: 0,
      index: 0,
    });
  };

  render() {
    const { finished, showAnswer, nAnswered, index, score } = this.state;
    const { nQuestions, deck } = this.props.route.params;
    const { navigation } = this.props;
    const quiz = deck.questions;

    console.log("QUIZ: ", quiz);

    if(quiz.length === 0){
        return(<View>
            <Text>No Questions for this Quiz</Text>
        </View>)
    }

    if (finished) {
      return (
        <View>
          <Text>{score}</Text>
          <TouchableOpacity onPress={this.reset}>
            <Text>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Deck")}>
            <Text>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <Text>Remaining Questions: {nQuestions - nAnswered}</Text>
        {!showAnswer ? (
          <View>
            <Text>{quiz[index].question}</Text>
            <TouchableOpacity onPress={this.showAnswer}>
              <Text>Show Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text>{quiz[index].answer}</Text>
            <TouchableOpacity onPress={this.handleCorrect}>
              <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleIncorrect}>
              <Text>Incorrect</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Quiz;
