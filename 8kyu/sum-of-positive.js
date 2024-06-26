// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// NEW SOLUTION

const positiveSum = arr => arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0)

// OLD SOLUTION

// const positiveSum = arr => {
//   let sum = 0;
//   arr.forEach(num => {
//     if (num > 0) sum += num
//   })
//   return sum;
// }