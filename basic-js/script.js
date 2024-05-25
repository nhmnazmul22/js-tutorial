/*============= Js Object && Array  ================ */

/* 
const obj = {
  fristName: "Nazmul",
  middleName: "Hasan",
  lastName: "Mamun",
  address: "west box nagar, sarulia, demra, Dhaka",
  country: "Bangladesh",
};

const arry = ["apple", "bannana", "mango"];

const myDetails = `My name is ${obj.fristName} ${obj.middleName} ${obj.lastName} and I live in ${obj.address}`;

console.log(obj);
console.log(arry);
console.log(myDetails); 
*/
/*============= If, if else, if else if  ================ */
/* 
let mark = 85;

if (mark >= 80 && mark <= 100) {
  console.log("You got A+");
} else if (mark >= 70 && mark < 80) {
  console.log("You got A");
} else if (mark >= 60 && mark < 50) {
  console.log("You got A-");
} else if (mark >= 50 && mark < 60) {
  console.log("You got B");
} else if (mark >= 40 && mark < 50) {
  console.log("You got C");
} else if (mark >= 33 && mark < 40) {
  console.log("You got D");
} else {
  console.log("Do better Next time! You got F");
}
*/

/*============= Switch Statement  ================ */
/*
let mark2 = 67;

switch (true) {
  case mark2 >= 80 && mark2 <= 100:
    console.log("You got A+");
    break;
  case mark2 >= 70 && mark2 < 80:
    console.log("You got A");
    break;
  case mark2 >= 60 && mark2 < 70:
    console.log("You got A-");
    break;
  case mark2 >= 50 && mark2 < 60:
    console.log("You got B");
    break;
  case mark2 >= 40 && mark2 < 50:
    console.log("You got C");
    break;
  case mark2 >= 33 && mark2 < 40:
    console.log("You got D");
    break;
  default:
    console.log("Do better Next time! You got F");
}
*/
/*============= Basic For loop  ================ */
/*
for (let i = 0; i < 10; i++) {
  console.log(i + " " + "I am Human");
}
*/
/*============= Break & Continue  ================ */
/*
for (let i = 0; i < 10; i++) {
  if (i === 2 || i === 4) {
    continue;
  }
  if (i === 6) {
    break;
  }
  console.log(i + " " + "I am Human");
}
*/
/*============= While Loop ================ */
/*
let i = 0;
while (i <= 3) {
  let j = 0;
  while (j <= 3) {
    console.log(i, j);
    j++;
  }
  i++;
}*/
/*============= Do While Loop ================ */
let i = 0;
do {
  console.log(i + 100);
  i++;
} while (i < 3);

const result = minNum([20, 30, -40, -55, 60, 70]);
console.log(result);

/*============= JavaScript Funtion ================ */

function minNum(arry) {
  if (arry.length === 0) {
    return "Please, Insert Some number in Array";
  }
  let smallNum = arry[0];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] < smallNum) {
      smallNum = arry[i];
    }
  }
  return smallNum;
}
