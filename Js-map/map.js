// Simple Map
const myMap = new Map();
myMap.set("key1", "Nazmul");
myMap.set("key2", "Hasan");
myMap.set("key3", "Mamun");
myMap.set("key4", "Sajib");
myMap.set("key5", "Saiful");
console.log(myMap);
console.log(myMap.values());
console.log(myMap.keys());
console.log(myMap.size);
// Loop In Map
for (let key of myMap.values()) {
  console.log(key);
}

// Map Methods delete(), get(), clear(), has()
myMap.delete("key2");
console.log(myMap.values());
//----------
console.log(myMap.get("key1"));
//-------------
console.log(myMap.has("key5"));
if (myMap.has("key5")) {
  console.log("Bro, I am Here");
} else {
  console.log("Sorry, I bro I can't stay there");
}
//--------
myMap.clear();
console.log(myMap.values());