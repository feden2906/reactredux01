import { StrictMode } from "react";
import ReactDOM from "react-dom";
// Імпортуємо все, що є в файлі App.js
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
