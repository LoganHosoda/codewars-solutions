// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// SOLUTION

function count(string) 
  let chars = string.split("");
  let ans = {};
  chars.map(char => ans[char] ? ans[char]++ : ans[char] = 1)
  return ans;
}