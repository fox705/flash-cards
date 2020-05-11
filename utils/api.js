import { AsyncStorage } from 'react-native'
import { formatDecks, STORAGE_KEY } from './_DATA';

export function submitDeck({ deck, key }) {
    AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({ [key]: deck })
    );
  }

  export function update(decks){
    console.log("UPDATE DECKS: ", decks)
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks))
  }

  export function fetchDecks () {
    return AsyncStorage.getItem(STORAGE_KEY).then(formatDecks)
  }
