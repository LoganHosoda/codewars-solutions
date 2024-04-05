// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals


// ============== REFACTORED SOLUTION ============== //
// Wrote this code from memory after viewing some of the other solutions.

const solution = number => {
  let roman = "";
  let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  
  decimal.forEach((value, index) => {
    while (number >= value) {
      roman += romanNumeral[index];
      number -= value;
    }
  })
  return roman;
}


// ============== OLD SOLUTION ============== //

// const solution = number => {
//   let romanNum = "";
//   let arr = number.toString().split('').reverse().map(Number);
//   let mult = 1;
//   for (i = 0; i < arr.length; i++) {
//     arr[i] *= mult;
//     mult *= 10;
//   }
//   arr.reverse().forEach((element) => {
//     switch (true) {
//       case element.toString().length == 4:
//         romanNum += handleM(element);
//         break;
//       case element.toString().length == 3:
//         romanNum += handleC(element);
//         break;
//       case element.toString().length == 2:
//         romanNum += handleX(element);
//         break;
//       case element.toString().length == 1:
//         romanNum += handleI(element);
//         break;
//     }
//   })
  
//   return romanNum;
// }

// const handleM = num => {
//   num /= 1000;
//   let romanNum = "";
//   while (num > 0) {
//     romanNum += "M";
//     num--;
//   }
//   return romanNum;
// }

// const handleC = num => {
//   if (num === 0) {return ""}
//   num /= 100;
//   let romanNum = "";
//   switch (true) {
//     case (num < 4):
//       romanNum += "C".repeat(num);
//       break;
//     case (num == 4):
//       romanNum += "CD";
//       break;
//     case (num == 5):
//       romanNum += "D";
//       break;
//     case (num > 5 && num < 9):
//       romanNum = "D";
//       romanNum += "C".repeat((num - 5));
//       break;
//     case (num == 9):
//       romanNum = "CM";
//       break;
//   }
//   return romanNum;
// }

// const handleX = num => {
//   if (num === 0) {return ""}
//   num /= 10;
//   let romanNum = "";
//   switch (true) {
//     case (num < 4):
//       romanNum += "X".repeat(num);
//       break;
//     case (num == 4):
//       romanNum += "XL";
//       break;
//     case (num == 5):
//       romanNum += "L";
//       break;
//     case (num > 5 && num < 9):
//       romanNum = "L";
//       romanNum += "X".repeat((num - 5));
//       break;
//     case (num == 9):
//       romanNum = "XC";
//       break;
//   }
//   return romanNum;
// }

// const handleI = num => {
//   if (num === 0) {return ""}
//   let romanNum = "";
//   switch (true) {
//     case (num < 4):
//       romanNum += "I".repeat(num);
//       break;
//     case (num == 4):
//       romanNum += "IV";
//       break;
//     case (num == 5):
//       romanNum += "V";
//       break;
//     case (num > 5 && num < 9):
//       romanNum = "V";
//       romanNum += "I".repeat((num-5));
//       break;
//     case (num == 9):
//       romanNum = "IX";
//       break;
//   }
//   return romanNum;
// }