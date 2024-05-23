// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// SOLUTION

function validatePIN (pin) {
  if (pin.match(/[^0-9]/g)) return false
  const pinSize = { 4: true, 6: true };
  return pinSize[pin.length] ? true : false;
}