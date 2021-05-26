import { createStore } from "redux";
import { storeChanger } from "./reducers";

export const store = createStore(storeChanger);
