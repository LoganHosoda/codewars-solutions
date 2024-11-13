//const twoOldestAges = (ages) => {
//  let ans = []
//  ages.sort((a,b) => a < b ? 1 : -1);
//  console.log(ages)
//  ans.push(ages[0])
//  ans.unshift(ages[1])
//  return ans
//}

// New Solution
const twoOldestAges = a => a.sort((a,b) => a-b).slice(-2)
