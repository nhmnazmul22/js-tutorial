// Super Keyword----------------------------------------

class Father {
  showPropery(property) {
    console.log(`I have ${property} Biga property`);
  }
  showInfo() {
    console.log("I am Nazmul Hasan");
  }
}

class Child extends Father {
  showDetails() {
    super.showPropery(20);
    super.showInfo();
  }
}

const childObj = new Child();
childObj.showDetails();
