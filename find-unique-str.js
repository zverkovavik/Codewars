// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 3 strings.

function findUniq(arr) {
  let extraArr = [];
  let counter = {};
  arr.forEach((element) => {
    let str = [...new Set(element.toLowerCase().split(''))].sort().join('');
    extraArr.push(str);
    counter[str] = element;
  });
  extraArr = extraArr.sort();
  if (!extraArr[0]) {
    return extraArr.pop();
  } else {
  let result = extraArr[1].includes(extraArr[0]) ? extraArr.pop() : extraArr[0];
  return counter[result];
  }
}