// Link to the task: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  //conver num toString, split to get an array
  const digits = num.toString().split("");

  // loop through the array and square each of them
  const squareDigit = digits.map(x => x * x);

  // convert array toString, remove the "," and join all
  const mergeDigit = squareDigit.toString().split(",").join("");

  // convert string to a number
  const finalDigit = parseInt(mergeDigit);

  // return the final num
  return finalDigit;
}

const test1 = squareDigits(3212);
const test2 = squareDigits(2225);
const test3 = squareDigits(7408);
const test4 = squareDigits(3829);
console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
