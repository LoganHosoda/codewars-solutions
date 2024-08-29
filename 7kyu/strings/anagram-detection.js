// write the function isAnagram
var isAnagram = function(test, original) {
  const one = test.toLowerCase().split("").sort().join("");
  const two = original.toLowerCase().split("").sort().join("");
  return one === two;
};

