import { RECEIVE_DECKS, GET_DECK, ADD_QUESTION, ADD_DECK } from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case GET_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          questions: state[action.key].questions.concat(action.question),
        },
      };
  }
}
