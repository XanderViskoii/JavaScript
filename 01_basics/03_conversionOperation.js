let score = true


// const {score} = req.body //we don't know the type of data
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) //this guarantees score to be the type of number
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


//"33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0

let isLoggedIn = 2

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" = false
//  "Xander" => true

let SomeNumber = 33

let stringNumber = String(SomeNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//*********************************  Operations *************************
let value = 3
let negValue = -value
console.log(negValue);

// console.log(2/3)

let str1 = "hello"
let str2 = " Xander"

let str3 = str1 + str2
console.log(str3);
