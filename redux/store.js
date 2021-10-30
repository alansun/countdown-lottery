import { createStore, combineReducers } from "redux";

import dialogReducer from "./reducers/dialog";
import countdownReducer from "./reducers/counter";
import candidateReducer from "./reducers/candidates";

const rootReducer = combineReducers({
  dialog: dialogReducer,
  counter: countdownReducer,
  candidate: candidateReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
