function howMuchILoveYou(num) {
  let phrases = { 1: 'I love you', 2: 'a little', 3: 'a lot', 4: 'passionately', 5: 'madly', 6: 'not at all', 0: 'not at all' }
  num > 6 ? num = Math.ceil(num % 6) : num
  return phrases[num]
}
