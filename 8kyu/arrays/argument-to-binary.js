const arr2bin = (arr) => arr.reduce((acc, n) => acc += (typeof n == 'number' ? n : 0), 0).toString(2)
