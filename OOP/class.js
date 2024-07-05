// Simple Class---------------------------------------

class MyClass {
  addTwoNumber(num1, num2) {
    console.log(num1 + num2);
  }
  addThreeNumer(num1, num2, num3) {
    console.log(num1 + num2 + num3);
  }
  addFourNumer(num1, num2, num3, num4) {
    console.log(num1 + num2 + num3 + num4);
  }
}

const newObj = new MyClass();

newObj.addTwoNumber(10, 20);
newObj.addThreeNumer(5, 10, 20);
newObj.addThreeNumer(10, 20, 50, 60);
