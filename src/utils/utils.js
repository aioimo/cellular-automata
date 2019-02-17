import { rules } from "./config";

function mod(n, m) {
  return ((n % m) + m) % m;
}

export const calculateNextState = state => {
  return state.map((cell, i) => {
    let parentCells =
      "" +
      state[mod(i - 1, state.length)] +
      state[i] +
      state[mod(i + 1, state.length)];
    return rules[parentCells];
  });
};
