// The cuckoo bird pops out of the cuckoo clock and chimes once on the quarter hour, half hour, and three-quarter hour. At the beginning of each hour (1-12), it chimes out the hour. Given the current time and a number n, determine the time when the cuckoo bird has chimed n  times.
// 
// Input Parameters:
// initial_time - a string in the format "HH:MM", where 1 ≤ HH ≤ 12 and 0 ≤ MM ≤ 59, with leading 0’s if necessary.
// n - an integer representing the target number of chimes, with 1 <= n <= 200.
// 
// Return Value: The time when the cuckoo bird has chimed n  times - a string in the same format as initial_time.
// 
// If the cuckoo bird chimes at initial_time, include those chimes in the count. If the nth chime is reached on the hour, report the time at the start of that hour (i.e. assume the cuckoo finishes chiming before the minute is up).
// 
// Example: "03:38", 19   should return "06:00".
// Explanation: It chimes once at "03:45", 4 times at "04:00", once each at "04:15", "04:30", "04:45", 5 times at "05:00", and once each at "05:15", "05:30", "05:45". At this point it has chimed 16 times, so the 19th chime occurs when it chimes 6 times at "06:00".
// 
// Source: International Collegiate Programming Contest, North Central North American Regional, 2023.
// 
// Related Kata: Fizz Buzz Cuckoo Clock
// 
// SOLUTION

function cuckooClock(inputTime, chimes) {
  // 1. split the input times by the semi-colon to obtain HH and MM
  let splitTime = inputTime.split(":")
  
  // 2. for each chime, advance the clock to the nearest quarter of an hour
  while (chimes > 1) {
    console.log(splitTime, chimes)
    let time = splitTime[1];
    if (time == 0) {
      chimes -= splitTime[0]
      if (chimes > 0) {
        splitTime[1] = 15
      }
      continue
    }
    else if (time < 15) splitTime[1] = 15
    else if (time < 30) splitTime[1] = 30
    else if (time < 45) splitTime[1] = 45
    else if (time >= 45) {
      if (splitTime[0] == 12) splitTime[0] = 0
      else splitTime[0]++;
      splitTime[1] = 0;
    }
    console.log(splitTime)
    
    chimes--
  }
  
  // 3. on even hours, count down the amount of chimes per the actual hour (07 == 7 chimes)
  
  
  // 4. on quarters of the hour, count down 1 chime
  
  
  // 5. finally, when chimes == 0, return the current time
  
  
  return splitTime.join(":")
}
