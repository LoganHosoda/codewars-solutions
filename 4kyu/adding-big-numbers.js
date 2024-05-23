// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// SOLUTION - WORK IN PROGRESS!

function add(a, b) {
  let ans = '';
  let j = b.length - 1;
  let placeHolder = [];
  

  for (i = a.length - 1; i >= 0; i--) {
    placeHolder.unshift(Number(a[i]) + Number(b[j]))
    console.log(Number(a[i]), Number(b[j]))
    j--;
  }
  
  return placeHolder;
}