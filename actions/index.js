export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const GET_DECK = 'GET_DECK'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function getDeck (deck) {
    return {
      type: GET_DECK,
      deck,
    }
  }

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function addQuestion (key, question) {
    return {
      type: ADD_QUESTION,
      key,
      question,
    }
  }