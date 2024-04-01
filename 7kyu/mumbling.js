// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// SOLUTION

function accum(s) {
  let mumble = '';
  for (i = 0; i < s.length; i++) {
    mumble += s[i].toUpperCase();
    if (i) {
      mumble += s[i].toLowerCase().repeat(i);
    }
    if (i < s.length - 1) {
      mumble += '-';
    }
  }
  return mumble;
}