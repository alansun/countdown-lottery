import candidates from "public/candidates";
import { LOTTORY } from "../actionTypes";

const initialState = {
  candidates,
  winner: null,
};
const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOTTORY:
      const { candidates } = state;
      const name = candidates[Math.floor(Math.random() * candidates.length)];
      const winner = { name: name, image: `/images/avatar/${name}.png` };
      return { ...state, winner };
    default:
      return state;
  }
};
export default candidateReducer;
