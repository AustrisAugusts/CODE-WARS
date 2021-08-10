// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  const strToLowerCase = str.toLowerCase();
  return !/(.).*\1/.test(strToLowerCase);
}

const test = isIsogram("Dermatoglyphics"); 
const test2 = isIsogram("aba");
const test3 = isIsogram("moOse");

console.log(test);
console.log(test2);
console.log(test3);
