const defaultRules2Colors = {
  "000": 0,
  "001": 1,
  "010": 0,
  "011": 1,
  "100": 0,
  "101": 1,
  "110": 1,
  "111": 0
};

const defaultRules3Colors = {
  "000": 0,
  "001": 1,
  "010": 0,
  "011": 1,
  "100": 0,
  "101": 1,
  "110": 1,
  "111": 0,
  "002": 2,
  "020": 0,
  "022": 2,
  "200": 2,
  "202": 2,
  "220": 2,
  "222": 0,
  "112": 1,
  "122": 2,
  "121": 1,
  "211": 1,
  "221": 2,
  "212": 2,
  "012": 0,
  "102": 0,
  "120": 0,
  "021": 0,
  "201": 0,
  "210": 0
};

export const rules = { 2: defaultRules2Colors, 3: defaultRules3Colors };

export const colorCoder = {
  "0": "cell",
  "1": "cell active",
  "2": "cell active-secondary"
};

export const defaultSize = 10;
