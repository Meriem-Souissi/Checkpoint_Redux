import { INCREMENT, DECREMENT } from "../actions/types";
var counterInt = 0;
const counterReducer = (state = counterInt, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;
    case DECREMENT:
      return state -1;
    default:
      return state;
  }
};
export default counterReducer;
