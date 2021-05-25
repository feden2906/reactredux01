// Імпортуємо все з createStore в бібліотеку redux
import { createStore } from "redux";
// початковий стан стану
const initialstate = {
  counter: 0
};
//Створюємо функцію яка змінюватиме початковий стан
// на початковому етапі state має undefined
const storeChanger = (state = initialstate, action) => {
  console.log("called store changer", state, action);

  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      counter: 0
    };
  }
  if (action.type === "INC_CUSTOM") {
    return {
      ...state,
      counter: state.counter + action.payload
    };
  }
  return state;
};

export const store = createStore(storeChanger);
console.log(store);
