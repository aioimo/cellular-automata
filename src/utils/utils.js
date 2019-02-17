function mod(n, m) {
  return ((n % m) + m) % m;
}

export let rules = {
  "000": 0,
  "001": 1,
  "010": 1,
  "011": 1,
  "100": 1,
  "101": 0,
  "110": 0,
  "111": 0
};

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
