/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let formattedStr1 = str1.replace(/ \s /g, "").toLowerCase();
  let formattedStr2 = str2.replace(/ \s /g, "").toLowerCase();

  if (formattedStr1.length !== formattedStr2.length) return false;

  let sortedStr1 = formattedStr1.split("").sort().join("");
  let sortedStr2 = formattedStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
