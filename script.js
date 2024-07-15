function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['XC', 90],
    6: ['L', 50],
    7: ['XL', 40],
    8: ['X', 10],
    9: ['IX', 9],
    10: ['V', 5],
    11: ['IV', 4],
    12: ['I', 1]
  };
 
  let roman = '';
 
  for (let i = 0; i < 13; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];
    const count = Math.floor(num / value);
 
    if (count > 0) {
      roman += symbol.repeat(count);
      num %= value;
    }
  }
 
  return roman;
}
 
 
 
// do not edit below this line
module.exports = convertToRoman