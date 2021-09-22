// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  let aChar = 97;
  let zChar = 122;
  let alphabet = [];
  for (let i = aChar; i <= zChar; i++) {
    alphabet.push(i);
  }
  let testStr = String.fromCharCode(...alphabet);
  let uniqueSymbols = [...new Set(string.toLowerCase().split('').sort())].join('');
  return uniqueSymbols.includes(testStr);
}