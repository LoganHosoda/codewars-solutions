function countPositivesSumNegatives(input) {
  if (input === null || input.length == 0) {return []};
  let ans = [];
  ans.push(input.filter(el => el > 0).length);
  ans.push(input.filter(el => el < 0).reduce((acc, el) => acc += el, 0));
  return ans;
}
