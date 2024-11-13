function dontGiveMeFive(start, end) {
  let nums = []
  while (start <= end) {
    if (!(start.toString().includes('5'))) nums.push(start)  
    start++;
  }
  return nums.length
}

