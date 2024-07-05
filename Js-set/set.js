const mySet = new Set();

mySet.add("BD");
mySet.add("US");
mySet.add("AUS");
mySet.add("KUE");
mySet.add("IN");

console.log(mySet);

// Set Methods
console.log(mySet.values());
mySet.forEach((value) => {
  console.log(value);
});
console.log(mySet.keys());
mySet.delete("IN")
console.log(mySet.values());

if(mySet.has("BD")){
    console.log("You are Bangladeshi")
}else{
    console.log("You are not Bangladeshi")
}