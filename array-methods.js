//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
//I've written five function, each function receives a parameter: arr(an array), you should code something with arr.
/*
1. getLength(arr)    should return length of arr
2. getFirst(arr)     should return the first element of arr
3. getLast(arr)      should return the last element of arr
4. pushElement(arr)  should push an element to arr, and then return arr
5. popElement(arr)   should pop an element from arr, and then return arr
*/

function getLength(arr){
  const arrLength = arr.length;
  return arrLength
}
function getFirst(arr){
  const firstEl = arr[0];
  return firstEl;
}
function getLast(arr){
  const lastEl = arr[arr.length-1]
  return lastEl;
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop();

  return arr;
}
