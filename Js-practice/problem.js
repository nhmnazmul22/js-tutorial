// #question 2
/*
You have an array of actors with their respective payments-
*/

// const actors = [
//   { name: "Actors 1", payment: 100 },
//   { name: "Actors 2", payment: 200 },
//   { name: "Actors 3", payment: 400 },
//   { name: "Actors 4", payment: 300 },
// ];

// function cutSallery(actors) {
//   actors.forEach((actor) => {
//     actor.payment = actor.payment - (actor.payment * 5) / 100;
//   });
// }
// cutSallery(actors);

// console.log(actors);

// #question 2

const text = "I fell in love JavaScript programmin language";

function findVowel(text) {
  const result = text.match(/[aeiou]/gi);
  return `Vowel = ${result} and Length is ${result.length}`;
}

const ans = findVowel(text);
console.log(ans);
