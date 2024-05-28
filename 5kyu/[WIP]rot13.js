// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  const lowerAlph = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j',
                      11: 'k', 12: 'l', 3: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 
                      21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z' }
  const upperAlph = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J', 
                      11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T',
                      21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z' }
  
  for (const char in message) {
    if (message[char].toUpperCase() == message[char]) {
      let num = upperAlph
    } else {
      
    }
    
  }
}