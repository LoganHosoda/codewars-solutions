function removeChar(str){
  let split = str.split('')
  split.shift();
  split.pop();
  return split.join('');
};
