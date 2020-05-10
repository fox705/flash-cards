import "react-native-gesture-handler";
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


class Deck extends Component{

    render(){
        const {navigation} = this.props
        const {id, nQuestions, deck} = this.props.route.params
        console.log("DECK PROPS", nQuestions)
        return(
            <View>
                <Text>{id}</Text>
                <Text>{nQuestions} Cards</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewQuestion', {deck,key:id})}><Text>Add Question</Text></TouchableOpacity>
                <TouchableOpacity><Text>Start Quiz</Text></TouchableOpacity>
            </View>
        )
    }

}



export default Deck