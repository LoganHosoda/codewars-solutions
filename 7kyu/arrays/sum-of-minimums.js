const sumOfMinimums = (arr) => arr.reduce((acc, num) => acc += Math.min(...num), 0)
