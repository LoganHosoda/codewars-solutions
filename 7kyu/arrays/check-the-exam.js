function checkExam(array1, array2) {
  const total = array2.reduce((acc, ans, idx) => {
    return acc += (ans == "" ? 0 : ans == array1[idx] ? 4 : -1)
  }, 0)
  return total < 0 ? 0 : total;
}
