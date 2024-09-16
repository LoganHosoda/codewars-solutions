// ###Introduction
// 
// The I Ching (Yijing, or Book of Changes) is an ancient Chinese book of sixty-four hexagrams. A hexagram is a figure composed of six stacked horizontal lines, where each line is either Yang (an unbroken line) or Yin (a broken line):
// 
// ---------    ---- ----    ---------    
// ---- ----    ---- ----    ---------    
// ---- ----    ---- ----    ---------    
// ---------    ---- ----    ---- ----    
// ---------    ---------    ---- ----    
// ---- ----    ---- ----    ---------    
// The book is commonly used as an oracle. After asking it a question about one's present scenario, each line is determined by random methods to be Yang or Yin. The resulting hexagram is then interpreted by the querent as a symbol of their current situation, and how it might unfold.
// 
// This kata will consult the I Ching using the three coin method.
// 
// ###Instructions
// 
// A coin is flipped three times and lands heads or tails. The three results are used to determine a line as being either:
// 
// 3 tails          ----x----  Yin (Moving Line*)
// 2 tails 1 heads  ---------  Yang
// 1 tails 2 heads  ---- ----  Yin 
// 3 heads          ----o----  Yang (Moving Line*)
// 
// *See bottom of description if curious.
// This process is repeated six times to determine each line of the hexagram. The results of these operations are then stored in a 2D Array like so:
// 
// [['two','h','h','t'],['six','t','h','t'],['four','t','t','t'],
// ['one','h','t','h'],['three','h','h','h'],['five','t','t','h']]
// In each array the first index will always be the number of the line ('one' is the bottom line, and 'six' the top), and the other three values will be the results of the coin flips that belong to that line as heads ('h') and tails ('t').
// 
// Write a function that will take a 2D Array like the above as argument and return its hexagram as a string. Each line of the hexagram should begin on a new line.
// 
// oracle([['two','h','h','t'],['six','t','h','t'],['four','t','t','t'], 
// ['one','h','t','h'],['three','h','h','h'],['five','t','t','h']]);
// should return:
// 
// ---------
// ---------
// ----x----
// ----o----
// ---- ----
// ---- ----
// You are welcome to consult your new oracle program with a question before pressing submit. You can compare your result here. The last test case is random and can be used for your query.
// 
// [1] A Moving Line is a Yang line that will change to Yin or vice versa. The hexagram made by the coin throws represents the querent's current situation, and the hexagram that results from changing its moving lines represents their upcoming situation.
// 
// SOLUTION

function oracle(arrays) {
  let map = {1: '----x----', 2: '---------', 3: "---- ----", 4: "----o----"}
  let strToNum = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6}
  arrays.map(arr => arr[0] = strToNum[arr[0]])
  let sorted = arrays.sort((a, b) => b[0] - a[0])
  let linesArr = sorted.map(arr => {
    let count = 0;
    arr.forEach(el => {
      if (el == 'h') count++;
    })
    if (count == 0) {
      return map[1]
    } else if (count == 1) {
      return map[2]
    } else if (count == 2) {
      return map[3]
    } else {
      return map[4]
    }
  })
  return linesArr.join("\n");
}
