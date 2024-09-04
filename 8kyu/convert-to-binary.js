// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.
// 
// Examples:
// 
// 1  ->    1  (because  1 is    0b1 in binary)
// 5  ->  101  (because  5 is  0b101 in binary)
// 11 -> 1011  (because 11 is 0b1011 in binary)
// 
// SOLUTION

function toBinary(n, arr = []){
  let quotient = Math.floor(n/2);
  arr.unshift(n%2);
  
  if(quotient == 0) return Number(arr.join(''))
  else toBinary(quotient, arr)
  
  return Number(arr.join(''))
}
