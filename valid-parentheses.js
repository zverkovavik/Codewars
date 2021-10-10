// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
  parens = parens.split('');
  let open = '(';
  let close = ')';
  let count = {
    open: 0,
    close: 0,
  };

  if (parens.length % 2 !== 0 || parens[0] === close || parens[parens.length - 1] === open) {
    return false;
  } 
  for (let el of parens) {
    el === open ? count.open += 1 : count.close += 1;
    if (count.close > count.open) {
      return false;
      }
  };
  return count.close === count.open;
}
 
// 

function validParentheses(parens){
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') count++;
    if (parens[i] == ')') count--;
    if (count < 0) return false;
  }
  
  return count === 0;
}