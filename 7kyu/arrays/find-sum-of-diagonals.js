function diagonalSum(matrix){
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i]
  }
  return sum
}
