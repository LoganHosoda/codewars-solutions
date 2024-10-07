// This kata is part of a series. Check this out when you're done:
// 
// Pirate Island Conquer Part 2
// 
// Pirate Island Conquer Part 3
// 
// 
// Description
// You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:
// 
// 
// Map
//                       y
//          0    1    2    3    4    5    6    7
// 
//   0    ['p', '~', '~', '~', '~', '~', '~', '~'],
//   1    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   2    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   3    ['~', '~', 'u', '~', '~', '~', '~', '~'],
// x 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
//   5    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   6    ['~', '~', '~', '~', '~', '~', '~', '~'],
//   7    ['~', '~', '~', '~', '~', '~', '~', '~']];
// Where:
// 
// 'p' = pirate (that's our home island). There will always be one home island, always in the top left corner of the sea.
// 'u' = unoccupied island
// 'm' = island occupied by marines
// '~' = ocean waves
// The map size will always be 8 x 8. Each of 'u', 'm' and '~' can occur in any space of the map.
// Coordinates are given as [x,y] (examples from the above map: 'p' at [0, 0], 'u' at [3, 2], 'm' at [4, 4]).
// 
// 
// Input
// A see map, formatted as an array of arrays of strings.
// 
// Output
// Return an array containing all the best candidates (ordered by lowest x coordinate, then lowest y), or an empty array if no island to conquer.
// 
// 
// Rules (highest priority first)
// Conquer an unoccupied island.
// If there are no unoccupied islands, conquer one of the marines' islands.
// Conquer the island closest to any of our home islands (the p items / distances are computed as Manhattan distances).
// 
// Distance
// Pirates can only move vertically and horizontally, not diagonally. Moving one index in the array is one unit of distance.
// 
// Example 1: The 'u' island is 2 units away:
// 
//     ['p', '~', 'u', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ...
// Example 2: The 'u' island is 3 + 2 = 5 units away.
// 
//   |  ['p', '~', '~', '~', '~', '~', '~', '~'],
//   |  ['~', '~', '~', '~', '~', '~', '~', '~'],
// 3 |  ['~', '~', '~', '~', '~', '~', '~', '~'],
//   |  ['~', '~', 'u', '~', '~', '~', '~', '~'],
//   |---------->
//       2
// 
// Examples:
// Example 1:
// 
//     map = [
//     ['p', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', 'm', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', 'u', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~']];
// solution = [[4, 4]]
// There is a 'u' and an 'm'. Rules say we conquer a 'u' if possible, so...
// 
// Example 2:
// 
//     map = [
//     ['p', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', 'm', '~', '~', '~', '~'],
//     ['m', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', 'm', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', 'm', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~']];
// solution = [[2,0]]
// 
// Example 3:
// 
//     map = [
//     ['p', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', 'm', '~', 'm', '~', '~', '~', '~'],
//     ['m', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', 'm', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', 'm', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~']];
// There are no 'u' islands, so we'll take an 'm'. But wait! There are two the same distance away.
// 
// solution = [[1, 1], [2, 0]], not [[2, 0], [1, 1]] (lowest 'x' value first)
// 
// 
// Pirate Island Conquer Part 2
// 
// SOLUTION
function conquerIsland(map) {
  const findIslands = (target) => {
    let island = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < 8; x++) {
        if (map[y][x] === target) {
          island.push([y, x])
        }
      }
    }
    return island
  } 
  
  const target = map.some(row => row.some(char => char === 'u')) ? 'u' : 'm';
  const islands = findIslands(target);
  const min = Math.min(...islands.map(val => val[0] + val[1]))
  return islands.filter(val => val[0] + val[1] === min)
                .sort((a, b) => a[0] - b[0])

// CHECKED SOLUTION

// function conquerIsland(theMap) {
//     // function to find occupied islands
//     const findOccupiedIslands = (searchChar) => {
//         let result = [];
//         for (let y = 0; y < theMap.length; y++) {
//             const currentRow = theMap[y];
//             for (let x = 0; x < 8; x++) {
//                 if (currentRow[x] === searchChar) {
//                     result.push([y, x])
//                 }
//             }
//         }
//         return result;
//     }
// 
//     // get the target to search for either 'u' or 'm'
//     const target = theMap
//         .some(row => row.some(c => c === 'u')) ? 'u' : 'm';
// 
//     // get all occupied islands by searching the target
//     const islands = findOccupiedIslands(target);
// 
//     // find the lowest distance coordinate
//     const lowestDistance = Math.min(
//         ...islands
//             .map(val => val[0] + val[1])
//     );
// 
//     // filter by lowest distance and sort by the y coordinate
//     return islands
//         .filter(val => val[0] + val[1] === lowestDistance)
//         .sort((a, b) => a[0] - b[0]);
// }
