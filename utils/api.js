import { AsyncStorage } from 'react-native'
import { formatDecks, STORAGE_KEY } from './_DATA';

export async function submitDeck({ deck, key }) {
   await AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({ [key]: deck })
    );
  }

  export function update(decks){
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks))
  }

  export function fetchDecks () {
    return AsyncStorage.getItem(STORAGE_KEY).then(formatDecks)
  }

  export function deleteDeck(){
    AsyncStorage.removeItem(STORAGE_KEY, '')
  }

  export async function addQuestionToStorage(title, question){

        const results = await AsyncStorage.getItem(STORAGE_KEY).then(formatDecks)
        const deck = results[title]
        deck.questions.push(question)
        const newDeck = {[title]: deck}
        return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck))

    }