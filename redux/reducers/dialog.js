import { OPEN_DIALOG, CLOSE_DIALOG } from "../actionTypes";
const initialState = {
  isOpen: false,
};
const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_DIALOG:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
export default dialogReducer;
