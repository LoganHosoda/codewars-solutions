function strCount(str, letter){  
  let count = 0;
  for (c of str) c == letter ? count++ : null
  return count;
}
