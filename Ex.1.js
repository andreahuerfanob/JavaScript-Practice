// ex 1
function printInt(n) = prints all natural numbers 1 to n & prints them in console:
function printInt(n) {
  for (var x = 1; x <= n; x++) {
    console.log(x);
  }
}

// ex 2 
// printIntRev: takes n parameter & prints natural numbers in reverse 
// start: n
// stop: 1
// decrement 1
function printIntReverse(n){
  for(var x= n; x>= 1; 1--){
      console.log(i);
  }
  }
  printIntReverse()

 
//ex 3: 
  //function takes x:
  // if x = # returns string= 'number' 
  // if x = string returns 'string'
  // if x = boolean , returns 'boolean'
  // otherwise: returns -1
  function checkInput(x){
    if(typeof x === "number" ) {
        return "number";
    } 
    else if(typeof x === "string"){ 
        return "string";
    }
    else if(typeof x === "boolean"){ 
        return "boolean";
    }
    else if(typeof x === ) {}
    else {return -1
    }
        return -1;
    }


//switch way: 
switch (typeof x){
    case "number":
        return "number";
    case "string":
        return "string";
    case "boolean":
        return "boolean";
    default:
        return -1;
    }
// 3rd solution
var type = typeof x;
if (
    type === "number" ||
    type === "string"
    type === "boolean"
    ? type : -1;

) 


// Ex 4
// function simpleEvenAdding(num) takes a #, adds up all even #s from 1 to # & returns:
// Hint: loop + if conditional + %
function simpleEvenAdding(num) {
  var solution = 0;
  // add #s
  for (var i = 1; i <= num; i++) {
    // only add even #
    if (i % 2 === 0) {
      solution += i;
    }
  }
  return solution;
}
console.log(simpleEvenAdding(10));

// option 2
for (var i = 1; i <= num; i +=2) {
    solution += i;
    }
  return solution;
}
console.log(simpleEvenAdding(10));

// ex 5 
// function letterCapitalize(str) takes a string and capitalizes the 1st letter of each word. Given words will be separated by only one space.
// Built-in function  uppercase. 
// function to separate string into an array of words. (split)
function letterCapitalize(str) { 
 // split words 
 // capitalize 
 var solution = "";
 // separate words
 var words = str.split("");
 // 1st charac. of each word = capitalize
 var length = words.length; 
 for(var i=0; i < length; i++){
  solution += " " + words[i][0].toUpperCase() + words [i].slice
}
  return solution.slice(1);
}
console.log(letterCapitalize("hello world"));

// function simpleReverse(str) take a string & return the string in reverse order. 
// Hint: Think of how you can loop through a string or array of characters backwards to produce a new stringsimpleReverse(‘hello’) ======> ‘olleh’
// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’
// loop


// ex 7
//  function findDiff(arr) 
// array of numbers as parameter,  return difference between the maximum number and the minimum number (max - min). 
function findDiff(arr) {
// find min & max 
var min = arr[0];
var max = arr[0];
var length = arr.length;

for (var i = 0; i < length; i++){
  if (arr[i]<min) {
    min = arr[i];
  }
  if (arr[i]> max) {
    max = arr[i];
  }
}
// max - min 
return max - min; 
}
console.log(findDiff([1,2,4,5,6]));

// ex 8
// function timeConvert(num) 
// takes # as parameter 
// returns # of hours and minutes the parameter converts to. 
//Separate # of hours and minutes with a colon.
//Dividing(/) and modulo(%) the number 60.
function timeConvert(num) {
// hours 
var hour = parseInt(num / 60); 
// minutes 
var min = parseInt(num % 60);
// combine 
return hour + ":" + min;
}
console.log(timeConvert(1000));

// ex 9
//function findStr(str, long) 
//takes two strings as parameters 
// return how many str you can find in long.
//Assume Str is not empty string.
//Hint: loop through the long, to check if there is any str
function findStr(str, long) {
  // solution 1 
  var longlength = long.length;
  var strLength = str.length;
  // counter: count  the # of str in long 
  var counter = 0;
  for(var i=0; i< long.length - strLength; i++) {
      if (str === long.slice(i, i + str.length)) {
          counter++;
      }
  }
}
console.log(findStr("hi", "dasdhidasdahidashi"));


// ex 10
// function selfDividingNumbers(left, right) 
// taking two number bound as parameters 
// returns an array of every possible self dividing number between them, including the bounds. 

function selfDividingNumbers(left, right) {
// llop from left to right 
var solution = [];
for(var i= left; i <= right; I++) {
// check if # is self dividing #
if (i is selfDividingNumbers){
  solution.push(i);
}
}
return solution;
}
function checkselfDividing(num){

}

// ex 11
// function moveZeros(nums) 
//takes  array of numbers and 
//moves all 0’s to the end of it while maintaining order of the non-zero elements. 
function moveZeros(nums){
  var solution = [];
  var counter = 0;
  // loop through array 
  var length = nums.length
  for(var i=0;i< length; i++){
    if(numbs)[1]===0 {
      counter++;
    } else {
      solution.push(nums[i]);
        } 
    } 
  }
  // adding 0s
  while (counter >0){
    solution.push(0);
    counter--;
  }
  return solution;
}

// ex 12
//average(nums) function //calculates:  average of an array of numbers.
function average(nums){
  // get sum
  var solution = 0;
  var length = nums.length
  for(var i=0; 1 < length; i++) { 
    sum += nums[i];
  }
  // sum / length 
  return sum / length;
}




















