// Static keyword----------------------------------------
class SumNumber {
  constructor(array) {
    this.array = array;
  }

  sumOfArray() {
    const total = this.array.reduce((preValue, currenValue) => {
      return preValue + currenValue;
    }, 0);
    console.log(total);
  }
  static showInfo() {
    console.log("I am Nazmul Hasan");
  }
}

const result = new SumNumber([10, 20, 30, 50, 60]);
console.log(result);
result.sumOfArray();
SumNumber.showInfo();
