const smallEnough = (a, limit) => {
  let ans = true;
  a.forEach(el => el > limit ? ans = false : el  )
  return ans
}
