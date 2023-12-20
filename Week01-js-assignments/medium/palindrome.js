/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowercaseAndCleanStr = str.toLowerCase().replace(/[^a-z]/g, ""); //lowercase and removed all non-alphabatic characters

  for (let ch = 0; ch < lowercaseAndCleanStr.length / 2; ch++) {
    if (
      lowercaseAndCleanStr[ch] !==
      lowercaseAndCleanStr[lowercaseAndCleanStr.length - ch - 1]
    ) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
