import { INCREMENT, DECREMENT } from "./types";

export const Increment = (plusValue) => {
  return {
    type: INCREMENT,
    payload: plusValue,
  };
};

export const Decrement = (moinsValue) => {
  return {
    type: DECREMENT,
    payload: moinsValue,
  };
};
