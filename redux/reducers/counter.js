import { calCountdown } from "helper/counterFormatter";
import { TICK, START_TIMER, STOP_TIMER } from "../actionTypes";
const initialState = {
  seconds: 0,
  status: "paused",
  hour: "00",
  min: "00",
  sec: "00",
  days: "00",
  milliSec: "0",
};
const countdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        status: "start",
        seconds: action.payload.mins * 60,
      };
    case TICK:
      const time = calCountdown(state.seconds * 1000);
      if (time.finish) return { ...state, ...initialState, status: "lottory" };
      return {
        ...state,
        ...time,
        status: "tick",
        seconds: (state.seconds - 0.1).toFixed(1),
      };
    case STOP_TIMER:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
export default countdownReducer;
