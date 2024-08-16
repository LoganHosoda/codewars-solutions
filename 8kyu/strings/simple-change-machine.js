function changeMe(moneyIn){
  const moneyMap = { "£5": [25, 0], "£2": [10, 0], "£1": [5, 0], "50p": [2, 1], "20p": [0, 2] }
  let x = moneyMap[moneyIn]
  return x != undefined ?  ("20p ".repeat(x[0]) + "10p ".repeat(x[1])).trim() : moneyIn;
}
