// var number = function(busStops){
//   return busStops.reduce((acc, arr) => acc + arr[0] - arr[1],0)
// }

const number = (busStops) => busStops.reduce((acc, arr) => acc + arr[0] - arr[1], 0)
