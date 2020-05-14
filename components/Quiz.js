import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";
import { styles } from "./NewDeck";
import { red } from "../utils/colors";

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
      clearLocalNotification();
      setLocalNotification();
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
      clearLocalNotification();
      setLocalNotification();
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


    if(quiz.length === 0){
        return(<View>
            <Text>No Questions for this Quiz</Text>
        </View>)
    }

    if (finished) {
      return (
        <View><View>
            <Text style={styles.text}>Your Score: {Math.floor(score/nQuestions * 100)}%</Text>
        </View>
          <TouchableOpacity style={styles.saveBtn} onPress={this.reset}>
            <Text style={styles.saveBtnText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.navigate("Deck")}>
            <Text style={styles.saveBtnText}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <Text style={[styles.text, {fontSize: 14}]}>Remaining Questions: {nQuestions - nAnswered}</Text>
        {!showAnswer ? (
          <View><View>
          <Text style={[styles.text, {fontSize: 20}]}>{quiz[index].question}</Text>
          </View>
            <TouchableOpacity style={styles.saveBtn} onPress={this.showAnswer}>
              <Text style={styles.saveBtnText}>Show Answer</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
          <View><Text style={[styles.text, {fontSize: 20}]} >{quiz[index].answer}</Text></View>
            <TouchableOpacity style={[styles.saveBtn, {backgroundColor: 'green'}]} onPress={this.handleCorrect}>
              <Text style={styles.saveBtnText} >Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.saveBtn, {backgroundColor: red}]} onPress={this.handleIncorrect}>
              <Text style={styles.saveBtnText} >Incorrect</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default Quiz;
