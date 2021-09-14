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

// интерпретация array.includes()
function check(a, x) {
  // your code here
  let result = a.filter(element => element === x);
  return !!result.length;
}

function positiveSum(arr) {
  return arr.filter(element => element > 0).reduce((acc, val) => { 
    return acc + val;
  }, 0);
}

// Solution of Pandemia task https://www.codewars.com/kata/5e2596a9ad937f002e510435/
function infected(s) {
  let arr = s.split('');
  if (arr.includes('X') && arr.includes('0') && arr.includes('1')) {
    let infectedPeople = s.split('X').reduce((acc, val) => {
      if (val.includes('1')) { 
        return acc + val.length;
      }
      return acc;
    }, 0);
    
    let summLength = s.split('X').join('').length;
    return 100 * infectedPeople/summLength;
  } else if(!arr.includes('X')) {
    return arr.filter((element) => element === '1').length ? 100 : 0;
  } else {
     return 0; 
  }
}

infected("01000000X000X011X0X"); 
infected("01X000X010X011XX");
infected("XXXXX");
infected("0000000010");

function likes(names) {
  // TODO
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length >= 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2 === 1 ? names[2] : (names.length - 2) + ' others'} like this`;
  } else {
    return 'no one likes this';
  }
}
