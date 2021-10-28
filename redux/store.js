import { createStore, combineReducers } from "redux";
import profileReducer from "./reducers/profile";
import counterReducer from "./reducers/counter";
const rootReducer = combineReducers({
  profile: profileReducer,
  counter: counterReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
