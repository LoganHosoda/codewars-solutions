// Description
// This kata is part of a series! You may want to start with part 1:
// 
// Pirate Island Conquer Part 1
// 
// Quick instructions
// If you haven't completed part 1, scroll down for the complete instructions. If you completed part 1, part 2 is similar with the following changes:
// 
// The pirate home island is not only at [0, 0].
// There is between 1 and 3 pirate home islands.
// Complete Instructions
// You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:
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
// 'p' = pirate (that's our home island).
// 'u' = unoccupied island
// 'm' = island occupied by marines
// '~' = ocean waves
// The map size will always be 8 x 8. Each of 'p', 'u', 'm' and '~' can occur in any space of the map.
// Coordinates are given as [x,y] (examples from the above map: 'p' at [0, 0], 'u' at [3, 2], 'm' at [4, 4]).
// 
// Input
// A see map, formatted as an array of arrays of strings.
// 
// Number of each label in one map:
// 
// 'p': 1 to 3
// 'u': 0 to 5
// 'm': 0 to 5
// Output
// Return an array containing all the best candidates (ordered by lowest x coordinate, then lowest y), or an empty array if no island to conquer.
// 
// Rules (highest priority first)
// Conquer an unoccupied island.
// If there are no unoccupied islands, conquer one of the marines' islands.
// Conquer the island(s) closest to any of our home islands (the p items / distances are computed as Manhattan distances).
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
// Example 4:
// 
// map = [
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', 'p', 'm', '~', '~', '~', '~'],
//     ['m', '~', 'm', 'p', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', 'm', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~'],
//     ['~', '~', '~', 'm', '~', '~', '~', '~'],
//     ['~', '~', '~', '~', '~', '~', '~', '~']];
// solution = [[1, 3], [2, 2]]
// There are no 'u' islands, so we'll take the closest two 'm' islands.
// 
// Pirate Island Conquer Part 3
// 
// ArraysGamesPuzzles
//
// SOLUTION

function conquerIsland(map) {
  const findIslands = (target) => {
    let found = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (map[y][x] === target) found.push([y, x]);
      }
    }
    return found;
  }
  
  const min = (a, b) => {
//     console.log(`func min: ${a}, ${b}`)
    let x = Math.abs(b[0] - a[0]);
    let y = Math.abs(b[1] - a[1]);
    return Math.max(x, y)
  }
  
  const calcDistance = (a, b) => {
    let result = {};
    a.forEach(isleA => {
       for (let isleB of b) {
//          console.log("isleA: " + isleA + " isleB: " + isleB)
         let dist = min(isleA, isleB);
//          result[dist] === undefined ? result[dist] = [isleB] : result[dist].push(isleB);
         if (result[dist] === undefined) result[dist] = [isleB]
         else if (!result[dist].includes(isleB)) result[dist].push(isleB)
       }
    });
    let lowest = Math.min(parseInt(Object.keys(result)))
//     console.log("result[lowest]: ", result[lowest])
    return result[lowest];
  }
  
  const pirates = findIslands('p');
  const unoccupied = findIslands('u')
  const marines = findIslands('m');

  if (unoccupied.length > 0) {
    return calcDistance(pirates, unoccupied);
  } else if (marines.length > 0) {
    return calcDistance(pirates, marines);
  } else {
    return [];
  }
}
