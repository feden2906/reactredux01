import React from "react";
import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
import { store }  from "./store";

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
