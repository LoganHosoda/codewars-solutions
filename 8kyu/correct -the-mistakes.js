// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// SOLUTION

function correct(string) {
	const map = {0: 'O', 5: 'S', 1: 'I'}
  let ans = '';
  for (i = 0; i < string.length; i++) {
    if (string[i] == 1 || string[i] == 5 || string[i] == 0) {
      ans += map[string[i]]
    } else if (string == undefined) {
      ans += " ";
    } else {
      ans += string[i];
    }
  }
  return ans;
}