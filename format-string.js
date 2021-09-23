// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

function list(names){
  if (!names.length) {
    return '';
  }
  let array = [];
  for (element of names) {
    array.push(...Object.values(element));
  }
  console.log(array);
  switch (array.length) {
      case 1:
      return array.join('');
      case 2:
      return `${array[0]} & ${array[1]}`;
      default: 
      return `${array.slice(0, array.length - 1).join(', ')} & ${array.slice(-1)}`;
  }
}