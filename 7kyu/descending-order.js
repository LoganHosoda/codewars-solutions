// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// FUNDAMENTALS

// SOLUTION

// Essentially created a bubble sort method.

function descendingOrder(n){
  let numArr = n.toString().split("");
  let ans = "";
  let again = true;
  
  while (again) {
    again = false;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] < numArr[i + 1]) {
        let temp = numArr[i];
        numArr[i] = numArr[i + 1];
        numArr[i + 1] = temp;
        again = true;
      }
    }
  }
  
  for (let i of numArr) ans += i;
  return Number(ans);
}