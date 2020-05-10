import { AsyncStorage } from 'react-native'
import { formatDecks, STORAGE_KEY } from './_DATA';

export function submitDeck({ deck, key }) {
    AsyncStorage.mergeItem(
      STORAGE_KEY,
      JSON.stringify({ [key]: deck })
    );
  }

  export function update(decks){
    AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks))
  }

  export async function fetchDecks () {
    return await AsyncStorage.getItem(STORAGE_KEY).then(formatDecks)
  }
