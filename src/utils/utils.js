export function mod(n, m) {
  return ((n % m) + m) % m;
}

export const zeroArray = n => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(0);
  }
  return result;
};
