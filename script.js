function convertToRoman(num) {
  const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let roman = '';

  for (let i = 0; i < symbols.length; i++) {
    const [symbol, value] = symbols[i];

    while (num >= value) {
      roman += symbol;
      num -= value;
    }

    // Handle subtractive combinations like IV, IX, etc.
    if (i % 2 === 0) {
      const nextIndex = i - (i % 2) + 2;
      const nextSymbol = symbols[nextIndex][0];
      const nextValue = symbols[nextIndex][1];
      if (num >= value - nextValue) {
        roman += nextSymbol + symbol;
        num -= (value - nextValue);
      }
    }
  }

  return roman;
}

// Test cases
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
console.log(convertToRoman(36)); // Output: XXXVI



// do not edit below this line
module.exports = convertToRoman
