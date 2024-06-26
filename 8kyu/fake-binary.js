// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// SOLUTION

function fakeBin(x){
  let numberConversion = [];
  for (i = 0; i < x.length; i++) {
    let tempNum = x[i] < 5 ? 0 : 1;
    numberConversion[i] = tempNum;
  }
  return numberConversion.join('');
}