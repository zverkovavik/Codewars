// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function isPrime(num) {
  let root = Math.floor(Math.sqrt(num));
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < root + 1; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}