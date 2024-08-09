function distinct(a) {
  let dupe = {}
  for (let i = 0; i < a.length; i++) {
    if (!dupe[a[i]]) {
      dupe[a[i]] = 1;
    } else {
      a.splice(i, 1)
      i--
    }
  }
  return a
}
