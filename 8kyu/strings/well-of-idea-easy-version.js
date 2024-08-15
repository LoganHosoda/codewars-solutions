function well(x){
  let good = 0;
  for (i of x) { if (i === 'good') good++; }
  return good > 2 ? 'I smell a series!'
       : good > 0 ? 'Publish!' : 'Fail!'
}
