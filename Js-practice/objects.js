const person = {
  firstName: "Nazmul",
  middleName: "Hasan",
  lastName: "Mamun",
  age: 22,
  fatherName: "Monirul Islam",
  mothersName: "Samsun Nahar",
  siblingNum: "2 Sisters",
  education: "HSC Passed",
  learning: "BA in English, Mern Stack Developmnet in Ostad Platform",
  address: "West Box Nagar, Sarulia, Demra, Dhaka",
  getDatils: function () {
    const details = `I am a ${this.firstName} ${this.middleName} ${this.lastName}. I live in ${this.address}. I am ${this.age} years old. My Father and Mothder name is ${this.fatherName} and ${this.mothersName}. I have ${this.siblingNum}.`;
    console.log(details);
  },
};

// console.log(`${Object.keys(person)}: ${Object.values(person)}`);

// Constructor function------------
function Person(firstName, lastName, age, address, education) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.address = address;
  this.education = education;
}

const person1 = new Person("Nazmul", "Mamun", 20, "Dhaka", "HSC");
const person2 = new Person("Nazmul", "Hasan", 22, "Cumilla", "BA");

Person.prototype.learning = "MERN Stack";
Person.prototype.changeName = function (name) {
  return (this.firstName = name);
};
person1.changeName("GTA");
person2.changeName("GTA");
console.log(person1);
console.log(person2);
console.log(person2.learning);
