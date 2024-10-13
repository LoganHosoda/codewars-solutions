// Description:
// Move every letter in the provided string forward 10 letters through the alphabet.
// 
// If it goes past 'z', start again at 'a'.
// 
// Input will be a string with length > 0.
// 
// SOLUTION

function moveTen(s){
  // a = 97 
  // z = 122 
  return shiftLetters(s).join('');
}

function shiftLetters(s) {
  let ans = [], lower = 97, upper = 122;
  
  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt() + 10;
    if (code > 122) {
      let diff = code - 122;
      code = 96 + diff;
    }
    let conv = String.fromCharCode(code); 
    ans.push(conv)
    console.log(conv)
  } 
  
  return ans;
}
