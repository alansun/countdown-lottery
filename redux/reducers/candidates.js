import candidates from "public/candidates";
import { LOTTERY } from "../actionTypes";
import { arrayLottery } from "helper/lottery";

const initialState = {
  candidates,
  winner: {},
};
const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOTTERY:
      const { candidates } = state;
      const lotteryIndex = arrayLottery(candidates);
      const name = candidates[lotteryIndex];
      const winner = { name: name, image: `/images/avatar/${name}.png` };
      return { ...state, winner };
    default:
      return state;
  }
};
export default candidateReducer;
