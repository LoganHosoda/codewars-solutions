// Task
// given a point in a euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.
// 
// examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4
// reference
// quadrantsquadrants
// there are four quadrants:
// 
// first quadrant, the quadrant in the top-right, contains all points with positive X and Y
// second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
// third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
// fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
// more on quadrants: quadrant (plane geometry) - Wikipedia
// 
// task series
// quadrants (this kata)
// quadrants 2: segments
// 
// SOLUTION

function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
}
