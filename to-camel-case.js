// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
  if (!str) {
    return str;
  }
  let array = [];
  if (str.includes('-')) {
    array = str.split('-');
  } else if (str.split('_')) {
    array = str.split('_');
  }
  let result = array.slice(1).map((element) => element.slice(0,1).toUpperCase() + element.slice(1));
  return array[0] + result.join('');
}