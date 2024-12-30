String.prototype.toAlternatingCase = function () {
  let split = this.split('')
  return split.map(char => {
    let c = char.charCodeAt()
    if (c >= 97 && c <= 122) return char.toUpperCase()
    else if (c >= 65 && c <= 90) return char.toLowerCase()
    else return char
  }).join('')
}
