import React from "react";
import Counter from "./components/Counter";
//Імпортуємо Provider з бібліотеки react-redux
import { Provider } from "react-redux";
import { store } from "redux";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
