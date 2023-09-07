const accountId = 14453
let accountEmail = "Xander@googler.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
/* JavaScript is so safe that we can reserve memory without even using let or var.
This way of assignment is not good i.e without using let to declare a variable */
let accountState;
// accountId = 2 //not allowed


accountEmail = "ab@ab.com"
accountPassowrd = "333333"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])