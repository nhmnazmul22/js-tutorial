// Class Constructor--------------------------------------

class MyNewClass {
  addTwoNumber(num1, num2) {
    console.log(num1 + num2);
  }
  addThreeNumer(num1, num2, num3) {
    console.log(num1 + num2 + num3);
  }
  addFourNumer(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3 + num4);
  }

  constructor() {
    newObj.addTwoNumber(10, 20);
    newObj.addThreeNumer(5, 10, 20);
    newObj.addThreeNumer(10, 20, 50, 60);
  }
}

const result = new MyNewClass();
console.log(result);

class StudentInfo {
  constructor(fristName, lasName, roll, section, session, year, address) {
    this.fristName = fristName;
    this.lasName = lasName;
    this.roll = roll;
    this.section = section;
    this.session = session;
    this.year = year;
    this.address = address;
  }

  infoOfStudnet() {
    const info = `I am student of SRADC. My full Name is ${this.fristName} ${this.lasName}.I am ${this.year} old. I Live in ${this.address} and I read in class ${this.section}. My roll no is ${this.roll}. My session is ${this.session}. `;
    console.log(info);
  }
}

const student1 = new StudentInfo(
  "Nazmul",
  "Hasan",
  113,
  "1st Year",
  "2021-2022",
  22,
  "Dhaka"
);
student1.infoOfStudnet();
