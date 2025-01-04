function dirReduc(arr){
  // const dir = { 'NORTH': ['n', 's'], 'SOUTH': ['s', 'n'], 'EAST': ['e', 'w'], 'WEST': ['w', 'e'] }
  const dir = { 'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST' } 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === dir[arr[i + 1]]) {
      arr.splice(i, 2)
      i = 0
    }
  }
  return arr
}
