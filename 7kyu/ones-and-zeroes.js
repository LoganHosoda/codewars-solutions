// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// SOLUTION

// const binaryArrayToNumber = arr => (8 * arr[0]) + (4 * arr[1]) + (2 * arr[2]) + (1 * arr[3]);
/*------ Only works for an array with 4 variables ------*/

const binaryArrayToNumber = arr => {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += (arr[arr.length - i - 1]) * (2 ** i);
  }
  return total;
}