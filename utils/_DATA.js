import { AsyncStorage } from "react-native";

let decks = {
  React: {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
      },
    ],
  },
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
      },
    ],
  },
};

export const STORAGE_KEY = 'flashcards:decks';

function setInitialData() {
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  return decks;
}

export function formatDecks(decks) {
  console.log("PRINT DECKS:",JSON.parse(decks))
  return decks === null ? setInitialData() : JSON.parse(decks);
}

export function formatDeck({title, questions}){
    return{
        id:title,
        title:title,
        questions:questions,
        nCards: questions.lenght
    }
}
