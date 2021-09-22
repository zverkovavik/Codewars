// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  let counter = {};
  let result = null;
  let uniqueNumbers = [...new Set(arr)];
  for (element of arr) {
    counter.hasOwnProperty(element) ? counter[element] += 1 : counter[element] = 1;
  }
  for (element of uniqueNumbers) {
  if (counter[element] === 1) {
    result = element;
      }
    }
  return result;
}
