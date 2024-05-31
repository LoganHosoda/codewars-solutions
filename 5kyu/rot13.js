// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// REFACTORED SOLUTION

const rot13 = (message) => {
  message.replace(/[a-z]/gi, (char) => char.fromCharCode(char.charCodeAt(0) + char.toLowerCase() >= 'm' ? 13 : -13))
}

// OLD SOLUTION

function rot13 (message) {
  let upper = [64, 90]
  let lower = [96, 122]
  let ans = ''
  for (let char in message) {
    let utf = message.charCodeAt(char);
    
    if (message[char].toUpperCase() == message[char]) { // Upper case check
      if (utf >= 65 && utf <= 90) {
        utf += 13;
        if (utf > upper[1]) {
          let temp = utf - upper[1]
          utf = upper[0] + temp;
          ans += String.fromCharCode(utf);
        } else {
          ans += String.fromCharCode(utf);
        }
      } else if (message[char].match(/[^A-Za-z]/)) {
        ans += message[char];
      }
    } else { // Lower case check
      if (utf >= 97 && utf <= 122) {
        utf += 13;
        if (utf > lower[1]) {
          let temp = utf - lower[1]
          utf = lower[0] + temp;
          ans += String.fromCharCode(utf);
        } else {
          ans += String.fromCharCode(utf);
        }
      }
    }
  }
  return ans;
}