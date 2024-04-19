// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// STRINGS FUNDAMENTALS

// SOLUTION

function reverseWords(str) {
  let splitString = str.split(" ");
  let reversed = "";
  
  splitString.forEach((el, i, arr) => {
    for (i = 1; i <= el.length; i++) {
      reversed += el[el.length - i]
    }
    console.log(el, arr[arr.length - 1])
    if (el != arr[arr.length - 1]) reversed += " ";
  })
  return reversed;
}