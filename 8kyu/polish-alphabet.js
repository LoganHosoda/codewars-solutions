function correctPolishLetters (string) {
  const strMap = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z'}
  return string.split("").map(s => {
    if (strMap[s] === undefined) return s;
    else return strMap[s]
  }).join("")
}

