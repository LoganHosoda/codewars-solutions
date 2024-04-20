// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

// STRINGS DATE TIME ALGORITHMS

// SOLUTION

function formatDuration (seconds) {
  const year = 31536000;
  const day = 86400;
  const hour = 3600;
  const minute = 60;

  let years = 0, 
      days = 0, 
      hours = 0, 
      minutes = 0, 
      sec = 0, 
      ans = ``;
  
  while (seconds) {
    switch (true) {
      case seconds >= year:
        years += 1;
        seconds -= year;
        break;
      case seconds >= day:
        days += 1;
        seconds -= day;
        break;
      case seconds >= hour:
        hours += 1;
        seconds -= hour;
        break;
      case seconds >= minute:
        minutes += 1;
        seconds -= minute;
        break;
      default:
        sec = seconds;
        seconds -= seconds;
        break;
    }
  }
  // Addition of years
  if (years == 1) ans += `${years} year, `;
  if (years > 1) ans += `${years} years, `;
  // Addition of days
  if (days == 1) ans += `${days} day, `;
  if (days > 1) ans += `${days} days, `;
  // Addition of hours
  if (hours == 1) ans += `${hours} hour, `;
  if (hours > 1) ans += `${hour} hours, `;
  // Addition of minutes
  if (minutes == 1) ans += `${minutes} minute, `;
  if (minutes > 1) ans += `${minutes} minutes, `;
  // Addition of seconds
  if (sec == 1) ans += `and ${sec} second`;
  if (sec > 1) ans += `and ${sec} seconds`;

  return ans;
}
