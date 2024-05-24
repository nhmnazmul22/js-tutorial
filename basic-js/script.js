/*============= Js Object && Array  ================ */

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
/*============= If, if else, if else if  ================ */

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

/*============= Switch Statement  ================ */

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
/*============= Basic For loop  ================ */

for (let i = 0; i < 10; i++) {
  console.log(i + " " + "I am Human");
}
