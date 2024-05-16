// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// SOLUTION

function solution(string) {
  const uppercase = string.match(/[A-Z]/g);
  if (string == '') return string;
  if (uppercase == '') return string;
  
  let ans = '';
  let split = string.split("");
  split.forEach(char => uppercase?.includes(char) ? ans += ` ${char}` : ans += char)
  
  return ans
}