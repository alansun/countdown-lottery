import { INCREMENT_COUNT_KEY } from "../actionTypes";
const initialState = {
  countKey: 0,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT_KEY:
      return {
        ...state,
        countKey: state.countKey + 1,
      };
    default:
      return state;
  }
};
export default profileReducer;
