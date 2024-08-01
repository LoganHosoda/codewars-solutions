//const smallEnough = (a, limit) => {
//  let ans = true;
//  a.forEach(el => el > limit ? ans = false : el  )
//  return ans
//}

// Refactored Solution 
const smallEnough = (a, limit) => a.every(num => num <= limit)
