import React, { Component } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import { white } from "../utils/colors";
import { addDeck, addQuestion } from "../actions";
import { connect } from "react-redux";
import { submitDeck } from "../utils/api";
import {styles} from './NewDeck';

class NewQuestion extends Component {
  state = {
    question: "",
    answer: "",
  };

  onChangeQuestion = (question) => {
    this.setState({ question: question });
  };
  onChangeAnswer = (answer) => {
    this.setState({ answer: answer });
  };

  hadnleSubmit = () => {
    const key = this.props;
    const deck = this.state;

    this.props.dispatch(
      addQuestion({
        [key]: deck,
      })
    );
    this.setState({ question: "", answer: "" });
    submitDeck({ deck, key });

    // redirect Home
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Add New Question</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Question"
            onChangeText={this.onChangeQuestion}
            defaultValue={this.state.title}
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Answer"
            onChangeText={this.onChangeAnswer}
            defaultValue={this.state.title}
            onBlur={Keyboard.dismiss}
          />
          <TouchableOpacity style={styles.saveBtn} onPress={this.hadnleSubmit}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
          <Text>{this.state.question}</Text>
          <Text>{this.state.answer}</Text>
        </View>
      </ScrollView>
    );
  }
}


function mapStateToProps(state){
    const key = ''

    return{

    }
}

export default connect(mapStateToProps)(NewQuestion);
