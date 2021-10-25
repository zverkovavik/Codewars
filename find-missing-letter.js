// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function findMissingLetter(array) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphArray = alphabet.split("");
  let index = alphArray.indexOf(array[0]);
  if (index === -1) {
    alphArray = alphabet.toUpperCase().split("");
    index = alphArray.indexOf(array[0]);
  }
  const resultArr = alphArray.slice(index, index + array.length);
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] !== array[i]) {
      return resultArr[i];
    }
  }
}

//  shorter way
function findMissingLetter(array) {
  let firstIndex = array[0].charCodeAt();
  for (let i = 1; i < array.length; i++) {
    if (firstIndex + i !== array[i].charCodeAt()) {
      return String.fromCharCode(firstIndex + i);
    }
  }
}