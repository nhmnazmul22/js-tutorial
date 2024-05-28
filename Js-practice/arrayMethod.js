/*============= Basic Array Methods  ================ */

//#1 Array Concate Method --- New Array Return kore
/*
const array1 = ["A", "B", "C", "D"];
const array2 = ["E", "F", "G", "H"];
const result = array1.concat(array2);

console.log(result);
const array3 = ["I", "J", "K", "L", "M"].concat(result)
console.log(array3);
*/

//#2  Array Form Method ---- Stirng ke Array convart kore dei

/*
const name = "Nazmul Hasan Mamun";
const array = Array.from(name);
console.log(array);
*/

// #3 Array Filter Method --- New Array Return kore
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];
const result = numbers.filter((number) => {
  return number > 50;
});

console.log(result);
console.log(numbers);
*/
// #4 Array Find Method --- return a frist single value
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];

const result = numbers.find((number) => {
  return number > 30;
});

console.log(result);
*/
// #5 Array FindIndex Method --- return a frist single value index
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];
const result = numbers.findIndex((number) => {
  return number > 30;
});

console.log(result);
*/
// #6 Array forEach Method --- work like for loop
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];

let array = [];
const result = numbers.forEach((number) => {
  array.push(number * 2);
});

console.log(array);
*/
// #7 Array include Method --- return a boolean value like: true or false
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];

const result = numbers.includes(330);
console.log(result);
*/
// #8 Array indexOf Method --- return the index number but if it not find the value in array it will give -1;
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];
const result = numbers.indexOf(330);
console.log(result);
*/
// #9 Array reverse Method --- it reverse the array value and it change the main array and it also give a new array;
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];

const result = numbers.reverse();
console.log(result);
console.log(numbers);
*/
// #10 Array push Method --- it add new value in end of the array and change the main array and it return the new changed array lenght-- ;
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];

const result = numbers.push(400);
numbers.push(300);
numbers.push(500);

console.log(result);
*/
// #11 Array pop Method --- it remove value in end of the array and change the main array and it return the removed value-- ;
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];
const result = numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);
console.log(result);
*/
// #12 Array sort Method --- sort in decending order ;
/*
const numbers = [20, 30, 33, 50, 70, 66, 55, 22];
const result = numbers.sort();
console.log(result);
*/
// #12 Array Slice Method --- It cut the velue form start and end index and it not change main array it return a array of cuting values ;

const numbers = [20, 30, 33, 50, 70, 66, 55, 22];

const result = numbers.slice(0, 4);
console.log(result);
console.log(numbers);
 