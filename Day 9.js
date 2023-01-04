//--------Map / filter--------
// map-advanced form of loop
// == loosely equal {'2' is equal to 2}
// === strictly equal {'2' is equal to '2' }
//  '2' is not equal to 2
/*
const scores = [1,2,3,4];
const newScores = scores.map((i) => {
    return i*2;
})
const newScores1 = scores.filter((i) => i!==2);
const newnewScore = newScores.filter((i)=>i!==2)

console.log(scores)
console.log(newScores)

console.log(newScores1)
console.log(newnewScore)

const equaltotwo = scores.filter((i)=> i==2)
console.log(equaltotwo)

*/

let arr = [
  { item: "rice", tag: "cereal" },
  { item: "wheat", tag: "cereal" },
  { item: "goat meat", tag: "meat" },
  { item: "chicken meat", tag: "meat" },
  { item: "fish", tag: "meat" },
];
let meat = arr.filter((selection_type) => selection_type.tag == "meat");
console.log(meat);
/*
[
  { item: 'goat meat', tag: 'meat' },
  { item: 'chicken meat', tag: 'meat' },
  { item: 'fish', tag: 'meat' }
]
*/

const meatitem = meat.map((i) => i.item);
console.log(meatitem);
// ["goat meat", "chicken meat", "fish"];
