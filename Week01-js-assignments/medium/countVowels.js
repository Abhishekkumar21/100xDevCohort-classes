/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// function countVowels(str) {
//   // Your code here
//   const lowercasedStr = str.toLowerCase(); // to handle the both the cases, I preffered to make entire string in lowercase,you can d uppercase also
//   const lowercasedStrArray = [...lowercasedStr];

//   let count = 0;
//   for (let ch = 0; ch < lowercasedStrArray.length; ch++) {
//     if (
//       lowercasedStrArray[ch] === "a" ||
//       lowercasedStrArray[ch] === "e" ||
//       lowercasedStrArray[ch] === "i" ||
//       lowercasedStrArray[ch] === "o" ||
//       lowercasedStrArray[ch] === "u"
//     )
//       count++;
//   }
//   return count;
// }

//Approach -2

function countVowels(str) {
  const lowercasedStr = str.toLowerCase();
  //const lowercasedStrArray = [...lowercasedStr]; // you can do this also or can't , its your choice
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let ch = 0; ch < lowercasedStr.length; ch++) {
    if (vowels.includes(lowercasedStr[ch])) {
      count++;
    }
  }
  return count;
}
module.exports = countVowels;
