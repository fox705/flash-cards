import "react-native-gesture-handler";
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from "./NewDeck";
import { red } from "../utils/colors";


class Deck extends Component{

    render(){
        const {navigation} = this.props
        const {id, nQuestions, deck} = this.props.route.params
        console.log("DECK PROPS", nQuestions)
        return(
            <View style={styles.inputContainer}>
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.text}>{nQuestions} Cards</Text>
                <TouchableOpacity style={styles.saveBtn} onPress={() => navigation.navigate('NewQuestion', {deck,key:id})}><Text>Add Question</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.saveBtn, {backgroundColor: red}]} onPress={() => navigation.navigate('Quiz', {deck,key:id, nQuestions})}><Text>Start Quiz</Text></TouchableOpacity>
            </View>
        )
    }

}



export default Deck