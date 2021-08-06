// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

const removeDuplicates = removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta");

console.log(removeDuplicates);

//This tas was something I couldn't think of to get the right solution. 
//Should look into the .filter() functionality
