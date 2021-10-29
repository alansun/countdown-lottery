import { createStore, combineReducers } from "redux";
import countdownReducer from "./reducers/counter";

const rootReducer = combineReducers({
  counter: countdownReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
