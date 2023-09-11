const name = "Xander"
const repoStart = 1

//console.log(name + repoStart + " Value");

console.log(`Hello my name is ${name} and my repoStarts are ${repoStart} `);

const gameName = new String('Xander-Sukhoi-versonica-syptum')  //Another way to declare string ; in this we r using objects of javascript 
/*console.log(gameName);
console.log(gameName[1]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8)); */
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

// const anotherString = gameName.slice(-12,4)
// console.log(anotherString);

const newString1 = "    xander  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://xander.com/xander%20viskoii"

console.log(url.replace('%20','-' ));

console.log(url.includes('xander'));

console.log(gameName.split('-'));

