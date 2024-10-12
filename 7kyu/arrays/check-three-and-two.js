// Description:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.
// 
// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"
// 
// SOLUTION

function checkThreeAndTwo(array) {
  let obj = {};
  for (let el of array) {
    obj[el] === undefined ? obj[el] = 1 : obj[el]++;
  }
  let ans = [];
  let count = 0;
  for (let key in obj) {
    ans[count] = obj[key]; 
    count++;
  }
  let set1 = false, set2 = false;
  if (ans[0] == 2 && ans[1] == 3) set1 = true;
  if (ans[1] == 2 && ans[0] == 3) set2 = true;
  console.log(ans, set1, set2)
  return set1 || set2;
}
