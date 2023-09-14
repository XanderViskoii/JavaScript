const marvelH1 = ["Cpatain Rogers","AntMan","Dr Bruce Banner"]
const marvelH2 = ["Natasha","Clint","Stephen Strange"]

// marvelH1.push(marvelH2)

// console.log(marvelH1);
// // console.log(marvelH1.length)
// console.log(marvelH1[3][1]);

// const Avengers = marvelH1.concat(marvelH2)
// console.log(Avengers); //concat creates a new array instead of modifying previous array

const Avengers1 = [...marvelH1, ...marvelH2] //spread operator : drop a glass it will spread

// console.log(Avengers1);

const R_Arr = [1, 2, 3, [4, 5, 6],7, [6, 7, [4, 5]]]
// console.log([...R_Arr]);
const R2_arr = R_Arr.flat(Infinity)
console.log(R2_arr);


console.log(Array.isArray("Xander"));
console.log(Array.from("Xander"))
console.log(Array.from({name: "Xander Viskoii"})); //Empty array because can't directly convert this object into array will have to mention which one should be used for arrays keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
