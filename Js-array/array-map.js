// Simple Array with array itarator and new keyword

const myArray = ["A", "B", "C", "D", "E", "F"];
const myArrayPro = new Array();
myArrayPro[0] = "a";
myArrayPro[1] = "b";
myArrayPro[3] = "C";

console.log(myArrayPro);

// Multidimantinal Array
const bangladesh = ["Dhaka", "Narayanganj", "Savar", "Cumilla"];
const pakistan = ["Karaci", "Islamabad", "Kashmir"];
const saudiArab = ["Macca", "Modina", "Riyad"];
const asia = [bangladesh, pakistan, saudiArab];

for (let i = 0; i < asia.length; i++) {
  for (let j = 0; j < asia[i].length; j++) {
    console.log(`${i} = ${j} = ${asia[i][j]}`);
  }
}
// Array De-stucturing
const city = ["Dhaka", "Narayanganj", "Savar", "Cumilla"];
const [present, someTime, never, parmanent] = city;
console.log(parmanent);
