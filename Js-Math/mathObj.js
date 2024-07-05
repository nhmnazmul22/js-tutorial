// JavaScript provides 8 mathematical constants that can be accessed as Math properties:
// Math.E;----------------------------- // returns Euler's number
// Math.PI;--------------------------- // returns PI
// Math.SQRT2;----------------------- // returns the square root of 2
// Math.SQRT1_2;---------------------// returns the square root of 1/2
// Math.LN2;--------------------- --// returns the natural logarithm of 2
// Math.LN10;--------------------- // returns the natural logarithm of 10
// Math.LOG2E;--------------------// returns base 2 logarithm of E
// Math.LOG10E;----------------- // returns base 10 logarithm of E

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);

// #1 Math.abs Method --- return a Absolute value
/*
const number = -7.255;
const result = Math.abs(number);
console.log(result);
*/

// #2 Math.ceil Method
/*
const number = -7.8;
const result = Math.ceil(number);
console.log(result);
*/
// #3 Math.floor Method
/*
const number = 7.9;
const result = Math.floor(number);
console.log(result);
*/
// #4 Math.round Method
/*
const number = 7.49;
const result = Math.round(number);
console.log(result);
*/
// #5 Math.max & Math.min Method

// const number = [20, 40, 60, 88, 94];

// const result1 = Math.max(...number);
// const result2 = Math.min(...number);
// console.log(result1);
// console.log(result2);

// const randomNumber = Math.random() * 5;
// console.log(randomNumber)

// #6 Math.trunc(x) returns the integer part of x:
/*
const number = 7.9;

const result = Math.trunc(number);
console.log(result);
*/
// #7 Math.sign(x) returns if x is negative-->(-1), null--->(0) or positive---->(1):
/*
const number = -7.6;
const result = Math.sign(number);
console.log(result);
*/

// #8 Math.pow(x,y) returns the value of x to the power of y:
/*
const result = Math.pow(9, 2);
console.log(result);
*/
// #9 Math.sqrt(x) returns the square root of x:
/*
const result = Math.sqrt(124);
console.log(result);
*/
// #10 Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
/*
const div = document.getElementById("div");

setInterval(() => {
  const red = Math.floor(Math.random() * 257);
  const green = Math.floor(Math.random() * 257);
  const blue = Math.floor(Math.random() * 257);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  div.style.background = rgbColor;
}, 1000);
*/

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRndInteger(20, 10));
