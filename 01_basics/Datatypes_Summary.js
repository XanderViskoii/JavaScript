//  Primitive Data Types

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let UserEmail; //value of this as of now is undefined

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 346784569889743434436784543n //automatically converted to bigInt by using n



// Refrence (Non Primitive)

// Array, Objects, Functions

/*const heroes = ["Shaktimaan","Naagraj","Doga"]; //Array
let myObj = {
    name:"Xander",
    age:33,
}

const myFunction =  function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp); */

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive) 

let myName = "XanderViskoii"

let otherName = myName
otherName = "RadheyRani"

console.log(otherName);
console.log(myName);

let user1 = {
    email: "usef@xander.com",
    upi: "user@ybl"
}
let user2 = user1

user2.email = "user@viskoii.com"

console.log(user1.email);
console.log(user2.email);
