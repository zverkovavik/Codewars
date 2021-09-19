// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

// Example:

// fibonacci(4) // should return  [0,1,1,2]
// fibonacci(-1) // should return []

function fibonacci(n) {
  let result = [0, 1];
  if (n < 1) {
    return [];
  }
  for (let i = 0; i < n - 2; i++) {
    result.push(result[i] + result[i + 1]);
  }
  return result;
}