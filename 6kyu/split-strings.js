// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// SOLUTION

const solution = string => {
  let answer = [];
  let tempStr = "";
  let counter = 0;

  if (string.length % 2 != 0) {
    string += "_"
  }

  for (let i in string) {
    tempStr += string[i];
    counter++;
    if (counter == 2) {
      answer.push(tempStr);
      tempStr = "";
      counter = 0;
    }
  }
  
  return answer;
}