// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// SOLUTION

const findShort = s => {
  const sArray = s.split(' ');
  let smallest = "supercalifragilisticexpialidocious";
  sArray.forEach((word) => {
    if (word.length < smallest.length) {
      smallest = word;
    }
  })
  return smallest.length;
}