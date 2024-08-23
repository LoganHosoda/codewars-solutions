function isVow(a){
  let charMap = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' }
  for (let i = 0; i < a.length; i++) {charMap[a[i]] != undefined ? a[i] = charMap[a[i]] : null}
  return a;
}
