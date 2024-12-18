// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// 
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// 
// SOLUTION

const grow = arr => arr.reduce((acc, num) => acc *= num, 1)
