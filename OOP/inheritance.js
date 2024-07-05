// Class inheritance--------------------------------------

class Father {
  showPropery(property) {
    console.log(`I have ${property} Biga property`);
  }
}

class Child extends Father {
  showPropery(property) {
    console.log(`I have ${property} biga property`);
  }
  showInfo() {
    console.log("I extend the Father");
  }
}

class NextChild extends Child {}

const childObj = new Child();
const fatherObj = new Father();
const nextChild = new NextChild();
console.dir(childObj);
console.log(fatherObj);

childObj.showPropery(30);
fatherObj.showPropery(20);
nextChild.showPropery(60);
