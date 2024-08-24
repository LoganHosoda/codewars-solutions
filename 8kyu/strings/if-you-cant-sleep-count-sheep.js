var countSheep = function (num){
  let sheep = ""
  for (let i = 0; i < num; i++) {
    sheep += `${i+1} sheep...` 
  }
  return sheep;
}
