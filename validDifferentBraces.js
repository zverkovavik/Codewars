function validBraces(braces){
  const stack = [];
  const bracesArray = braces.split('');
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const openingBraces = new Set(Object.keys(brackets));
  const closingBraces = new Set(Object.values(brackets));
  for (let brace of bracesArray) {
    if (openingBraces.has(brace)) {
      stack.push(brace);
    }
    if (closingBraces.has(brace)) {
      if (!stack.length) return false;
      let lastBracket = stack.pop();
      if (brackets[lastBracket] !== brace) return false;
    }
  }
  return !stack.length;
}
