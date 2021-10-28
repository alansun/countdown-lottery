import { UPDATE_PROFILE } from "../actionTypes";
const initialState = {
  name: "",
  email: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
};
export default profileReducer;
