// Welcome.
// 
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// 
// If anything in the text isn't a letter, ignore it and don't return it.
// 
// "a" = 1, "b" = 2, etc.
// 
// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// 
// SOLUTION

function alphabetPosition(text) {
  let alphabet = {};
  for (let i = 97; i <= 122; i++) {
    alphabet[String.fromCharCode(i)] = i - 96;
  }
  return text.toLowerCase().split("").map(c => alphabet[c]).filter(c => c !== undefined).join(" ")
}
