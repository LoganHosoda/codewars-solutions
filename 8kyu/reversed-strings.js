// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION

function solution(str){
  let reverse = [];
  for (let i = 0; i < str.length; i++) {
    reverse.unshift(str[i]);
  }
  return reverse.join('');
}