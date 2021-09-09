const intDiff = (arr, n) => {
  // your code goes here
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(i, arr.length);
    newArr.forEach((element) => {
      element - arr[i] === n ? count++ : count;
    });
  }
  return count;
};

function check(a, x) {
  // your code here
  let result = a.filter(element => element === x);
  return !!result.length;
}
